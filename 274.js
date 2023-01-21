(()=>{var t,e,o,r,n={69314:()=>{},18983:()=>{},18387:(t,e,o)=>{"use strict";var r=o(60576),n=o(38090);var i=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function l(t,e){if(t.length!==e.length)return!1;for(var o=0;o<t.length;o++)if(!((r=t[o])===(n=e[o])||i(r)&&i(n)))return!1;var r,n;return!0}var a=o(64021),s=o(51330),u=o(57928);const c=new Uint8Array(32),d=(0,a.d)("modl");function f(t,e,o){return t.registry.createType("AccountId32",(0,s.e)(d,t.consts.nominationPools.palletId.toU8a(),new Uint8Array([o]),(0,u.a)(e,{bitLength:32}),c)).toString()}const p=function(t,e){void 0===e&&(e=l);var o=null;function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(o&&o.lastThis===this&&e(r,o.lastArgs))return o.lastResult;var i=t.apply(this,r);return o={lastResult:i,lastArgs:r,lastThis:this},i}return r.clear=function(){o=null},r}((function(t,e){return{rewardId:f(t,e,1),stashId:f(t,e,0)}}));onmessage=t=>{const{endpoint:e}=t.data;(async function(t){var e;const o=await async function(t){const e=new r.U(t);return await n.G.create({provider:e})}(t),i=await o.query.nominationPools.lastPoolId();if(console.log(`getPools: Getting ${i.toNumber()} pools information.`),!i)return null;let l=[],a=0;for(;i>a;){console.log(`Fetching pools info : ${a}/${i}`);const t=[],e=a+50<i?a+50:i;for(let r=a+1;r<=e;r++){const{stashId:e}=p(o,r);t.push(Promise.all([o.query.nominationPools.metadata(r),o.query.nominationPools.bondedPools(r),o.query.nominationPools.rewardPools(r),o.derive.staking.account(e)]))}const r=await Promise.all(t);l=l.concat(r),a+=50}let s=null==(e=l.map(((t,e)=>{if(t[1].isSome){var o,r,n,i,l;const a=t[1].unwrap();return{bondedPool:{memberCounter:String(a.memberCounter),points:String(a.points),roles:a.roles,state:a.state},metadata:null!=(o=t[0])&&o.length?null!=(r=t[0])&&r.isUtf8?null==(n=t[0])?void 0:n.toUtf8():null==(i=t[0])?void 0:i.toString():null,poolId:e+1,rewardPool:null!=(l=t[2])&&l.isSome?t[2].unwrap():null,stashIdAccount:t[3]}}})))?void 0:e.filter((t=>void 0!==t));console.log("getting pools owners identities...");const u=await Promise.all(s.map((t=>{var e;return o.derive.accounts.info((null==(e=t.bondedPool.roles)?void 0:e.root)||t.bondedPool.roles.depositor)})));return s=s.map(((t,e)=>(t.identity=u[e].identity,t))),console.log(`${null==u?void 0:u.length} identities of pool owners are fetched`),JSON.stringify({info:s,nextPoolId:i.addn(1).toString()})})(e).then((t=>{postMessage(t)}))}}},i={};function l(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={id:t,loaded:!1,exports:{}};return n[t].call(o.exports,o,o.exports,l),o.loaded=!0,o.exports}l.m=n,l.x=()=>{var t=l.O(void 0,[90],(()=>l(18387)));return l.O(t)},t=[],l.O=(e,o,r,n)=>{if(!o){var i=1/0;for(c=0;c<t.length;c++){for(var[o,r,n]=t[c],a=!0,s=0;s<o.length;s++)(!1&n||i>=n)&&Object.keys(l.O).every((t=>l.O[t](o[s])))?o.splice(s--,1):(a=!1,n<i&&(i=n));if(a){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[o,r,n]},o=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,l.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var n=Object.create(null);l.r(n);var i={};e=e||[null,o({}),o([]),o(o)];for(var a=2&r&&t;"object"==typeof a&&!~e.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,l.d(n,i),n},l.d=(t,e)=>{for(var o in e)l.o(e,o)&&!l.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},l.f={},l.e=t=>Promise.all(Object.keys(l.f).reduce(((e,o)=>(l.f[o](t,e),e)),[])),l.u=t=>t+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),l.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),l.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{var t;l.g.importScripts&&(t=l.g.location+"");var e=l.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=t})(),(()=>{var t={274:1};l.f.i=(e,o)=>{t[e]||importScripts(l.p+l.u(e))};var e=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],o=e.push.bind(e);e.push=e=>{var[r,n,i]=e;for(var a in n)l.o(n,a)&&(l.m[a]=n[a]);for(i&&i(l);r.length;)t[r.pop()]=1;o(e)}})(),r=l.x,l.x=()=>l.e(90).then(r),l.x()})();