var y=Object.defineProperty;var o=(c,r)=>y(c,"name",{value:r,configurable:!0});import{c as M}from"./dom.utils-1db2b487.js";import{S as U,D as k}from"./layout.settings-9902fce9.js";import{I as _}from"./Icon-53ae04fc.js";import{r as q,a as v,b as B}from"./input.renders-af19790c.js";import{r as f}from"./index-d23035ce.js";import{a as C,j as t}from"./jsx-runtime-bb315772.js";const N=f.exports.forwardRef(o(function({addonLeft:r,addonRight:e,charCounter:T,description:F,disabled:I,iconLeft:a,iconRight:n,id:p,inline:i,label:S,maxLength:l,name:j,onChange:m,qa:D,readOnly:E,required:d,size:h,state:u,type:b="text",value:s,...g},w){const[A,P]=f.exports.useState(s?s.length:0),Z=M({"a-input":!0,"a-input--inline":!!i,[`a-input--${U[h||k]}`]:!!h,"has-icon-left":!!a,"has-icon-right":!a&&!!n,"has-addon-left":!!r,"has-addon-right":!!e,"has-error":u==="error"}),$=o(x=>(P(x.target.value.length),m&&m(x)),"_handleChange");return C("div",{className:Z,"data-qa":D,children:[q({label:S,id:p,required:d,inline:i}),v({description:F,state:u}),C("div",{className:"a-input__wrapper",children:[!!a&&t(_,{name:a}),!!r&&t("div",{className:"a-input__addon",children:r}),t("input",{ref:w,type:b,value:s,name:j,id:p,disabled:I,readOnly:E,required:d,maxLength:l,onChange:$,...g}),!!n&&!a&&t(_,{name:n}),!!e&&t("div",{className:"a-input__addon",children:e})]}),B({charCounter:T,characterCount:s?s.length:A,maxLength:l})]})},"TextField2"));N.defaultProps={type:"text"};const W=N;export{W as T,N as a};
//# sourceMappingURL=TextField-0423e53d.js.map
