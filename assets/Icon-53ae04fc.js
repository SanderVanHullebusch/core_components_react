var p=Object.defineProperty;var n=(s,e)=>p(s,"name",{value:e,configurable:!0});import{S as u,I as f}from"./settings-9292fabe.js";import{c as h}from"./dom.utils-1db2b487.js";import{a as m,j as a}from"./jsx-runtime-bb315772.js";const c="ai-svg";function _({name:s,screenReaderText:e,thin:i,qa:o}){const r=n(async function(){if(!fetch)return null;const l=await(await fetch(f)).text(),t=document.createElement("svg");t.id=c,t.innerHTML=l,document.getElementById(c)||document.body.appendChild(t)},"fetchIcons");typeof document<"u"&&!document.getElementById(c)&&r();const d=h({ai:!0,[`ai-${s==null?void 0:s.replace("ai-","")}`]:!!s,"ai--thin":!!i});return m("span",{className:d,"data-qa":o,children:[s?a("svg",{"aria-hidden":"true",children:a("use",{href:`#ai-${s.replace("ai-","")}`})}):null,!!e&&a("span",{className:u,children:e})]})}n(_,"Icon");export{_ as I};
//# sourceMappingURL=Icon-53ae04fc.js.map
