var p=Object.defineProperty;var t=(a,r)=>p(a,"name",{value:r,configurable:!0});import{c as d}from"./dom.utils-bd8c7a66.js";import{D as f}from"./settings-2cad0569.js";import{S as u,D as _}from"./layout.settings-9902fce9.js";import{I}from"./Icon-859096df.js";import{j as s}from"./jsx-runtime-bb315772.js";const D=t(a=>s("span",{className:"a-avatar__letter",children:a}),"letterAvatar"),E=t((a,r)=>s("img",{src:`${a}`,alt:`${r}`}),"imageAvatar"),N=t((a,r)=>s("span",{className:"a-avatar__icon","aria-label":r,role:"img",children:s(I,{name:a})}),"iconAvatar");function b({className:a,letter:r,rounded:o,size:e,ariaLabel:i,image:n,imageAlt:c,icon:m,qa:l}){const A=t(()=>n?E(n,c||""):r?D(r.slice(0,3)):N(m||f,i||""),"renderContent"),v=d({"a-avatar":!0,"a-avatar--primary":!!r,"a-avatar--rounded":!!o,[`a-avatar--${u[e||_]}`]:!!e,[a||""]:!!a});return s("div",{className:v,"data-qa":l,children:A()})}t(b,"Avatar");b.defaultProps={ariaLabel:"Gebruiker",imageAlt:"Avatar"};export{b as A};
//# sourceMappingURL=Avatar-4201f388.js.map
