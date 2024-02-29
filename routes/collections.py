from os import path, mkdir
from aiohttp import web
import shutil
import time

from ..utils import collections_path, get_parent_path, add_uuid_to_filename, \
    config_path, get_config, git_init, run_cmd, git_remote_name


# filename, folder_path, folder_type = 'outputs' | 'sources'
async def api_add_to_collections(request):
    json_data = await request.json()
    filename = json_data.get('filename')
    if not filename:
        return web.Response(status=404)

    folder_path = json_data.get('folder_path', '')

    folder_type = json_data.get("folder_type", "outputs")
    parent_path = get_parent_path(folder_type)

    if not path.exists(collections_path):
        mkdir(collections_path)

    source_file_path = path.join(parent_path, folder_path, filename)
    if not path.exists(source_file_path):
        return web.Response(status=404)

    new_filepath = path.join(
        collections_path,
        add_uuid_to_filename(filename)
    )

    if path.isdir(source_file_path):
        shutil.copytree(source_file_path, new_filepath)
    else:
        shutil.copy(source_file_path, new_filepath)

    return web.Response(status=201)

# filename, content
async def api_create_new_workflow(request):
    json_data = await request.json()
    filename = json_data.get('filename')
    content = json_data.get('content')

    if not (filename and content):
        return web.Response(status=404)

    new_filepath = path.join(
        collections_path,
        add_uuid_to_filename(filename)
    )
    with open(new_filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return web.Response(status=201)

async def api_sync_my_collections(_):
    try:
        if not path.exists(config_path):
            return web.Response(status=404, text="Config path does not exist")

        config = get_config()
        git_repo = config.get('git_repo')
        if not git_repo:
            return web.Response(status=404, text="Git repo not found in config")

        git_init()

        # 添加远程仓库
        await add_remote_if_needed(git_remote_name, git_repo, collections_path)
        
        # 获取当前分支
        branch = await get_default_branch(git_remote_name, collections_path)
        print('branch:', branch)
        
        if await check_status(collections_path):
            # 如果有更改，执行提交操作
            await commit_changes(collections_path)
            
            # 拉取远程仓库
            await pull_remote(git_remote_name,branch, collections_path)
            
            # 合并远程分支并推送
            await merge_and_push(git_remote_name, branch, collections_path)
            
        else:
            # 拉取远程仓库
            await pull_remote(git_remote_name, branch, collections_path)
            
            # 设置分支上游
            await set_branch_upstream(git_remote_name, branch, collections_path)
            
        return web.Response(status=200)

    except Exception as e:
        return web.Response(status=500, text=str(e))

async def get_default_branch(remote_name, collections_path):
    cmd = f'git remote show {remote_name} | grep "HEAD branch"'
    result = run_cmd(cmd, collections_path)
    parts = result.stdout.split(': ')
    if len(parts) < 2:
        raise ValueError(f'Cannot determine default branch for remote {remote_name}')
    return parts[1].strip()


# add the remote if Needed
async def add_remote_if_needed(remote_name, git_repo, collections_path):
    cmd = f'git remote -v'
    result = run_cmd(cmd, collections_path)
    if result.returncode != 0:
        raise ValueError(f'Error running git remote -v: {result.stderr}')
    if remote_name in result.stdout:
        return result.stdout
    else:
        return await add_remote(remote_name, git_repo, collections_path)
    
    
# add the remote
async def add_remote(remote_name, git_repo ,collections_path):
    cmd = f'git remote add {remote_name} {git_repo}'
    result = run_cmd(cmd, collections_path)
    if result.returncode != 0:
        raise ValueError(f'Error running git remote add {remote_name} {git_repo}: {result.stderr}')
    return result.stdout


# set branch upstream
async def set_branch_upstream(remote_name, branch, collections_path):
    cmd = f'git branch --set-upstream-to={remote_name}/{branch} {branch}'
    result = run_cmd(cmd, collections_path)
    if result.returncode != 0:
        raise ValueError(f'Error running git branch --set-upstream-to={remote_name}/{branch}: {result.stderr}')
    return result.stdout

# check status return True if there are changes
async def check_status(collections_path):
    cmd = 'git status -s'
    result = run_cmd(cmd, collections_path)
    if result.returncode != 0:
        raise ValueError(f'Error running git status -s: {result.stderr}')
    return len(result.stdout) > 0

# pull from the remote
async def pull_remote(remote_name,branch, collections_path):
    await checkout_branch_needed(branch, collections_path)
    cmd = f'git pull --rebase {remote_name} {branch} -v'
    result = run_cmd(cmd, collections_path)
    if result.returncode != 0:
        raise ValueError(f'Error running git pull --rebase {remote_name} -v: {result.stderr}')
    return result.stdout

# checkout branch if it exists
async def checkout_branch_needed(branch, collections_path):
    # current branch
    cmd = 'git rev-parse --abbrev-ref HEAD'
    result = run_cmd(cmd, collections_path)
    # if the current branch is the same as the branch we want to checkout
    if result.stdout.strip() != branch:
        cmd = f'git checkout -b {branch}'
        result = run_cmd(cmd, collections_path)
        if result.returncode != 0:
            raise ValueError(f'Error running git checkout {branch}: {result.stderr}')
     

async def commit_changes(collections_path):
    # 添加所有更改到暂存区
    cmd = 'git add .'
    ret = run_cmd(cmd, collections_path)
    if not ret.returncode == 0:
        raise ValueError(f'Error running git add .: {ret.stderr}')

    # 提交更改
    cmd = f'git commit -m "sync by comfyui-browser at {int(time.time())}"'
    ret = run_cmd(cmd, collections_path)
    if not ret.returncode == 0:
        raise ValueError(f'Error running git commit -m "sync by comfyui-browser at {int(time.time())}": {ret.stderr}')

async def merge_and_push(remote_name, branch, collections_path):
    # 检查分支是否存在
    cmd = f'git branch -r | grep {remote_name}/{branch}'
    result = run_cmd(cmd, collections_path)
    print('result:', result)
    if result.returncode != 0:
        raise ValueError(f'Error running git branch -r | grep {branch}: {result.stderr}')

    # 如果分支不存在，抛出一个错误
    if not result.stdout:
        raise ValueError(f'Branch {branch} does not exist')

    # 合并分支
    cmd = f'git merge {remote_name}/{branch}'
    result = run_cmd(cmd, collections_path)
    if result.returncode != 0:
        raise ValueError(f'Error running git merge {remote_name}/{branch}: {result.stderr}')

    # 推送到远程分支
    cmd = f'git push {remote_name} {branch}'
    result = run_cmd(cmd, collections_path)
    if result.returncode != 0:
        raise ValueError(f'Error running git push {remote_name} {branch}: {result.stderr}')
