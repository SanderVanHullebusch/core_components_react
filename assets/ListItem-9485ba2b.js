var x=Object.defineProperty;var t=(e,s)=>x(e,"name",{value:s,configurable:!0});import{c as C}from"./dom.utils-bd8c7a66.js";import{I as i}from"./Icon-859096df.js";import{j as a,a as N}from"./jsx-runtime-bb315772.js";function D({name:e,link:s,active:n,highlighted:o,iconLeft:r,iconRight:m,id:f,children:h,onClick:c,onMouseDown:l,tabIndex:p,qa:_}){const I=`${s&&(s.href||s.href==="")?"a":"span"}`,d=C({"a-list__content":!0,"is-highlighted":!!o,"is-active":!!n});return a("li",{className:"a-list__item",id:f,"data-qa":_,children:N(I,{className:d,onClick:t(u=>{c&&(u.preventDefault(),c(e))},"onLinkClick"),onMouseDown:l,tabIndex:p,...s&&(s.href||s.href==="")?{href:s.href}:{},children:[r&&a(i,{name:r}),a("span",{className:"a-list__text",children:h}),m&&a(i,{name:m})]})})}t(D,"ListItem");export{D as L};
//# sourceMappingURL=ListItem-9485ba2b.js.map
