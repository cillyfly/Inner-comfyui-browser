import{s as pe,n as re,r as we,f as $e,o as Oe,b as ke,h as ot}from"../chunks/scheduler.89bf212d.js";import{S as be,i as ve,g as S,m as ne,s as z,h as E,j as N,n as le,f as w,c as J,k as y,a as Y,x as g,y as Z,e as _e,o as de,l as Le,z as ee,d as Q,p as Se,b as Ee,t as X,A as Te,r as oe,u as ie,v as ae,w as ce,B as Me,C as it}from"../chunks/index.911dd7e6.js";function fe(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function at(t){let e,n,l,s,r,o,c,f,d,D,U,F,C,L;return{c(){e=S("div"),n=S("button"),l=ne("Outputs"),r=z(),o=S("button"),c=ne("Collections"),d=z(),D=S("button"),U=ne("Sources"),this.h()},l(k){e=E(k,"DIV",{role:!0,class:!0});var I=N(e);n=E(I,"BUTTON",{role:!0,class:!0});var T=N(n);l=le(T,"Outputs"),T.forEach(w),r=J(I),o=E(I,"BUTTON",{role:!0,class:!0});var A=N(o);c=le(A,"Collections"),A.forEach(w),d=J(I),D=E(I,"BUTTON",{role:!0,class:!0});var b=N(D);U=le(b,"Sources"),b.forEach(w),I.forEach(w),this.h()},h(){y(n,"role","tab"),y(n,"class",s="tab "+t[0]("outputs")),y(o,"role","tab"),y(o,"class",f="tab "+t[0]("collections")),y(D,"role","tab"),y(D,"class",F="tab "+t[0]("sources")),y(e,"role","tablist"),y(e,"class","tabs tabs-boxed sticky top-0")},m(k,I){Y(k,e,I),g(e,n),g(n,l),g(e,r),g(e,o),g(o,c),g(e,d),g(e,D),g(D,U),C||(L=[Z(n,"click",t[3]),Z(o,"click",t[4]),Z(D,"click",t[5])],C=!0)},p(k,[I]){I&1&&s!==(s="tab "+k[0]("outputs"))&&y(n,"class",s),I&1&&f!==(f="tab "+k[0]("collections"))&&y(o,"class",f),I&1&&F!==(F="tab "+k[0]("sources"))&&y(D,"class",F)},i:re,o:re,d(k){k&&w(e),C=!1,we(L)}}}function ct(t,e,n){let l,{activeTab:s="outputs"}=e;async function r(d){n(2,s=d)}const o=()=>r("outputs"),c=()=>r("collections"),f=()=>r("sources");return t.$$set=d=>{"activeTab"in d&&n(2,s=d.activeTab)},t.$$.update=()=>{t.$$.dirty&4&&n(0,l=function(d){return d===s?"tab-active":""})},[l,r,s,o,c,f]}class ut extends be{constructor(e){super(),ve(this,e,ct,at,pe,{activeTab:2})}}function je(t){let e,n,l,s,r;return{c(){e=S("div"),n=S("div"),l=S("span"),s=ne(t[2]),this.h()},l(o){e=E(o,"DIV",{class:!0});var c=N(e);n=E(c,"DIV",{class:!0});var f=N(n);l=E(f,"SPAN",{});var d=N(l);s=le(d,t[2]),d.forEach(w),f.forEach(w),c.forEach(w),this.h()},h(){y(n,"class",r="alert "+(t[1]?"alert-success":"alert-error")),y(e,"class","toast toast-center")},m(o,c){Y(o,e,c),g(e,n),g(n,l),g(l,s)},p(o,c){c&4&&de(s,o[2]),c&2&&r!==(r="alert "+(o[1]?"alert-success":"alert-error"))&&y(n,"class",r)},d(o){o&&w(e)}}}function ft(t){let e,n=t[0]&&je(t);return{c(){n&&n.c(),e=_e()},l(l){n&&n.l(l),e=_e()},m(l,s){n&&n.m(l,s),Y(l,e,s)},p(l,[s]){l[0]?n?n.p(l,s):(n=je(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:re,o:re,d(l){l&&w(e),n&&n.d(l)}}}function dt(t,e,n){let{showToast:l=!1}=e,{toastSuccess:s=!0}=e,{toastText:r=""}=e;function o(c,f,d,D=2e3){n(1,s=c),n(2,r=c?f:d),n(0,l=!0),setTimeout(()=>n(0,l=!1),D)}return t.$$set=c=>{"showToast"in c&&n(0,l=c.showToast),"toastSuccess"in c&&n(1,s=c.toastSuccess),"toastText"in c&&n(2,r=c.toastText)},[l,s,r,o]}class Ie extends be{constructor(e){super(),ve(this,e,dt,ft,pe,{showToast:0,toastSuccess:1,toastText:2,show:3})}get show(){return this.$$.ctx[3]}}var ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var et={exports:{}};(function(t,e){(function(n,l){t.exports=l()})(ht,function(){var n=1e3,l=6e4,s=36e5,r="millisecond",o="second",c="minute",f="hour",d="day",D="week",U="month",F="quarter",C="year",L="date",k="Invalid Date",I=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,T=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function($){var i=["th","st","nd","rd"],a=$%100;return"["+$+(i[(a-20)%10]||i[a]||i[0])+"]"}},b=function($,i,a){var v=String($);return!v||v.length>=i?$:""+Array(i+1-v.length).join(a)+$},_={s:b,z:function($){var i=-$.utcOffset(),a=Math.abs(i),v=Math.floor(a/60),u=a%60;return(i<=0?"+":"-")+b(v,2,"0")+":"+b(u,2,"0")},m:function $(i,a){if(i.date()<a.date())return-$(a,i);var v=12*(a.year()-i.year())+(a.month()-i.month()),u=i.clone().add(v,U),h=a-u<0,M=i.clone().add(v+(h?-1:1),U);return+(-(v+(a-u)/(h?u-M:M-u))||0)},a:function($){return $<0?Math.ceil($)||0:Math.floor($)},p:function($){return{M:U,y:C,w:D,d,D:L,h:f,m:c,s:o,ms:r,Q:F}[$]||String($||"").toLowerCase().replace(/s$/,"")},u:function($){return $===void 0}},O="en",p={};p[O]=A;var W="$isDayjsObject",B=function($){return $ instanceof m||!(!$||!$[W])},V=function $(i,a,v){var u;if(!i)return O;if(typeof i=="string"){var h=i.toLowerCase();p[h]&&(u=h),a&&(p[h]=a,u=h);var M=i.split("-");if(!u&&M.length>1)return $(M[0])}else{var P=i.name;p[P]=i,u=P}return!v&&u&&(O=u),u||!v&&O},j=function($,i){if(B($))return $.clone();var a=typeof i=="object"?i:{};return a.date=$,a.args=arguments,new m(a)},H=_;H.l=V,H.i=B,H.w=function($,i){return j($,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var m=function(){function $(a){this.$L=V(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[W]=!0}var i=$.prototype;return i.parse=function(a){this.$d=function(v){var u=v.date,h=v.utc;if(u===null)return new Date(NaN);if(H.u(u))return new Date;if(u instanceof Date)return new Date(u);if(typeof u=="string"&&!/Z$/i.test(u)){var M=u.match(I);if(M){var P=M[2]-1||0,G=(M[7]||"0").substring(0,3);return h?new Date(Date.UTC(M[1],P,M[3]||1,M[4]||0,M[5]||0,M[6]||0,G)):new Date(M[1],P,M[3]||1,M[4]||0,M[5]||0,M[6]||0,G)}}return new Date(u)}(a),this.init()},i.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},i.$utils=function(){return H},i.isValid=function(){return this.$d.toString()!==k},i.isSame=function(a,v){var u=j(a);return this.startOf(v)<=u&&u<=this.endOf(v)},i.isAfter=function(a,v){return j(a)<this.startOf(v)},i.isBefore=function(a,v){return this.endOf(v)<j(a)},i.$g=function(a,v,u){return H.u(a)?this[v]:this.set(u,a)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(a,v){var u=this,h=!!H.u(v)||v,M=H.p(a),P=function(ge,te){var me=H.w(u.$u?Date.UTC(u.$y,te,ge):new Date(u.$y,te,ge),u);return h?me:me.endOf(d)},G=function(ge,te){return H.w(u.toDate()[ge].apply(u.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(te)),u)},R=this.$W,K=this.$M,x=this.$D,se="set"+(this.$u?"UTC":"");switch(M){case C:return h?P(1,0):P(31,11);case U:return h?P(1,K):P(0,K+1);case D:var ue=this.$locale().weekStart||0,he=(R<ue?R+7:R)-ue;return P(h?x-he:x+(6-he),K);case d:case L:return G(se+"Hours",0);case f:return G(se+"Minutes",1);case c:return G(se+"Seconds",2);case o:return G(se+"Milliseconds",3);default:return this.clone()}},i.endOf=function(a){return this.startOf(a,!1)},i.$set=function(a,v){var u,h=H.p(a),M="set"+(this.$u?"UTC":""),P=(u={},u[d]=M+"Date",u[L]=M+"Date",u[U]=M+"Month",u[C]=M+"FullYear",u[f]=M+"Hours",u[c]=M+"Minutes",u[o]=M+"Seconds",u[r]=M+"Milliseconds",u)[h],G=h===d?this.$D+(v-this.$W):v;if(h===U||h===C){var R=this.clone().set(L,1);R.$d[P](G),R.init(),this.$d=R.set(L,Math.min(this.$D,R.daysInMonth())).$d}else P&&this.$d[P](G);return this.init(),this},i.set=function(a,v){return this.clone().$set(a,v)},i.get=function(a){return this[H.p(a)]()},i.add=function(a,v){var u,h=this;a=Number(a);var M=H.p(v),P=function(K){var x=j(h);return H.w(x.date(x.date()+Math.round(K*a)),h)};if(M===U)return this.set(U,this.$M+a);if(M===C)return this.set(C,this.$y+a);if(M===d)return P(1);if(M===D)return P(7);var G=(u={},u[c]=l,u[f]=s,u[o]=n,u)[M]||1,R=this.$d.getTime()+a*G;return H.w(R,this)},i.subtract=function(a,v){return this.add(-1*a,v)},i.format=function(a){var v=this,u=this.$locale();if(!this.isValid())return u.invalidDate||k;var h=a||"YYYY-MM-DDTHH:mm:ssZ",M=H.z(this),P=this.$H,G=this.$m,R=this.$M,K=u.weekdays,x=u.months,se=u.meridiem,ue=function(te,me,ye,De){return te&&(te[me]||te(v,h))||ye[me].slice(0,De)},he=function(te){return H.s(P%12||12,te,"0")},ge=se||function(te,me,ye){var De=te<12?"AM":"PM";return ye?De.toLowerCase():De};return h.replace(T,function(te,me){return me||function(ye){switch(ye){case"YY":return String(v.$y).slice(-2);case"YYYY":return H.s(v.$y,4,"0");case"M":return R+1;case"MM":return H.s(R+1,2,"0");case"MMM":return ue(u.monthsShort,R,x,3);case"MMMM":return ue(x,R);case"D":return v.$D;case"DD":return H.s(v.$D,2,"0");case"d":return String(v.$W);case"dd":return ue(u.weekdaysMin,v.$W,K,2);case"ddd":return ue(u.weekdaysShort,v.$W,K,3);case"dddd":return K[v.$W];case"H":return String(P);case"HH":return H.s(P,2,"0");case"h":return he(1);case"hh":return he(2);case"a":return ge(P,G,!0);case"A":return ge(P,G,!1);case"m":return String(G);case"mm":return H.s(G,2,"0");case"s":return String(v.$s);case"ss":return H.s(v.$s,2,"0");case"SSS":return H.s(v.$ms,3,"0");case"Z":return M}return null}(te)||M.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(a,v,u){var h,M=this,P=H.p(v),G=j(a),R=(G.utcOffset()-this.utcOffset())*l,K=this-G,x=function(){return H.m(M,G)};switch(P){case C:h=x()/12;break;case U:h=x();break;case F:h=x()/3;break;case D:h=(K-R)/6048e5;break;case d:h=(K-R)/864e5;break;case f:h=K/s;break;case c:h=K/l;break;case o:h=K/n;break;default:h=K}return u?h:H.a(h)},i.daysInMonth=function(){return this.endOf(U).$D},i.$locale=function(){return p[this.$L]},i.locale=function(a,v){if(!a)return this.$L;var u=this.clone(),h=V(a,v,!0);return h&&(u.$L=h),u},i.clone=function(){return H.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},$}(),q=m.prototype;return j.prototype=q,[["$ms",r],["$s",o],["$m",c],["$H",f],["$W",d],["$M",U],["$y",C],["$D",L]].forEach(function($){q[$[1]]=function(i){return this.$g(i,$[0],$[1])}}),j.extend=function($,i){return $.$i||($(i,m,j),$.$i=!0),j},j.locale=V,j.isDayjs=B,j.unix=function($){return j(1e3*$)},j.en=p[O],j.Ls=p,j.p={},j})})(et);var _t=et.exports;const tt=mt(_t);function pt(t,e,n){const l=t.name.split(".").pop().toLowerCase();t.fileType="json",["png","webp","jpeg","jpg","gif"].includes(l)&&(t.fileType="image"),["mp4","webm","mov","avi","mkv"].includes(l)&&(t.fileType="video"),t.url=`${n}/browser/files/view?folder_type=${e}&filename=${t.name}&folder_path=${t.folder_path}`;const s=tt.unix(t.created_at);return t.formattedDatetime=s.format("YYYY-MM-DD HH-mm-ss"),t.bytes/1024/1024>1?t.formattedSize=(t.bytes/1024/1024).toFixed(2)+" MB":t.formattedSize=Math.round(t.bytes/1024)+" KB",t}function bt(t){t.fileType="dir";const e=t.folder_path?`${t.folder_path}/${t.name}`:t.name;t.path=e;const n=tt.unix(t.created_at);return t.formattedDatetime=n.format("YYYY-MM-DD HH-mm-ss"),t.formattedSize="0 KB",t}async function Ue(t,e,n){let l=e+"/browser/files?folder_type="+t;n&&(l=l+`&folder_path=${n}&`);let o=(await(await fetch(l)).json()).files;return o.forEach(c=>{c.type==="dir"?c=bt(c):c=pt(c,t,e)}),o}function nt(t,e){if(t>=e)return t;const n=document.documentElement.scrollHeight;return window.innerHeight+window.scrollY>=n?t+10:t}async function lt(t,e,n){const l=await fetch(t.url),s=await l.blob(),r=new File([s],t.name,{type:l.headers.get("Content-Type")||""}),o=e.loadGraphData.bind(e);e.loadGraphData=async function(c){var d;const f=(d=window.top)==null?void 0:d.document.getElementById("comfy-browser-dialog");f&&(f.style.display="none"),await o(c)},await e.handleFile(r),n.show(!1,"Loaded","No workflow found here",1e3)}function vt(t){let e,n,l,s,r=t[0].fileType==="json"&&Ne(),o=t[0].fileType==="image"&&Pe(t),c=t[0].fileType==="video"&&He(t);return{c(){e=S("a"),r&&r.c(),n=z(),o&&o.c(),l=z(),c&&c.c(),this.h()},l(f){e=E(f,"A",{href:!0,target:!0,style:!0});var d=N(e);r&&r.l(d),n=J(d),o&&o.l(d),l=J(d),c&&c.l(d),d.forEach(w),this.h()},h(){y(e,"href",s=t[0].url),y(e,"target","_blank"),Le(e,"height","inherit"),Le(e,"width","inherit")},m(f,d){Y(f,e,d),r&&r.m(e,null),g(e,n),o&&o.m(e,null),g(e,l),c&&c.m(e,null)},p(f,d){f[0].fileType==="json"?r||(r=Ne(),r.c(),r.m(e,n)):r&&(r.d(1),r=null),f[0].fileType==="image"?o?o.p(f,d):(o=Pe(f),o.c(),o.m(e,l)):o&&(o.d(1),o=null),f[0].fileType==="video"?c?c.p(f,d):(c=He(f),c.c(),c.m(e,null)):c&&(c.d(1),c=null),d&1&&s!==(s=f[0].url)&&y(e,"href",s)},d(f){f&&w(e),r&&r.d(),o&&o.d(),c&&c.d()}}}function gt(t){let e,n='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg>',l,s;return{c(){e=S("button"),e.innerHTML=n,this.h()},l(r){e=E(r,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-fq6lbl"&&(e.innerHTML=n),this.h()},h(){y(e,"class","w-full h-full flex items-center justify-center")},m(r,o){Y(r,e,o),l||(s=Z(e,"click",t[3]),l=!0)},p:re,d(r){r&&w(e),l=!1,s()}}}function Ne(t){let e,n='<span class="font-bold text-xl">JSON</span>';return{c(){e=S("div"),e.innerHTML=n,this.h()},l(l){e=E(l,"DIV",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-opd4jy"&&(e.innerHTML=n),this.h()},h(){y(e,"class","w-full h-full flex items-center justify-center")},m(l,s){Y(l,e,s)},d(l){l&&w(e)}}}function Pe(t){let e,n,l;return{c(){e=S("img"),this.h()},l(s){e=E(s,"IMG",{class:!0,loading:!0,src:!0,alt:!0}),this.h()},h(){y(e,"class","h-full w-full object-contain"),y(e,"loading","lazy"),$e(e.src,n=t[0].url)||y(e,"src",n),y(e,"alt",l=t[0].name)},m(s,r){Y(s,e,r)},p(s,r){r&1&&!$e(e.src,n=s[0].url)&&y(e,"src",n),r&1&&l!==(l=s[0].name)&&y(e,"alt",l)},d(s){s&&w(e)}}}function He(t){let e,n,l;return{c(){e=S("video"),n=S("track"),this.h()},l(s){e=E(s,"VIDEO",{class:!0,src:!0});var r=N(e);n=E(r,"TRACK",{kind:!0}),r.forEach(w),this.h()},h(){y(n,"kind","captions"),y(e,"class","h-full w-full object-contain pb-0.5 border-0.5 border-black"),$e(e.src,l=t[0].url)||y(e,"src",l),e.loop=!0,e.autoplay=!0,e.muted=!0},m(s,r){Y(s,e,r),g(e,n)},p(s,r){r&1&&!$e(e.src,l=s[0].url)&&y(e,"src",l)},d(s){s&&w(e)}}}function wt(t){let e;function n(r,o){return r[0].type==="dir"?gt:vt}let l=n(t),s=l(t);return{c(){e=S("div"),s.c(),this.h()},l(r){e=E(r,"DIV",{class:!0});var o=N(e);s.l(o),o.forEach(w),this.h()},h(){y(e,"class",t[1])},m(r,o){Y(r,e,o),s.m(e,null)},p(r,[o]){l===(l=n(r))&&s?s.p(r,o):(s.d(1),s=l(r),s&&(s.c(),s.m(e,null))),o&2&&y(e,"class",r[1])},i:re,o:re,d(r){r&&w(e),s.d()}}}function yt(t,e,n){let{file:l}=e,{styleClass:s}=e,{onClickDir:r}=e;const o=()=>r(l);return t.$$set=c=>{"file"in c&&n(0,l=c.file),"styleClass"in c&&n(1,s=c.styleClass),"onClickDir"in c&&n(2,r=c.onClickDir)},[l,s,r,o]}class st extends be{constructor(e){super(),ve(this,e,yt,wt,pe,{file:0,styleClass:1,onClickDir:2})}}function Be(t,e,n){const l=t.slice();return l[16]=e[n],l}function Ve(t,e,n){const l=t.slice();return l[19]=e[n],l[21]=n,l}function Ae(t){let e,n,l=t[19]+"",s,r,o;function c(){return t[12](t[21])}return{c(){e=S("li"),n=S("button"),s=ne(l)},l(f){e=E(f,"LI",{});var d=N(e);n=E(d,"BUTTON",{});var D=N(n);s=le(D,l),D.forEach(w),d.forEach(w)},m(f,d){Y(f,e,d),g(e,n),g(n,s),r||(o=Z(n,"click",c),r=!0)},p(f,d){t=f,d&1&&l!==(l=t[19]+"")&&de(s,l)},d(f){f&&w(e),r=!1,o()}}}function Fe(t){let e,n,l,s,r,o=t[16].name+"",c,f,d,D=t[16].formattedDatetime+"",U,F,C,L=t[16].formattedSize+"",k,I,T,A,b,_="Collect",O,p,W="Delete",B,V,j,H;l=new st({props:{file:t[16],styleClass:"w-full h-36",onClickDir:t[7]}});let m=t[2]&&Ye(t);function q(){return t[14](t[16])}function $(){return t[15](t[16])}return{c(){e=S("div"),n=S("div"),oe(l.$$.fragment),s=z(),r=S("p"),c=ne(o),f=z(),d=S("p"),U=ne(D),F=z(),C=S("p"),k=ne(L),I=z(),T=S("div"),m&&m.c(),A=z(),b=S("button"),b.textContent=_,O=z(),p=S("button"),p.textContent=W,B=z(),this.h()},l(i){e=E(i,"DIV",{class:!0});var a=N(e);n=E(a,"DIV",{class:!0});var v=N(n);ie(l.$$.fragment,v),v.forEach(w),s=J(a),r=E(a,"P",{class:!0});var u=N(r);c=le(u,o),u.forEach(w),f=J(a),d=E(a,"P",{class:!0});var h=N(d);U=le(h,D),h.forEach(w),F=J(a),C=E(a,"P",{class:!0});var M=N(C);k=le(M,L),M.forEach(w),I=J(a),T=E(a,"DIV",{class:!0});var P=N(T);m&&m.l(P),A=J(P),b=E(P,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(b)!=="svelte-jct3zc"&&(b.textContent=_),O=J(P),p=E(P,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(p)!=="svelte-1t0nfha"&&(p.textContent=W),P.forEach(w),B=J(a),a.forEach(w),this.h()},h(){y(n,"class","flex items-center"),y(r,"class","font-bold max-h-12 leading-6 overflow-auto"),y(d,"class","text-gray-500"),y(C,"class","text-gray-500"),y(b,"class","btn btn-link btn-sm p-0 no-underline text-accent"),y(p,"class","btn btn-link btn-sm p-0 no-underline text-error"),y(T,"class",""),y(e,"class","bg-base-100")},m(i,a){Y(i,e,a),g(e,n),ae(l,n,null),g(e,s),g(e,r),g(r,c),g(e,f),g(e,d),g(d,U),g(e,F),g(e,C),g(C,k),g(e,I),g(e,T),m&&m.m(T,null),g(T,A),g(T,b),g(T,O),g(T,p),g(e,B),V=!0,j||(H=[Z(b,"click",q),Z(p,"click",$)],j=!0)},p(i,a){t=i;const v={};a&24&&(v.file=t[16]),l.$set(v),(!V||a&24)&&o!==(o=t[16].name+"")&&de(c,o),(!V||a&24)&&D!==(D=t[16].formattedDatetime+"")&&de(U,D),(!V||a&24)&&L!==(L=t[16].formattedSize+"")&&de(k,L),t[2]?m?m.p(t,a):(m=Ye(t),m.c(),m.m(T,A)):m&&(m.d(1),m=null)},i(i){V||(Q(l.$$.fragment,i),V=!0)},o(i){X(l.$$.fragment,i),V=!1},d(i){i&&w(e),ce(l),m&&m.d(),j=!1,we(H)}}}function Ye(t){let e,n="Load",l,s;function r(){return t[13](t[16])}return{c(){e=S("button"),e.textContent=n,this.h()},l(o){e=E(o,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-1ie7fpp"&&(e.textContent=n),this.h()},h(){y(e,"class","btn btn-link btn-sm p-0 no-underline text-accent")},m(o,c){Y(o,e,c),l||(s=Z(e,"click",r),l=!0)},p(o,c){t=o},d(o){o&&w(e),l=!1,s()}}}function ze(t){let e=["dir","image","video","json"].includes(t[16].fileType),n,l,s=e&&Fe(t);return{c(){s&&s.c(),n=_e()},l(r){s&&s.l(r),n=_e()},m(r,o){s&&s.m(r,o),Y(r,n,o),l=!0},p(r,o){o&24&&(e=["dir","image","video","json"].includes(r[16].fileType)),e?s?(s.p(r,o),o&24&&Q(s,1)):(s=Fe(r),s.c(),Q(s,1),s.m(n.parentNode,n)):s&&(Se(),X(s,1,1,()=>{s=null}),Ee())},i(r){l||(Q(s),l=!0)},o(r){X(s),l=!1},d(r){r&&w(n),s&&s.d(r)}}}function Je(t){let e,n='<span class="font-bold text-4xl">It&#39;s empty here.</span>';return{c(){e=S("div"),e.innerHTML=n,this.h()},l(l){e=E(l,"DIV",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-kth4bi"&&(e.innerHTML=n),this.h()},h(){y(e,"class","w-full h-full flex items-center justify-center")},m(l,s){Y(l,e,s)},d(l){l&&w(e)}}}function kt(t){let e,n,l,s,r="Root",o,c,f,d,D,U,F,C,L=fe((t[0]||"").split("/")),k=[];for(let _=0;_<L.length;_+=1)k[_]=Ae(Ve(t,L,_));let I=fe(t[3].slice(0,t[4])),T=[];for(let _=0;_<I.length;_+=1)T[_]=ze(Be(t,I,_));const A=_=>X(T[_],1,1,()=>{T[_]=null});let b=t[3].length===0&&Je();return{c(){e=S("div"),n=S("ul"),l=S("li"),s=S("button"),s.textContent=r,o=z();for(let _=0;_<k.length;_+=1)k[_].c();c=z(),f=S("div");for(let _=0;_<T.length;_+=1)T[_].c();d=z(),b&&b.c(),D=_e(),this.h()},l(_){e=E(_,"DIV",{class:!0});var O=N(e);n=E(O,"UL",{});var p=N(n);l=E(p,"LI",{});var W=N(l);s=E(W,"BUTTON",{"data-svelte-h":!0}),ee(s)!=="svelte-1paj67z"&&(s.textContent=r),W.forEach(w),o=J(p);for(let V=0;V<k.length;V+=1)k[V].l(p);p.forEach(w),O.forEach(w),c=J(_),f=E(_,"DIV",{class:!0});var B=N(f);for(let V=0;V<T.length;V+=1)T[V].l(B);B.forEach(w),d=J(_),b&&b.l(_),D=_e(),this.h()},h(){y(e,"class","max-w-full text-sm breadcrumbs"),y(f,"class","grid grid-cols-4 lg:grid-cols-6 gap-2 bg-base-300")},m(_,O){Y(_,e,O),g(e,n),g(n,l),g(l,s),g(n,o);for(let p=0;p<k.length;p+=1)k[p]&&k[p].m(n,null);Y(_,c,O),Y(_,f,O);for(let p=0;p<T.length;p+=1)T[p]&&T[p].m(f,null);Y(_,d,O),b&&b.m(_,O),Y(_,D,O),U=!0,F||(C=Z(s,"click",t[11]),F=!0)},p(_,[O]){if(O&257){L=fe((_[0]||"").split("/"));let p;for(p=0;p<L.length;p+=1){const W=Ve(_,L,p);k[p]?k[p].p(W,O):(k[p]=Ae(W),k[p].c(),k[p].m(n,null))}for(;p<k.length;p+=1)k[p].d(1);k.length=L.length}if(O&254){I=fe(_[3].slice(0,_[4]));let p;for(p=0;p<I.length;p+=1){const W=Be(_,I,p);T[p]?(T[p].p(W,O),Q(T[p],1)):(T[p]=ze(W),T[p].c(),Q(T[p],1),T[p].m(f,null))}for(Se(),p=I.length;p<T.length;p+=1)A(p);Ee()}_[3].length===0?b||(b=Je(),b.c(),b.m(D.parentNode,D)):b&&(b.d(1),b=null)},i(_){if(!U){for(let O=0;O<I.length;O+=1)Q(T[O]);U=!0}},o(_){T=T.filter(Boolean);for(let O=0;O<T.length;O+=1)X(T[O]);U=!1},d(_){_&&(w(e),w(c),w(f),w(d),w(D)),Te(k,_),Te(T,_),b&&b.d(_),F=!1,C()}}}function Tt(t,e,n){let{comfyUrl:l}=e,{folderType:s}=e,{toast:r}=e,{folderPath:o}=e,c,f=[],d=20;Oe(async()=>{n(2,c=window.top.app),n(0,o=""),window.addEventListener("scroll",()=>{n(4,d=nt(d,f.length))})});async function D(b){const _=await fetch(l+"/browser/collections",{method:"POST",body:JSON.stringify({filename:b.name,folder_path:b.folder_path,folder_type:s})});r.show(_.ok,"Added to collections","Failed to add to collections. Please check the ComfyUI server.")}async function U(b){if(!confirm("You want to delete this file? "+b.name))return;const O=await fetch(l+"/browser/files",{method:"DELETE",body:JSON.stringify({folder_type:s,filename:b.name,folder_path:b.folder_path})});r.show(O.ok,"Deleted the file "+b.name,"Failed to delete the file. Please check the ComfyUI server."),n(3,f=f.filter(p=>p!=b))}async function F(b){n(0,o=b.path)}async function C(b){if(b===-1){n(0,o="");return}n(0,o=o.split("/").slice(0,b+1).join("/"))}const L=()=>C(-1),k=b=>C(b),I=async b=>await lt(b,c,r),T=async b=>await D(b),A=async b=>await U(b);return t.$$set=b=>{"comfyUrl"in b&&n(9,l=b.comfyUrl),"folderType"in b&&n(10,s=b.folderType),"toast"in b&&n(1,r=b.toast),"folderPath"in b&&n(0,o=b.folderPath)},t.$$.update=()=>{t.$$.dirty&1537&&o!=null&&Ue(s,l,o).then(b=>{n(3,f=b)})},[o,r,c,f,d,D,U,F,C,l,s,L,k,I,T,A]}class rt extends be{constructor(e){super(),ve(this,e,Tt,kt,pe,{comfyUrl:9,folderType:10,toast:1,folderPath:0})}}function Dt(t){let e,n,l,s;e=new rt({props:{folderType:"outputs",comfyUrl:t[0],toast:t[1]}});let r={};return l=new Ie({props:r}),t[2](l),{c(){oe(e.$$.fragment),n=z(),oe(l.$$.fragment)},l(o){ie(e.$$.fragment,o),n=J(o),ie(l.$$.fragment,o)},m(o,c){ae(e,o,c),Y(o,n,c),ae(l,o,c),s=!0},p(o,[c]){const f={};c&1&&(f.comfyUrl=o[0]),c&2&&(f.toast=o[1]),e.$set(f);const d={};l.$set(d)},i(o){s||(Q(e.$$.fragment,o),Q(l.$$.fragment,o),s=!0)},o(o){X(e.$$.fragment,o),X(l.$$.fragment,o),s=!1},d(o){o&&w(n),ce(e,o),t[2](null),ce(l,o)}}}function Ct(t,e,n){let{comfyUrl:l}=e,s;function r(o){ke[o?"unshift":"push"](()=>{s=o,n(1,s)})}return t.$$set=o=>{"comfyUrl"in o&&n(0,l=o.comfyUrl)},[l,s,r]}class $t extends be{constructor(e){super(),ve(this,e,Ct,Dt,pe,{comfyUrl:0})}}function We(t,e,n){const l=t.slice();return l[25]=e[n],l}function Re(t,e,n){const l=t.slice();return l[28]=e[n],l[30]=n,l}function qe(t){let e,n="Save",l,s;return{c(){e=S("button"),e.textContent=n,this.h()},l(r){e=E(r,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-vwqboa"&&(e.textContent=n),this.h()},h(){y(e,"class","btn btn-outline btn-accent")},m(r,o){Y(r,e,o),l||(s=Z(e,"click",t[8]),l=!0)},p:re,d(r){r&&w(e),l=!1,s()}}}function Ge(t){let e,n,l=t[28]+"",s,r,o;function c(){return t[17](t[30])}return{c(){e=S("li"),n=S("button"),s=ne(l)},l(f){e=E(f,"LI",{});var d=N(e);n=E(d,"BUTTON",{});var D=N(n);s=le(D,l),D.forEach(w),d.forEach(w)},m(f,d){Y(f,e,d),g(e,n),g(n,s),r||(o=Z(n,"click",c),r=!0)},p(f,d){t=f,d&1&&l!==(l=t[28]+"")&&de(s,l)},d(f){f&&w(e),r=!1,o()}}}function Ze(t){let e,n="Load",l,s;function r(){return t[19](t[25])}return{c(){e=S("button"),e.textContent=n,this.h()},l(o){e=E(o,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-1ie7fpp"&&(e.textContent=n),this.h()},h(){y(e,"class","btn btn-link btn-sm p-0 no-underline text-accent")},m(o,c){Y(o,e,c),l||(s=Z(e,"click",r),l=!0)},p(o,c){t=o},d(o){o&&w(e),l=!1,s()}}}function Ke(t){let e,n,l,s,r,o,c,f,d=t[25].formattedDatetime+"",D,U,F=t[25].formattedSize+"",C,L,k,I,T,A="Remove",b,_,O,p,W,B,V,j;n=new st({props:{file:t[25],styleClass:"w-36",onClickDir:t[12]}});function H(...i){return t[18](t[25],...i)}let m=t[1]&&Ze(t);function q(){return t[20](t[25])}function $(...i){return t[21](t[25],...i)}return{c(){e=S("li"),oe(n.$$.fragment),l=z(),s=S("div"),r=S("input"),c=z(),f=S("p"),D=ne(d),U=ne(" | "),C=ne(F),L=z(),k=S("div"),m&&m.c(),I=z(),T=S("button"),T.textContent=A,b=z(),_=S("div"),O=S("textarea"),W=z(),this.h()},l(i){e=E(i,"LI",{class:!0});var a=N(e);ie(n.$$.fragment,a),l=J(a),s=E(a,"DIV",{class:!0});var v=N(s);r=E(v,"INPUT",{type:!0,class:!0}),c=J(v),f=E(v,"P",{class:!0});var u=N(f);D=le(u,d),U=le(u," | "),C=le(u,F),u.forEach(w),L=J(v),k=E(v,"DIV",{});var h=N(k);m&&m.l(h),I=J(h),T=E(h,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(T)!=="svelte-1mhg6fb"&&(T.textContent=A),h.forEach(w),v.forEach(w),b=J(a),_=E(a,"DIV",{});var M=N(_);O=E(M,"TEXTAREA",{name:!0,cols:!0,rows:!0,placeholder:!0,class:!0}),N(O).forEach(w),M.forEach(w),W=J(a),a.forEach(w),this.h()},h(){y(r,"type","text"),y(r,"class","input-bordered font-bold w-full bg-base-100"),r.value=o=t[25].name,y(f,"class","text-gray-500"),y(T,"class","btn btn-link btn-sm p-0 no-underline text-error"),y(s,"class","space-y-2 w-72"),y(O,"name","notes"),y(O,"cols","40"),y(O,"rows","4"),y(O,"placeholder","write some memos..."),y(O,"class","resize-none textarea"),O.value=p=t[25].notes,y(e,"class","flex h-36 border-0 space-x-4 bg-base-100")},m(i,a){Y(i,e,a),ae(n,e,null),g(e,l),g(e,s),g(s,r),g(s,c),g(s,f),g(f,D),g(f,U),g(f,C),g(s,L),g(s,k),m&&m.m(k,null),g(k,I),g(k,T),g(e,b),g(e,_),g(_,O),g(e,W),B=!0,V||(j=[Z(r,"blur",H),Z(T,"click",q),Z(O,"blur",$)],V=!0)},p(i,a){t=i;const v={};a&36&&(v.file=t[25]),n.$set(v),(!B||a&36&&o!==(o=t[25].name)&&r.value!==o)&&(r.value=o),(!B||a&36)&&d!==(d=t[25].formattedDatetime+"")&&de(D,d),(!B||a&36)&&F!==(F=t[25].formattedSize+"")&&de(C,F),t[1]?m?m.p(t,a):(m=Ze(t),m.c(),m.m(k,I)):m&&(m.d(1),m=null),(!B||a&36&&p!==(p=t[25].notes))&&(O.value=p)},i(i){B||(Q(n.$$.fragment,i),B=!0)},o(i){X(n.$$.fragment,i),B=!1},d(i){i&&w(e),ce(n),m&&m.d(),V=!1,we(j)}}}function Qe(t){let e,n='<span class="font-bold text-4xl">It&#39;s empty here.</span>';return{c(){e=S("div"),e.innerHTML=n,this.h()},l(l){e=E(l,"DIV",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-kth4bi"&&(e.innerHTML=n),this.h()},h(){y(e,"class","w-full h-full flex items-center justify-center")},m(l,s){Y(l,e,s)},d(l){l&&w(e)}}}function Mt(t){var $;let e,n,l,s,r,o="Sync",c,f,d,D,U,F="Root",C,L,k,I,T,A,b,_,O,p=t[4]!=(($=t[3])==null?void 0:$.git_repo)&&qe(t),W=fe((t[0]||"").split("/")),B=[];for(let i=0;i<W.length;i+=1)B[i]=Ge(Re(t,W,i));let V=fe(t[2].slice(0,t[5])),j=[];for(let i=0;i<V.length;i+=1)j[i]=Ke(We(t,V,i));const H=i=>X(j[i],1,1,()=>{j[i]=null});let m=t[2].length===0&&Qe(),q={};return A=new Ie({props:q}),t[22](A),{c(){e=S("div"),n=S("input"),l=z(),p&&p.c(),s=z(),r=S("button"),r.textContent=o,c=z(),f=S("div"),d=S("ul"),D=S("li"),U=S("button"),U.textContent=F,C=z();for(let i=0;i<B.length;i+=1)B[i].c();L=z(),k=S("ul");for(let i=0;i<j.length;i+=1)j[i].c();I=z(),m&&m.c(),T=z(),oe(A.$$.fragment),this.h()},l(i){e=E(i,"DIV",{});var a=N(e);n=E(a,"INPUT",{type:!0,placeholder:!0,class:!0}),l=J(a),p&&p.l(a),s=J(a),r=E(a,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(r)!=="svelte-118xeor"&&(r.textContent=o),a.forEach(w),c=J(i),f=E(i,"DIV",{class:!0});var v=N(f);d=E(v,"UL",{});var u=N(d);D=E(u,"LI",{});var h=N(D);U=E(h,"BUTTON",{"data-svelte-h":!0}),ee(U)!=="svelte-1paj67z"&&(U.textContent=F),h.forEach(w),C=J(u);for(let P=0;P<B.length;P+=1)B[P].l(u);u.forEach(w),v.forEach(w),L=J(i),k=E(i,"UL",{class:!0});var M=N(k);for(let P=0;P<j.length;P+=1)j[P].l(M);M.forEach(w),I=J(i),m&&m.l(i),T=J(i),ie(A.$$.fragment,i),this.h()},h(){y(n,"type","text"),y(n,"placeholder","Input your git repository address"),y(n,"class","input input-bordered w-full max-w-lg"),y(r,"class","btn btn-outline btn-accent"),y(f,"class","max-w-full text-sm breadcrumbs"),y(k,"class","space-y-2 bg-base-300")},m(i,a){Y(i,e,a),g(e,n),Me(n,t[4]),g(e,l),p&&p.m(e,null),g(e,s),g(e,r),Y(i,c,a),Y(i,f,a),g(f,d),g(d,D),g(D,U),g(d,C);for(let v=0;v<B.length;v+=1)B[v]&&B[v].m(d,null);Y(i,L,a),Y(i,k,a);for(let v=0;v<j.length;v+=1)j[v]&&j[v].m(k,null);Y(i,I,a),m&&m.m(i,a),Y(i,T,a),ae(A,i,a),b=!0,_||(O=[Z(n,"input",t[15]),Z(r,"click",t[7]),Z(U,"click",t[16])],_=!0)},p(i,[a]){var u;if(a&16&&n.value!==i[4]&&Me(n,i[4]),i[4]!=((u=i[3])==null?void 0:u.git_repo)?p?p.p(i,a):(p=qe(i),p.c(),p.m(e,s)):p&&(p.d(1),p=null),a&8193){W=fe((i[0]||"").split("/"));let h;for(h=0;h<W.length;h+=1){const M=Re(i,W,h);B[h]?B[h].p(M,a):(B[h]=Ge(M),B[h].c(),B[h].m(d,null))}for(;h<B.length;h+=1)B[h].d(1);B.length=W.length}if(a&7782){V=fe(i[2].slice(0,i[5]));let h;for(h=0;h<V.length;h+=1){const M=We(i,V,h);j[h]?(j[h].p(M,a),Q(j[h],1)):(j[h]=Ke(M),j[h].c(),Q(j[h],1),j[h].m(k,null))}for(Se(),h=V.length;h<j.length;h+=1)H(h);Ee()}i[2].length===0?m||(m=Qe(),m.c(),m.m(T.parentNode,T)):m&&(m.d(1),m=null);const v={};A.$set(v)},i(i){if(!b){for(let a=0;a<V.length;a+=1)Q(j[a]);Q(A.$$.fragment,i),b=!0}},o(i){j=j.filter(Boolean);for(let a=0;a<j.length;a+=1)X(j[a]);X(A.$$.fragment,i),b=!1},d(i){i&&(w(e),w(c),w(f),w(L),w(k),w(I),w(T)),p&&p.d(),Te(B,i),Te(j,i),m&&m.d(i),t[22](null),ce(A,i),_=!1,we(O)}}}const Ce="collections";function St(t,e,n){let{comfyUrl:l}=e,s,r=[],o={},c="",f=20,d,D;Oe(async()=>{n(1,s=window.top.app),n(0,D=""),n(3,o=await U()||{}),n(4,c=o==null?void 0:o.git_repo),window.addEventListener("scroll",()=>{n(5,f=nt(f,r.length))})});async function U(){return await(await fetch(l+"/browser/config")).json()}async function F(m){const q=m.target;q.disabled=!0,q.innerHTML="Syncing...";const $=await fetch(l+"/browser/collections/sync",{method:"POST"});d.show($.ok,"Synced","Failed to sync. Please check the ComfyUI server."),q.disabled=!1,q.innerHTML="Sync",n(0,D=""),n(2,r=await Ue(Ce,l))}async function C(){const m=await fetch(l+"/browser/config",{method:"PUT",body:JSON.stringify({git_repo:c})});d.show(m.ok,"Updated config","Failed to update config. Please check the ComfyUI server.")}async function L(m){if(!confirm("You want to delete this file? "+m.name))return;const $=await fetch(l+"/browser/files",{method:"DELETE",body:JSON.stringify({folder_type:Ce,filename:m.name,folder_path:m.folder_path})});d.show($.ok,"Deleted the file "+m.name,"Failed to delete the file. Please check the ComfyUI server."),n(2,r=r.filter(i=>i!=m))}async function k(m,q){return(await fetch(l+"/browser/files",{method:"PUT",body:JSON.stringify({folder_type:Ce,folder_path:m.folder_path,filename:m.name,new_data:q})})).ok}async function I(m,q){const $=m.target.value;if($===q.name)return;const i=await k(q,{filename:$,notes:q.notes||"",folder_path:q.folder_path});d.show(i,"Updated","Failed to update. Please check the ComfyUI server.")}async function T(m,q){const $=m.target.value;if($==q.notes)return;const i=await k(q,{filename:q.name,notes:$,folder_path:q.folder_path});d.show(i,"Updated","Failed to update. Please check the ComfyUI server.")}async function A(m){n(0,D=m.path)}async function b(m){if(m===-1){n(0,D="");return}n(0,D=D.split("/").slice(0,m+1).join("/"))}function _(){c=this.value,n(4,c)}const O=()=>b(-1),p=m=>b(m),W=(m,q)=>I(q,m),B=async m=>await lt(m,s,d),V=async m=>await L(m),j=(m,q)=>T(q,m);function H(m){ke[m?"unshift":"push"](()=>{d=m,n(6,d)})}return t.$$set=m=>{"comfyUrl"in m&&n(14,l=m.comfyUrl)},t.$$.update=()=>{t.$$.dirty&16385&&D!=null&&Ue(Ce,l,D).then(m=>{n(2,r=m)})},[D,s,r,o,c,f,d,F,C,L,I,T,A,b,l,_,O,p,W,B,V,j,H]}class Et extends be{constructor(e){super(),ve(this,e,St,Mt,pe,{comfyUrl:14})}}function Xe(t,e,n){const l=t.slice();return l[17]=e[n],l}function xe(t){let e,n,l,s=t[17].name+"",r,o,c,f='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg>',d,D,U,F;function C(){return t[11](t[17])}function L(){return t[12](t[17])}return{c(){e=S("li"),n=S("div"),l=S("button"),r=ne(s),o=z(),c=S("button"),c.innerHTML=f,D=z(),this.h()},l(k){e=E(k,"LI",{class:!0});var I=N(e);n=E(I,"DIV",{class:!0});var T=N(n);l=E(T,"BUTTON",{class:!0});var A=N(l);r=le(A,s),A.forEach(w),o=J(T),c=E(T,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(c)!=="svelte-16x7l7z"&&(c.innerHTML=f),T.forEach(w),D=J(I),I.forEach(w),this.h()},h(){y(l,"class","btn w-3/4 pl-0 justify-start text-left"),y(c,"class","btn w-1/4"),y(n,"class",d="w-full "+(t[17]==t[3]?"bg-success":"")+" flex items-center justify-between"),y(e,"class","w-full")},m(k,I){Y(k,e,I),g(e,n),g(n,l),g(l,r),g(n,o),g(n,c),g(e,D),U||(F=[Z(l,"click",C),Z(c,"click",L)],U=!0)},p(k,I){t=k,I&2&&s!==(s=t[17].name+"")&&de(r,s),I&10&&d!==(d="w-full "+(t[17]==t[3]?"bg-success":"")+" flex items-center justify-between")&&y(n,"class",d)},d(k){k&&w(e),U=!1,we(F)}}}function Ut(t){var v;let e,n,l,s,r,o,c,f,d,D,U,F="Add new source",C,L,k,I,T,A,b,_,O,p=t[6]?"Adding...":"Add",W,B,V,j="<button>close</button>",H,m,q;r=new rt({props:{folderType:"sources",folderPath:(v=t[3])==null?void 0:v.name,comfyUrl:t[0],toast:t[2]}});let $=fe(t[1]),i=[];for(let u=0;u<$.length;u+=1)i[u]=xe(Xe(t,$,u));let a={};return k=new Ie({props:a}),t[13](k),{c(){e=S("div"),n=S("input"),l=z(),s=S("div"),oe(r.$$.fragment),o=z(),c=S("div"),f=S("ul"),d=S("li"),D=S("div"),U=S("button"),U.textContent=F,C=z();for(let u=0;u<i.length;u+=1)i[u].c();L=z(),oe(k.$$.fragment),I=z(),T=S("dialog"),A=S("div"),b=S("input"),_=z(),O=S("button"),W=ne(p),B=z(),V=S("form"),V.innerHTML=j,this.h()},l(u){e=E(u,"DIV",{class:!0});var h=N(e);n=E(h,"INPUT",{type:!0,class:!0}),l=J(h),s=E(h,"DIV",{class:!0});var M=N(s);ie(r.$$.fragment,M),M.forEach(w),o=J(h),c=E(h,"DIV",{class:!0});var P=N(c);f=E(P,"UL",{class:!0});var G=N(f);d=E(G,"LI",{class:!0});var R=N(d);D=E(R,"DIV",{class:!0});var K=N(D);U=E(K,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(U)!=="svelte-3j5f17"&&(U.textContent=F),K.forEach(w),R.forEach(w),C=J(G);for(let he=0;he<i.length;he+=1)i[he].l(G);G.forEach(w),P.forEach(w),h.forEach(w),L=J(u),ie(k.$$.fragment,u),I=J(u),T=E(u,"DIALOG",{class:!0});var x=N(T);A=E(x,"DIV",{class:!0});var se=N(A);b=E(se,"INPUT",{type:!0,placeholder:!0,class:!0}),_=J(se),O=E(se,"BUTTON",{class:!0});var ue=N(O);W=le(ue,p),ue.forEach(w),se.forEach(w),B=J(x),V=E(x,"FORM",{method:!0,class:!0,"data-svelte-h":!0}),ee(V)!=="svelte-povsts"&&(V.innerHTML=j),x.forEach(w),this.h()},h(){y(n,"type","checkbox"),y(n,"class","drawer-toggle"),y(s,"class","drawer-content flex flex-col"),y(U,"class","btn btn-outline btn-primary w-3/4 pl-0 justify-start text-left"),y(D,"class","w-full flex items-center justify-between"),y(d,"class","w-full"),y(f,"class","menu bg-base-200 w-56 p-0 [&_li>*]:rounded-none"),y(c,"class","drawer-side"),y(e,"class","drawer md:drawer-open"),y(b,"type","text"),y(b,"placeholder","Input Git remote address of the source"),y(b,"class","input input-bordered w-full max-w-xs"),y(O,"class","btn"),O.disabled=t[6],y(A,"class","modal-box"),y(V,"method","dialog"),y(V,"class","modal-backdrop"),y(T,"class","modal")},m(u,h){Y(u,e,h),g(e,n),g(e,l),g(e,s),ae(r,s,null),g(e,o),g(e,c),g(c,f),g(f,d),g(d,D),g(D,U),g(f,C);for(let M=0;M<i.length;M+=1)i[M]&&i[M].m(f,null);Y(u,L,h),ae(k,u,h),Y(u,I,h),Y(u,T,h),g(T,A),g(A,b),Me(b,t[5]),g(A,_),g(A,O),g(O,W),g(T,B),g(T,V),t[15](T),H=!0,m||(q=[Z(U,"click",t[9]),Z(b,"input",t[14]),Z(O,"click",t[10])],m=!0)},p(u,[h]){var G;const M={};if(h&8&&(M.folderPath=(G=u[3])==null?void 0:G.name),h&1&&(M.comfyUrl=u[0]),h&4&&(M.toast=u[2]),r.$set(M),h&394){$=fe(u[1]);let R;for(R=0;R<$.length;R+=1){const K=Xe(u,$,R);i[R]?i[R].p(K,h):(i[R]=xe(K),i[R].c(),i[R].m(f,null))}for(;R<i.length;R+=1)i[R].d(1);i.length=$.length}const P={};k.$set(P),h&32&&b.value!==u[5]&&Me(b,u[5]),(!H||h&64)&&p!==(p=u[6]?"Adding...":"Add")&&de(W,p),(!H||h&64)&&(O.disabled=u[6])},i(u){H||(Q(r.$$.fragment,u),Q(k.$$.fragment,u),H=!0)},o(u){X(r.$$.fragment,u),X(k.$$.fragment,u),H=!1},d(u){u&&(w(e),w(L),w(I),w(T)),ce(r),Te(i,u),t[13](null),ce(k,u),t[15](null),m=!1,we(q)}}}function Ot(t,e,n){let{comfyUrl:l}=e,s=[],r,o,c,f,d=!1;async function D(_=null){const p=await(await fetch(l+"/browser/sources")).json();n(1,s=p.sources),_&&(_=_.trim(),n(3,o=s.find(W=>W.url==_))),o||n(3,o=s[0])}Oe(async()=>{await D()});function U(_){n(3,o=_)}async function F(_){if(!confirm("You want to delete this source? "+_.name))return;const p=await fetch(l+`/browser/sources/${_.name}`,{method:"DELETE"});p.ok&&await D(),r.show(p.ok,"Deleted this source","Failed to delete this source. Please check the ComfyUI server.")}function C(){c.showModal()}async function L(){if(!f){r.show(!1,"","missing Git URL",1e3);return}n(6,d=!0);const _=await fetch(l+"/browser/sources",{method:"POST",body:JSON.stringify({repo_url:f})});n(6,d=!1),_.ok&&await D(f),r.show(_.ok,"Added a new source","Failed to add a new source. Please check the ComfyUI server."),c.close()}const k=_=>U(_),I=_=>F(_);function T(_){ke[_?"unshift":"push"](()=>{r=_,n(2,r)})}function A(){f=this.value,n(5,f)}function b(_){ke[_?"unshift":"push"](()=>{c=_,n(4,c)})}return t.$$set=_=>{"comfyUrl"in _&&n(0,l=_.comfyUrl)},[l,s,r,o,c,f,d,U,F,C,L,k,I,T,A,b]}class It extends be{constructor(e){super(),ve(this,e,Ot,Ut,pe,{comfyUrl:0})}}function Lt(t){let e,n;return e=new It({props:{comfyUrl:t[1]}}),{c(){oe(e.$$.fragment)},l(l){ie(e.$$.fragment,l)},m(l,s){ae(e,l,s),n=!0},p:re,i(l){n||(Q(e.$$.fragment,l),n=!0)},o(l){X(e.$$.fragment,l),n=!1},d(l){ce(e,l)}}}function jt(t){let e,n;return e=new $t({props:{comfyUrl:t[1]}}),{c(){oe(e.$$.fragment)},l(l){ie(e.$$.fragment,l)},m(l,s){ae(e,l,s),n=!0},p:re,i(l){n||(Q(e.$$.fragment,l),n=!0)},o(l){X(e.$$.fragment,l),n=!1},d(l){ce(e,l)}}}function Nt(t){let e,n;return e=new Et({props:{comfyUrl:t[1]}}),{c(){oe(e.$$.fragment)},l(l){ie(e.$$.fragment,l)},m(l,s){ae(e,l,s),n=!0},p:re,i(l){n||(Q(e.$$.fragment,l),n=!0)},o(l){X(e.$$.fragment,l),n=!1},d(l){ce(e,l)}}}function Pt(t){let e,n,l,s,r,o,c;function f(C){t[3](C)}let d={};t[0]!==void 0&&(d.activeTab=t[0]),e=new ut({props:d}),ke.push(()=>it(e,"activeTab",f));const D=[Nt,jt,Lt],U=[];function F(C,L){return C[0]==="collections"?0:C[0]==="outputs"?1:2}return s=F(t),r=U[s]=D[s](t),{c(){oe(e.$$.fragment),l=z(),r.c(),o=_e()},l(C){ie(e.$$.fragment,C),l=J(C),r.l(C),o=_e()},m(C,L){ae(e,C,L),Y(C,l,L),U[s].m(C,L),Y(C,o,L),c=!0},p(C,[L]){const k={};!n&&L&1&&(n=!0,k.activeTab=C[0],ot(()=>n=!1)),e.$set(k);let I=s;s=F(C),s===I?U[s].p(C,L):(Se(),X(U[I],1,1,()=>{U[I]=null}),Ee(),r=U[s],r?r.p(C,L):(r=U[s]=D[s](C),r.c()),Q(r,1),r.m(o.parentNode,o))},i(C){c||(Q(e.$$.fragment,C),Q(r),c=!0)},o(C){X(e.$$.fragment,C),X(r),c=!1},d(C){C&&(w(l),w(o)),ce(e,C),U[s].d(C)}}}function Ht(t,e,n){let{data:l}=e;const{comfyUrl:s}=l;let r="outputs";function o(c){r=c,n(0,r)}return t.$$set=c=>{"data"in c&&n(2,l=c.data)},[r,s,l,o]}class At extends be{constructor(e){super(),ve(this,e,Ht,Pt,pe,{data:2})}}export{At as component};
