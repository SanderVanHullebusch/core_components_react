var h=Object.defineProperty;var f=(d,a)=>h(d,"name",{value:a,configurable:!0});import{r as n,R as l}from"./index-d23035ce.js";import{R as D}from"./index-8eee599f.js";import{S as N,D as j}from"./layout.settings-9902fce9.js";import{c as x}from"./dom.utils-1db2b487.js";import{a as C,j as L}from"./jsx-runtime-bb315772.js";const M=n.exports.forwardRef(f(function({trigger:a,open:c,hasPadding:E,orientation:e,size:m,children:_,scrollable:i,onStateChange:t,qa:v},R){const[k,p]=l.useState(!!c),s=c===!1||c===!0?c:k,o=l.useRef(null);n.exports.useImperativeHandle(R,()=>o.current);const r=l.useCallback(F=>{const y=D.findDOMNode(o.current);y&&!y.contains(F.target)&&(p(!1),t&&t(!1))},[t]),u=l.useCallback(()=>{s?document.addEventListener("click",r,!1):document.removeEventListener("click",r,!1)},[r,s]),I=f(()=>{p(!s),u(),t&&t(!s)},"_toggleIsOpen");l.useEffect(()=>{u()},[u]);const O=x({"m-flyout":!0,"is-open":!!s,"u-text-right":!!(e!=null&&e.includes("right")),[`m-flyout--${e}`]:!!e,[`m-flyout--${N[m||j]}`]:!!m,"m-flyout--scrollable":!!i}),b=x({"m-flyout__content":!0,"has-padding":!!E});return a?C("div",{className:O,ref:o,"data-qa":v,children:[n.exports.cloneElement(a,{onClick:I,"aria-haspopup":!0,"aria-expanded":s}),L("div",{className:b,...i?{tabIndex:0}:{},children:_})]}):null},"Flyout2"));M.defaultProps={hasPadding:!0,scrollable:!1,orientation:"bottom-left"};export{M as F};
//# sourceMappingURL=Flyout-2219970d.js.map
