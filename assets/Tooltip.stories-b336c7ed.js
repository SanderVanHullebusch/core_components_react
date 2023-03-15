var pe=Object.defineProperty;var s=(t,e)=>pe(t,"name",{value:e,configurable:!0});import{Q as de}from"./stories.settings-7ac24d87.js";import{r as C,R as me}from"./index-d23035ce.js";import{a as ye,F as he,j as wt}from"./jsx-runtime-bb315772.js";import"./es.object.get-own-property-descriptor-89e834e9.js";var at,gt={exports:{}},Vt={};/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */at=Vt,function(){var t=me,e=60103,o=60106;at.Fragment=60107;var n=60108,i=60114,c=60109,u=60110,l=60112,p=60113,m=60120,v=60115,d=60116,b=60121,O=60122,E=60117,R=60129,N=60131;if(typeof Symbol=="function"&&Symbol.for){var g=Symbol.for;e=g("react.element"),o=g("react.portal"),at.Fragment=g("react.fragment"),n=g("react.strict_mode"),i=g("react.profiler"),c=g("react.provider"),u=g("react.context"),l=g("react.forward_ref"),p=g("react.suspense"),m=g("react.suspense_list"),v=g("react.memo"),d=g("react.lazy"),b=g("react.block"),O=g("react.server.block"),E=g("react.fundamental"),g("react.scope"),g("react.opaque.id"),R=g("react.debug_trace_mode"),g("react.offscreen"),N=g("react.legacy_hidden")}var $=typeof Symbol=="function"&&Symbol.iterator,w=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function P(r){for(var _=arguments.length,x=new Array(_>1?_-1:0),W=1;W<_;W++)x[W-1]=arguments[W];F("error",r,x)}s(P,"_");function F(r,_,x){var W=w.ReactDebugCurrentFrame,L="";if(H){var T=I(H.type),A=H._owner;L+=function(a,k,S){var y="";if(k){var D=k.fileName,h=D.replace(U,"");if(/^index\./.test(h)){var Q=D.match(U);if(Q){var Y=Q[1];Y&&(h=Y.replace(U,"")+"/"+h)}}y=" (at "+h+":"+k.lineNumber+")"}else S&&(y=" (created by "+S+")");return`
    in `+(a||"Unknown")+y}(T,H._source,A&&I(A.type))}(L+=W.getStackAddendum())!==""&&(_+="%s",x=x.concat([L]));var f=x.map(function(a){return""+a});f.unshift("Warning: "+_),Function.prototype.apply.call(console[r],console,f)}s(F,"R");var U=/^(.*)[\\\/]/;function I(r){if(r==null)return null;if(typeof r.tag=="number"&&P("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case at.Fragment:return"Fragment";case o:return"Portal";case i:return"Profiler";case n:return"StrictMode";case p:return"Suspense";case m:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case u:return"Context.Consumer";case c:return"Context.Provider";case l:return W=r,L=r.render,T="ForwardRef",A=L.displayName||L.name||"",W.displayName||(A!==""?T+"("+A+")":T);case v:return I(r.type);case b:return I(r.render);case d:var _=(x=r)._status===1?x._result:null;if(_)return I(_)}var x,W,L,T,A;return null}s(I,"O");var j={};w.ReactDebugCurrentFrame;var H=null;function V(r){H=r}s(V,"A");var B,M,z,X=w.ReactCurrentOwner,J=Object.prototype.hasOwnProperty,q={key:!0,ref:!0,__self:!0,__source:!0};function nt(r,_,x,W,L){var T,A={},f=null,a=null;for(T in x!==void 0&&(f=""+x),function(y){if(J.call(y,"key")){var D=Object.getOwnPropertyDescriptor(y,"key").get;if(D&&D.isReactWarning)return!1}return y.key!==void 0}(_)&&(f=""+_.key),function(y){if(J.call(y,"ref")){var D=Object.getOwnPropertyDescriptor(y,"ref").get;if(D&&D.isReactWarning)return!1}return y.ref!==void 0}(_)&&(a=_.ref,function(y,D){if(typeof y.ref=="string"&&X.current&&D&&X.current.stateNode!==D){var h=I(X.current.type);z[h]||(P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',I(X.current.type),y.ref),z[h]=!0)}}(_,L)),_)J.call(_,T)&&!q.hasOwnProperty(T)&&(A[T]=_[T]);if(r&&r.defaultProps){var k=r.defaultProps;for(T in k)A[T]===void 0&&(A[T]=k[T])}if(f||a){var S=typeof r=="function"?r.displayName||r.name||"Unknown":r;f&&function(y,D){var h=s(function(){B||(B=!0,P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",D))},"n");h.isReactWarning=!0,Object.defineProperty(y,"key",{get:h,configurable:!0})}(A,S),a&&function(y,D){var h=s(function(){M||(M=!0,P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",D))},"n");h.isReactWarning=!0,Object.defineProperty(y,"ref",{get:h,configurable:!0})}(A,S)}return function(y,D,h,Q,Y,G,Rt){var Z={$$typeof:e,type:y,key:D,ref:h,props:Rt,_owner:G,_store:{}};return Object.defineProperty(Z._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(Z,"_self",{configurable:!1,enumerable:!1,writable:!1,value:Q}),Object.defineProperty(Z,"_source",{configurable:!1,enumerable:!1,writable:!1,value:Y}),Object.freeze&&(Object.freeze(Z.props),Object.freeze(Z)),Z}(r,f,a,L,W,X.current,A)}s(nt,"I"),z={};var tt,ft=w.ReactCurrentOwner;function K(r){H=r}s(K,"C");function rt(r){return typeof r=="object"&&r!==null&&r.$$typeof===e}s(rt,"W");function pt(){if(ft.current){var r=I(ft.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}s(pt,"H"),w.ReactDebugCurrentFrame,tt=!1;var xt={};function ot(r,_){if(r._store&&!r._store.validated&&r.key==null){r._store.validated=!0;var x=function(L){var T=pt();if(!T){var A=typeof L=="string"?L:L.displayName||L.name;A&&(T=`

Check the top-level render call using <`+A+">.")}return T}(_);if(!xt[x]){xt[x]=!0;var W="";r&&r._owner&&r._owner!==ft.current&&(W=" It was passed a child from "+I(r._owner.type)+"."),K(r),P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',x,W),K(null)}}}s(ot,"B");function dt(r,_){if(typeof r=="object"){if(Array.isArray(r))for(var x=0;x<r.length;x++){var W=r[x];rt(W)&&ot(W,_)}else if(rt(r))r._store&&(r._store.validated=!0);else if(r){var L=function(f){if(f===null||typeof f!="object")return null;var a=$&&f[$]||f["@@iterator"];return typeof a=="function"?a:null}(r);if(typeof L=="function"&&L!==r.entries)for(var T,A=L.call(r);!(T=A.next()).done;)rt(T.value)&&ot(T.value,_)}}}s(dt,"V");function mt(r){var _,x=r.type;if(x!=null&&typeof x!="string"){if(typeof x=="function")_=x.propTypes;else{if(typeof x!="object"||x.$$typeof!==l&&x.$$typeof!==v)return;_=x.propTypes}if(_){var W=I(x);(function(L,T,A,f,a){var k=Function.call.bind(Object.prototype.hasOwnProperty);for(var S in L)if(k(L,S)){var y=void 0;try{if(typeof L[S]!="function"){var D=Error((f||"React class")+": "+A+" type `"+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof L[S]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw D.name="Invariant Violation",D}y=L[S](T,S,f,A,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(h){y=h}!y||y instanceof Error||(V(a),P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",f||"React class",A,S,typeof y),V(null)),y instanceof Error&&!(y.message in j)&&(j[y.message]=!0,V(a),P("Failed %s type: %s",A,y.message),V(null))}})(_,r.props,"prop",W,r)}else x.PropTypes===void 0||tt||(tt=!0,P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",I(x)||"Unknown"));typeof x.getDefaultProps!="function"||x.getDefaultProps.isReactClassApproved||P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}s(mt,"M");function et(r,_,x,W,L,T){var A=function(h){return typeof h=="string"||typeof h=="function"||h===at.Fragment||h===i||h===R||h===n||h===p||h===m||h===N||typeof h=="object"&&h!==null&&(h.$$typeof===d||h.$$typeof===v||h.$$typeof===c||h.$$typeof===u||h.$$typeof===l||h.$$typeof===E||h.$$typeof===b||h[0]===O)}(r);if(!A){var f="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(f+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var a,k=function(h){return h!==void 0?`

Check your code at `+h.fileName.replace(/^.*[\\\/]/,"")+":"+h.lineNumber+".":""}(L);f+=k||pt(),r===null?a="null":Array.isArray(r)?a="array":r!==void 0&&r.$$typeof===e?(a="<"+(I(r.type)||"Unknown")+" />",f=" Did you accidentally export a JSX literal instead of a component?"):a=typeof r,P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,f)}var S=nt(r,_,x,L,T);if(S==null)return S;if(A){var y=_.children;if(y!==void 0)if(W)if(Array.isArray(y)){for(var D=0;D<y.length;D++)dt(y[D],r);Object.freeze&&Object.freeze(y)}else P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else dt(y,r)}return r===at.Fragment?function(h){for(var Q=Object.keys(h.props),Y=0;Y<Q.length;Y++){var G=Q[Y];if(G!=="children"&&G!=="key"){K(h),P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",G),K(null);break}}h.ref!==null&&(K(h),P("Invalid attribute `ref` supplied to `React.Fragment`."),K(null))}(S):mt(S),S}s(et,"z");var yt=s(function(r,_,x){return et(r,_,x,!1)},"Y"),bt=s(function(r,_,x){return et(r,_,x,!0)},"q");at.jsx=yt,at.jsxs=bt}(),gt.exports=Vt;var Ct,ee={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Ct=ee,function(){var t={}.hasOwnProperty;function e(){for(var o=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var c=typeof i;if(c==="string"||c==="number")o.push(i);else if(Array.isArray(i)){if(i.length){var u=e.apply(null,i);u&&o.push(u)}}else if(c==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){o.push(i.toString());continue}for(var l in i)t.call(i,l)&&i[l]&&o.push(l)}}}return o.join(" ")}s(e,"t"),Ct.exports?(e.default=e,Ct.exports=e):window.classNames=e}();var Bt=ee.exports;const Ut=s((t,e,o)=>{let n=null;return function(...i){n&&clearTimeout(n),n=setTimeout(()=>{n=null,o||t.apply(this,i)},e)}},"y"),ge=s(({content:t})=>gt.exports.jsx("span",{dangerouslySetInnerHTML:{__html:t}}),"m"),ve={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},xe=C.exports.createContext({getTooltipData:()=>ve});function ne(t="DEFAULT_TOOLTIP_ID"){return C.exports.useContext(xe).getTooltipData(t)}s(ne,"w");function Ot(t){return t.split("-")[0]}s(Ot,"x");function Pt(t){return t.split("-")[1]}s(Pt,"_");function St(t){return["top","bottom"].includes(Ot(t))?"x":"y"}s(St,"R");function Ft(t){return t==="y"?"height":"width"}s(Ft,"T");function qt(t,e,o){let{reference:n,floating:i}=t;const c=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,l=St(e),p=Ft(l),m=n[p]/2-i[p]/2,v=l==="x";let d;switch(Ot(e)){case"top":d={x:c,y:n.y-i.height};break;case"bottom":d={x:c,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:u};break;case"left":d={x:n.x-i.width,y:u};break;default:d={x:n.x,y:n.y}}switch(Pt(e)){case"start":d[l]-=m*(o&&v?-1:1);break;case"end":d[l]+=m*(o&&v?-1:1)}return d}s(qt,"O");function re(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}s(re,"S");function kt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}s(kt,"k");async function oe(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:c,rects:u,elements:l,strategy:p}=t,{boundary:m="clippingAncestors",rootBoundary:v="viewport",elementContext:d="floating",altBoundary:b=!1,padding:O=0}=e,E=re(O),R=l[b?d==="floating"?"reference":"floating":d],N=kt(await c.getClippingRect({element:(o=await(c.isElement==null?void 0:c.isElement(R)))==null||o?R:R.contextElement||await(c.getDocumentElement==null?void 0:c.getDocumentElement(l.floating)),boundary:m,rootBoundary:v,strategy:p})),g=kt(c.convertOffsetParentRelativeRectToViewportRelativeRect?await c.convertOffsetParentRelativeRectToViewportRelativeRect({rect:d==="floating"?{...u.floating,x:n,y:i}:u.reference,offsetParent:await(c.getOffsetParent==null?void 0:c.getOffsetParent(l.floating)),strategy:p}):u[d]);return{top:N.top-g.top+E.top,bottom:g.bottom-N.bottom+E.bottom,left:N.left-g.left+E.left,right:g.right-N.right+E.right}}s(oe,"A");const be=Math.min,we=Math.max;function $t(t,e,o){return we(t,be(e,o))}s($t,"L");const _e={left:"right",right:"left",bottom:"top",top:"bottom"};function At(t){return t.replace(/left|right|bottom|top/g,e=>_e[e])}s(At,"D");const Re={start:"end",end:"start"};function Yt(t){return t.replace(/start|end/g,e=>Re[e])}s(Yt,"I");const Te=s(function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:n,middlewareData:i,rects:c,initialPlacement:u,platform:l,elements:p}=e,{mainAxis:m=!0,crossAxis:v=!0,fallbackPlacements:d,fallbackStrategy:b="bestFit",flipAlignment:O=!0,...E}=t,R=Ot(n),N=d||(R===u||!O?[At(u)]:function(j){const H=At(j);return[Yt(j),H,Yt(H)]}(u)),g=[u,...N],$=await oe(e,E),w=[];let P=((o=i.flip)==null?void 0:o.overflows)||[];if(m&&w.push($[R]),v){const{main:j,cross:H}=function(V,B,M){M===void 0&&(M=!1);const z=Pt(V),X=St(V),J=Ft(X);let q=X==="x"?z===(M?"end":"start")?"right":"left":z==="start"?"bottom":"top";return B.reference[J]>B.floating[J]&&(q=At(q)),{main:q,cross:At(q)}}(n,c,await(l.isRTL==null?void 0:l.isRTL(p.floating)));w.push($[j],$[H])}if(P=[...P,{placement:n,overflows:w}],!w.every(j=>j<=0)){var F,U;const j=((F=(U=i.flip)==null?void 0:U.index)!=null?F:0)+1,H=g[j];if(H)return{data:{index:j,overflows:P},reset:{placement:H}};let V="bottom";switch(b){case"bestFit":{var I;const B=(I=P.map(M=>[M,M.overflows.filter(z=>z>0).reduce((z,X)=>z+X,0)]).sort((M,z)=>M[1]-z[1])[0])==null?void 0:I[0].placement;B&&(V=B);break}case"initialPlacement":V=u}if(n!==V)return{reset:{placement:V}}}return{}}}},"$"),Se=s(function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,i=await async function(c,u){const{placement:l,platform:p,elements:m}=c,v=await(p.isRTL==null?void 0:p.isRTL(m.floating)),d=Ot(l),b=Pt(l),O=St(l)==="x",E=["left","top"].includes(d)?-1:1,R=v&&O?-1:1,N=typeof u=="function"?u(c):u;let{mainAxis:g,crossAxis:$,alignmentAxis:w}=typeof N=="number"?{mainAxis:N,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...N};return b&&typeof w=="number"&&($=b==="end"?-1*w:w),O?{x:$*R,y:g*E}:{x:g*E,y:$*R}}(e,t);return{x:o+i.x,y:n+i.y,data:i}}}},"F");function ie(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}s(ie,"C");function lt(t){if(t==null)return window;if(!ie(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}s(lt,"W");function ct(t){return lt(t).getComputedStyle(t)}s(ct,"H");function ut(t){return ie(t)?"":t?(t.nodeName||"").toLowerCase():""}s(ut,"U");function le(){const t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}s(le,"B");function it(t){return t instanceof lt(t).HTMLElement}s(it,"V");function _t(t){return t instanceof lt(t).Element}s(_t,"M");function Mt(t){return typeof ShadowRoot>"u"?!1:t instanceof lt(t).ShadowRoot||t instanceof ShadowRoot}s(Mt,"z");function Lt(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=ct(t);return/auto|scroll|overlay|hidden/.test(e+n+o)&&!["inline","contents"].includes(i)}s(Lt,"Y");function Oe(t){return["table","td","th"].includes(ut(t))}s(Oe,"q");function It(t){const e=/firefox/i.test(le()),o=ct(t),n=o.backdropFilter||o.WebkitBackdropFilter;return o.transform!=="none"||o.perspective!=="none"||!!n&&n!=="none"||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"||["transform","perspective"].some(i=>o.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const c=o.contain;return c!=null&&c.includes(i)})}s(It,"X");function ae(){return!/^((?!chrome|android).)*safari/i.test(le())}s(ae,"K");function Wt(t){return["html","body","#document"].includes(ut(t))}s(Wt,"J");const zt=Math.min,Tt=Math.max,Et=Math.round;function vt(t,e,o){var n,i,c,u;e===void 0&&(e=!1),o===void 0&&(o=!1);const l=t.getBoundingClientRect();let p=1,m=1;e&&it(t)&&(p=t.offsetWidth>0&&Et(l.width)/t.offsetWidth||1,m=t.offsetHeight>0&&Et(l.height)/t.offsetHeight||1);const v=_t(t)?lt(t):window,d=!ae()&&o,b=(l.left+(d&&(n=(i=v.visualViewport)==null?void 0:i.offsetLeft)!=null?n:0))/p,O=(l.top+(d&&(c=(u=v.visualViewport)==null?void 0:u.offsetTop)!=null?c:0))/m,E=l.width/p,R=l.height/m;return{width:E,height:R,top:O,right:b+E,bottom:O+R,left:b,x:b,y:O}}s(vt,"ee");function st(t){return(e=t,(e instanceof lt(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}s(st,"te");function Nt(t){return _t(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}s(Nt,"ne");function se(t){return vt(st(t)).left+Nt(t).scrollLeft}s(se,"re");function Ae(t,e,o){const n=it(e),i=st(e),c=vt(t,n&&function(p){const m=vt(p);return Et(m.width)!==p.offsetWidth||Et(m.height)!==p.offsetHeight}(e),o==="fixed");let u={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(n||!n&&o!=="fixed")if((ut(e)!=="body"||Lt(i))&&(u=Nt(e)),it(e)){const p=vt(e,!0);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else i&&(l.x=se(i));return{x:c.left+u.scrollLeft-l.x,y:c.top+u.scrollTop-l.y,width:c.width,height:c.height}}s(Ae,"oe");function jt(t){if(ut(t)==="html")return t;const e=t.assignedSlot||t.parentNode||(Mt(t)?t.host:null)||st(t);return Mt(e)?e.host:e}s(jt,"ie");function Xt(t){return it(t)&&ct(t).position!=="fixed"?t.offsetParent:null}s(Xt,"le");function Jt(t){const e=lt(t);let o=Xt(t);for(;o&&Oe(o)&&ct(o).position==="static";)o=Xt(o);return o&&(ut(o)==="html"||ut(o)==="body"&&ct(o).position==="static"&&!It(o))?e:o||function(n){let i=jt(n);for(;it(i)&&!Wt(i);){if(It(i))return i;i=jt(i)}return null}(t)||e}s(Jt,"ae");function Kt(t){if(it(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=vt(t);return{width:e.width,height:e.height}}s(Kt,"se");function ce(t){const e=jt(t);return Wt(e)?t.ownerDocument.body:it(e)&&Lt(e)?e:ce(e)}s(ce,"ce");function ue(t,e){var o;e===void 0&&(e=[]);const n=ce(t),i=n===((o=t.ownerDocument)==null?void 0:o.body),c=lt(n),u=i?[c].concat(c.visualViewport||[],Lt(n)?n:[]):n,l=e.concat(u);return i?l:l.concat(ue(u))}s(ue,"ue");function Qt(t,e,o){return e==="viewport"?kt(function(n,i){const c=lt(n),u=st(n),l=c.visualViewport;let p=u.clientWidth,m=u.clientHeight,v=0,d=0;if(l){p=l.width,m=l.height;const b=ae();(b||!b&&i==="fixed")&&(v=l.offsetLeft,d=l.offsetTop)}return{width:p,height:m,x:v,y:d}}(t,o)):_t(e)?function(n,i){const c=vt(n,!1,i==="fixed"),u=c.top+n.clientTop,l=c.left+n.clientLeft;return{top:u,left:l,x:l,y:u,right:l+n.clientWidth,bottom:u+n.clientHeight,width:n.clientWidth,height:n.clientHeight}}(e,o):kt(function(n){var i;const c=st(n),u=Nt(n),l=(i=n.ownerDocument)==null?void 0:i.body,p=Tt(c.scrollWidth,c.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),m=Tt(c.scrollHeight,c.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0);let v=-u.scrollLeft+se(n);const d=-u.scrollTop;return ct(l||c).direction==="rtl"&&(v+=Tt(c.clientWidth,l?l.clientWidth:0)-p),{width:p,height:m,x:v,y:d}}(st(t)))}s(Qt,"fe");const ke={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const c=o==="clippingAncestors"?function(m){let v=ue(m).filter(O=>_t(O)&&ut(O)!=="body"),d=m,b=null;for(;_t(d)&&!Wt(d);){const O=ct(d);O.position==="static"&&b&&["absolute","fixed"].includes(b.position)&&!It(d)?v=v.filter(E=>E!==d):b=O,d=jt(d)}return v}(e):[].concat(o),u=[...c,n],l=u[0],p=u.reduce((m,v)=>{const d=Qt(e,v,i);return m.top=Tt(d.top,m.top),m.right=zt(d.right,m.right),m.bottom=zt(d.bottom,m.bottom),m.left=Tt(d.left,m.left),m},Qt(e,l,i));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:n}=t;const i=it(o),c=st(o);if(o===c)return e;let u={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((i||!i&&n!=="fixed")&&((ut(o)!=="body"||Lt(c))&&(u=Nt(o)),it(o))){const p=vt(o,!0);l.x=p.x+o.clientLeft,l.y=p.y+o.clientTop}return{...e,x:e.x-u.scrollLeft+l.x,y:e.y-u.scrollTop+l.y}},isElement:_t,getDimensions:Kt,getOffsetParent:Jt,getDocumentElement:st,getElementRects:t=>{let{reference:e,floating:o,strategy:n}=t;return{reference:Ae(e,Jt(o),n),floating:{...Kt(o),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>ct(t).direction==="rtl"},Zt=s((t,e,o)=>(async(n,i,c)=>{const{placement:u="bottom",strategy:l="absolute",middleware:p=[],platform:m}=c,v=p.filter(Boolean),d=await(m.isRTL==null?void 0:m.isRTL(i));if(m==null&&console.error(["Floating UI: `platform` property was not passed to config. If you","want to use Floating UI on the web, install @floating-ui/dom","instead of the /core package. Otherwise, you can create your own","`platform`: https://floating-ui.com/docs/platform"].join(" ")),v.filter($=>{let{name:w}=$;return w==="autoPlacement"||w==="flip"}).length>1)throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware","detected. This will lead to an infinite loop. Ensure only one of","either has been passed to the `middleware` array."].join(" "));n&&i||console.error(["Floating UI: The reference and/or floating element was not defined","when `computePosition()` was called. Ensure that both elements have","been created and can be measured."].join(" "));let b=await m.getElementRects({reference:n,floating:i,strategy:l}),{x:O,y:E}=qt(b,u,d),R=u,N={},g=0;for(let $=0;$<v.length;$++){const{name:w,fn:P}=v[$],{x:F,y:U,data:I,reset:j}=await P({x:O,y:E,initialPlacement:u,placement:R,strategy:l,middlewareData:N,rects:b,platform:m,elements:{reference:n,floating:i}});O=F??O,E=U??E,N={...N,[w]:{...N[w],...I}},g>50&&console.warn(["Floating UI: The middleware lifecycle appears to be running in an","infinite loop. This is usually caused by a `reset` continually","being returned without a break condition."].join(" ")),j&&g<=50&&(g++,typeof j=="object"&&(j.placement&&(R=j.placement),j.rects&&(b=j.rects===!0?await m.getElementRects({reference:n,floating:i,strategy:l}):j.rects),{x:O,y:E}=qt(b,R,d)),$=-1)}return{x:O,y:E,placement:R,strategy:l,middlewareData:N}})(t,e,{platform:ke,...o}),"de"),Gt=s(async({elementReference:t=null,tooltipReference:e=null,tooltipArrowReference:o=null,place:n="top",offset:i=10,strategy:c="absolute"})=>{if(!t)return{tooltipStyles:{},tooltipArrowStyles:{}};if(e===null)return{tooltipStyles:{},tooltipArrowStyles:{}};const u=[Se(Number(i)),Te(),(l={padding:5},l===void 0&&(l={}),{name:"shift",options:l,async fn(p){const{x:m,y:v,placement:d}=p,{mainAxis:b=!0,crossAxis:O=!1,limiter:E={fn:I=>{let{x:j,y:H}=I;return{x:j,y:H}}},...R}=l,N={x:m,y:v},g=await oe(p,R),$=St(Ot(d)),w=$==="x"?"y":"x";let P=N[$],F=N[w];if(b){const I=$==="y"?"bottom":"right";P=$t(P+g[$==="y"?"top":"left"],P,P-g[I])}if(O){const I=w==="y"?"bottom":"right";F=$t(F+g[w==="y"?"top":"left"],F,F-g[I])}const U=E.fn({...p,[$]:P,[w]:F});return{...U,data:{x:U.x-m,y:U.y-v}}}})];var l;return o?(u.push((p=>({name:"arrow",options:p,async fn(m){const{element:v,padding:d=0}=p??{},{x:b,y:O,placement:E,rects:R,platform:N}=m;if(v==null)return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."),{};const g=re(d),$={x:b,y:O},w=St(E),P=Pt(E),F=Ft(w),U=await N.getDimensions(v),I=w==="y"?"top":"left",j=w==="y"?"bottom":"right",H=R.reference[F]+R.reference[w]-$[w]-R.floating[F],V=$[w]-R.reference[w],B=await(N.getOffsetParent==null?void 0:N.getOffsetParent(v));let M=B?w==="y"?B.clientHeight||0:B.clientWidth||0:0;M===0&&(M=R.floating[F]);const z=H/2-V/2,X=g[I],J=M-U[F]-g[j],q=M/2-U[F]/2+z,nt=$t(X,q,J),tt=(P==="start"?g[I]:g[j])>0&&q!==nt&&R.reference[F]<=R.floating[F];return{[w]:$[w]-(tt?q<X?X-q:J-q:0),data:{[w]:nt,centerOffset:q-nt}}}}))({element:o,padding:5})),Zt(t,e,{placement:n,strategy:c,middleware:u}).then(({x:p,y:m,placement:v,middlewareData:d})=>{var b,O;const E={left:`${p}px`,top:`${m}px`},{x:R,y:N}=(b=d.arrow)!==null&&b!==void 0?b:{x:0,y:0};return{tooltipStyles:E,tooltipArrowStyles:{left:R!=null?`${R}px`:"",top:N!=null?`${N}px`:"",right:"",bottom:"",[(O={top:"bottom",right:"left",bottom:"top",left:"right"}[v.split("-")[0]])!==null&&O!==void 0?O:"bottom"]:"-4px"}}})):Zt(t,e,{placement:"bottom",strategy:c,middleware:u}).then(({x:p,y:m})=>({tooltipStyles:{left:`${p}px`,top:`${m}px`},tooltipArrowStyles:{}}))},"ye");var ht={tooltip:"styles-module_tooltip__mnnfp",fixed:"styles-module_fixed__7ciUi",arrow:"styles-module_arrow__K0L3T","no-arrow":"styles-module_no-arrow__KcFZN",clickable:"styles-module_clickable__Bv9o7",show:"styles-module_show__2NboJ",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const te=s(({id:t,className:e,classNameArrow:o,variant:n="dark",anchorId:i,place:c="top",offset:u=10,events:l=["hover"],positionStrategy:p="absolute",wrapper:m="div",children:v=null,delayShow:d=0,delayHide:b=0,float:O=!1,noArrow:E=!1,clickable:R=!1,style:N,position:g,afterShow:$,afterHide:w,content:P,html:F,isOpen:U,setIsOpen:I})=>{const j=C.exports.useRef(null),H=C.exports.useRef(null),V=C.exports.useRef(null),B=C.exports.useRef(null),[M,z]=C.exports.useState({}),[X,J]=C.exports.useState({}),[q,nt]=C.exports.useState(!1),tt=C.exports.useRef(!1),[ft,K]=C.exports.useState(!1),rt=C.exports.useRef(null),{anchorRefs:pt,setActiveAnchor:xt}=ne(t),[ot,dt]=C.exports.useState({current:null}),mt=C.exports.useRef(!1),et=s(a=>{I?I(a):U===void 0&&nt(a)},"Z");C.exports.useEffect(()=>{q!==tt.current&&(tt.current=q,q?$==null||$():w==null||w())},[q]);const yt=s((a=b)=>{B.current&&clearTimeout(B.current),B.current=setTimeout(()=>{mt.current||et(!1)},a)},"G"),bt=s(a=>{var k;if(!a)return;d?(V.current&&clearTimeout(V.current),V.current=setTimeout(()=>{et(!0)},d)):et(!0);const S=(k=a.currentTarget)!==null&&k!==void 0?k:a.target;dt(y=>y.current===S?y:{current:S}),xt({current:S}),B.current&&clearTimeout(B.current)},"Q"),r=s(()=>{R?yt(b||50):b?yt():et(!1),V.current&&clearTimeout(V.current)},"ee"),_=s(({x:a,y:k})=>{const S={getBoundingClientRect:()=>({x:a,y:k,width:0,height:0,top:k,left:a,right:a,bottom:k})};K(!0),Gt({place:c,offset:u,elementReference:S,tooltipReference:j.current,tooltipArrowReference:H.current,strategy:p}).then(y=>{K(!1),Object.keys(y.tooltipStyles).length&&z(y.tooltipStyles),Object.keys(y.tooltipArrowStyles).length&&J(y.tooltipArrowStyles)})},"te"),x=s(a=>{if(!a)return;const k=a,S={x:k.clientX,y:k.clientY};_(S),rt.current=S},"ne"),W=s(a=>{bt(a),b&&yt()},"re"),L=s(a=>{var k;!((k=ot.current)===null||k===void 0)&&k.contains(a.target)||et(!1)},"oe"),T=Ut(bt,50),A=Ut(r,50);C.exports.useEffect(()=>{var a,k;const S=new Set(pt),y=document.querySelector(`[id='${i}']`);if(y&&(dt(Y=>Y.current===y?Y:{current:y}),S.add({current:y})),!S.size)return()=>null;const D=[];l.find(Y=>Y==="click")&&(window.addEventListener("click",L),D.push({event:"click",listener:W})),l.find(Y=>Y==="hover")&&(D.push({event:"mouseenter",listener:T},{event:"mouseleave",listener:A},{event:"focus",listener:T},{event:"blur",listener:A}),O&&D.push({event:"mousemove",listener:x}));const h=s(()=>{mt.current=!0},"l"),Q=s(()=>{mt.current=!1,r()},"a");return R&&((a=j.current)===null||a===void 0||a.addEventListener("mouseenter",h),(k=j.current)===null||k===void 0||k.addEventListener("mouseleave",Q)),D.forEach(({event:Y,listener:G})=>{S.forEach(Rt=>{var Z;(Z=Rt.current)===null||Z===void 0||Z.addEventListener(Y,G)})}),()=>{var Y,G;window.removeEventListener("click",L),R&&((Y=j.current)===null||Y===void 0||Y.removeEventListener("mouseenter",h),(G=j.current)===null||G===void 0||G.removeEventListener("mouseleave",Q)),D.forEach(({event:Rt,listener:Z})=>{S.forEach(fe=>{var Dt;(Dt=fe.current)===null||Dt===void 0||Dt.removeEventListener(Rt,Z)})})}},[pt,ot,i,l,b,d]),C.exports.useEffect(()=>{if(g)return _(g),()=>null;if(O)return rt.current&&_(rt.current),()=>null;let a=ot.current;i&&(a=document.querySelector(`[id='${i}']`)),K(!0);let k=!0;return Gt({place:c,offset:u,elementReference:a,tooltipReference:j.current,tooltipArrowReference:H.current,strategy:p}).then(S=>{k&&(K(!1),Object.keys(S.tooltipStyles).length&&z(S.tooltipStyles),Object.keys(S.tooltipArrowStyles).length&&J(S.tooltipArrowStyles))}),()=>{k=!1}},[q,U,i,ot,P,F,c,u,p,g]),C.exports.useEffect(()=>()=>{V.current&&clearTimeout(V.current),B.current&&clearTimeout(B.current)},[]);const f=Boolean(F||P||v);return gt.exports.jsxs(m,{id:t,role:"tooltip",className:Bt("react-tooltip",ht.tooltip,ht[n],e,{[ht.show]:f&&!ft&&(U||q),[ht.fixed]:p==="fixed",[ht.clickable]:R}),style:{...N,...M},ref:j,children:[v||F&&gt.exports.jsx(ge,{content:F})||P,gt.exports.jsx("div",{className:Bt("react-tooltip-arrow",ht.arrow,o,{[ht["no-arrow"]]:E}),style:X,ref:H})]})},"he"),Ee=s(({id:t,anchorId:e,content:o,html:n,className:i,classNameArrow:c,variant:u="dark",place:l="top",offset:p=10,wrapper:m="div",children:v=null,events:d=["hover"],positionStrategy:b="absolute",delayShow:O=0,delayHide:E=0,float:R=!1,noArrow:N=!1,clickable:g=!1,style:$,position:w,isOpen:P,setIsOpen:F,afterShow:U,afterHide:I})=>{const[j,H]=C.exports.useState(o),[V,B]=C.exports.useState(n),[M,z]=C.exports.useState(l),[X,J]=C.exports.useState(u),[q,nt]=C.exports.useState(p),[tt,ft]=C.exports.useState(O),[K,rt]=C.exports.useState(E),[pt,xt]=C.exports.useState(R),[ot,dt]=C.exports.useState(m),[mt,et]=C.exports.useState(d),[yt,bt]=C.exports.useState(b),{anchorRefs:r,activeAnchor:_}=ne(t),x=s(T=>T==null?void 0:T.getAttributeNames().reduce((A,f)=>{var a;return f.startsWith("data-tooltip-")&&(A[f.replace(/^data-tooltip-/,"")]=(a=T==null?void 0:T.getAttribute(f))!==null&&a!==void 0?a:null),A},{}),"G"),W=s(T=>{const A={place:f=>{var a;z((a=f)!==null&&a!==void 0?a:l)},content:f=>{H(f??o)},html:f=>{B(f??n)},variant:f=>{var a;J((a=f)!==null&&a!==void 0?a:u)},offset:f=>{nt(f===null?p:Number(f))},wrapper:f=>{var a;dt((a=f)!==null&&a!==void 0?a:"div")},events:f=>{const a=f==null?void 0:f.split(" ");et(a??d)},"position-strategy":f=>{var a;bt((a=f)!==null&&a!==void 0?a:b)},"delay-show":f=>{ft(f===null?O:Number(f))},"delay-hide":f=>{rt(f===null?E:Number(f))},float:f=>{xt(f===null?R:Boolean(f))}};Object.values(A).forEach(f=>f(null)),Object.entries(T).forEach(([f,a])=>{var k;(k=A[f])===null||k===void 0||k.call(A,a)})},"Q");C.exports.useEffect(()=>{H(o)},[o]),C.exports.useEffect(()=>{B(n)},[n]),C.exports.useEffect(()=>{var T;const A=new Set(r),f=document.querySelector(`[id='${e}']`);if(f&&A.add({current:f}),!A.size)return()=>null;const a=(T=_.current)!==null&&T!==void 0?T:f,k=new MutationObserver(y=>{y.forEach(D=>{var h;if(!a||D.type!=="attributes"||!(!((h=D.attributeName)===null||h===void 0)&&h.startsWith("data-tooltip-")))return;const Q=x(a);W(Q)})}),S={attributes:!0,childList:!1,subtree:!1};if(a){const y=x(a);W(y),k.observe(a,S)}return()=>{k.disconnect()}},[r,_,e]);const L={id:t,anchorId:e,className:i,classNameArrow:c,content:j,html:V,place:M,variant:X,offset:q,wrapper:ot,events:mt,positionStrategy:yt,delayShow:tt,delayHide:K,float:pt,noArrow:N,clickable:g,style:$,position:w,isOpen:P,setIsOpen:F,afterShow:U,afterHide:I};return v?gt.exports.jsx(te,{...L,children:v}):gt.exports.jsx(te,{...L})},"ve");function Ht({anchor:t,anchorId:e,location:o,text:n,qa:i}){return ye(he,{children:[C.exports.cloneElement(t,{id:e}),wt(Ee,{anchorId:e,className:"a-tooltip__base",noArrow:!0,positionStrategy:"fixed",place:o,children:wt("div",{className:"a-tooltip","data-qa":i,children:n})})]})}s(Ht,"Tooltip");Ht.defaultProps={text:"",location:"bottom",anchorId:"aui-tooltip"};const $e={title:"React/Atoms/Tooltip",component:Ht,parameters:{storySource:{source:`import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Tooltip from './Tooltip';

export default {
  title: 'React/Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          "A tooltip is a simple contextual popup that appears when users hover over, focus on, or tap an element."
      }
    }
  },
  argTypes: {
    text: {
      control: { type: 'text' },
      defaultValue: 'Hello tooltip!',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The text of the tooltip.'
    },
    anchor: {
      table: {
        type: { summary: 'ReactElement' }
      },
      defaultValue: <p>Tooltip text</p>,
      description:
        'React Element that serves as anchor for the tooltip to be displayed.'
    },
    anchorId: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-tooltip' }
      },
      defaultValue: 'aui-tooltip-story',
      description:
        'Required unique ID for the tooltip Anchor element. '
    },
    location: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' }
      },
      options: ['top', 'right', 'left', 'bottom'],
      defaultValue: 'top',
      description: 'Defines where, relative to the element, the tooltip will be shown, if it fits. Can be omitted for \`top\` (default).'
    },
    qa: QA_PROP_STORY
  },
};

const Template = (args) => {
  return (
    <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
      <Tooltip
        key={JSON.stringify(args)}
        {...args}
        anchor={<span>Tooltip anchor text</span>}
      />
    </div>
  );
};

export const tooltip = Template.bind({});
`,locationsMap:{tooltip:{startLoc:{col:17,line:56},endLoc:{col:1,line:66},startBody:{col:17,line:56},endBody:{col:1,line:66}}}},docs:{description:{component:"A tooltip is a simple contextual popup that appears when users hover over, focus on, or tap an element."}}},argTypes:{text:{control:{type:"text"},defaultValue:"Hello tooltip!",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The text of the tooltip."},anchor:{table:{type:{summary:"ReactElement"}},defaultValue:wt("p",{children:"Tooltip text"}),description:"React Element that serves as anchor for the tooltip to be displayed."},anchorId:{table:{type:{summary:"string"},defaultValue:{summary:"aui-tooltip"}},defaultValue:"aui-tooltip-story",description:"Required unique ID for the tooltip Anchor element. "},location:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"top"}},options:["top","right","left","bottom"],defaultValue:"top",description:"Defines where, relative to the element, the tooltip will be shown, if it fits. Can be omitted for `top` (default)."},qa:de}},je=s(t=>wt("div",{style:{marginTop:"20px",marginBottom:"20px",display:"flex",justifyContent:"center"},children:wt(Ht,{...t,anchor:wt("span",{children:"Tooltip anchor text"})},JSON.stringify(t))}),"Template"),Ie=je.bind({}),Fe=["tooltip"];export{Fe as __namedExportsOrder,$e as default,Ie as tooltip};
//# sourceMappingURL=Tooltip.stories-b336c7ed.js.map
