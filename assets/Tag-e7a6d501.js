var P=Object.defineProperty;var n=(r,e)=>P(r,"name",{value:e,configurable:!0});import{R as k,r as R}from"./index-d23035ce.js";import{c as v}from"./dom.utils-1db2b487.js";import{I as i}from"./Icon-884564ea.js";import{a as C,F as E,j as a}from"./jsx-runtime-bb315772.js";function F({label:r,isToggle:e,active:s,iconLeft:c,removable:u,name:t,qa:p,onClick:o,ariaLabelDelete:b}){const[m,_]=k.useState(s),l=u&&!e,f=s===!0||s===!1?s:m,d=n(x=>(e&&_(!m),(e||l)&&o&&o(x)),"handleClick"),h=e?"button":"div",N=v({"m-tag":!0,"is-clickable":!!l}),j={name:t,onClick:()=>d(t),"aria-pressed":f};return R.exports.createElement(h,{className:N,"data-qa":p,...e?j:{}},C(E,{children:[c&&a("div",{className:"m-tag__icon",children:a(i,{name:c})}),a("div",{className:"m-tag__label",children:r}),l?a("button",{className:"m-tag__button",name:`${t}-delete`,onClick:()=>d(`${t}-delete`),"aria-label":b,children:a(i,{name:"remove"})}):null]}))}n(F,"Tag");F.defaultProps={ariaLabelDelete:"Verwijderen"};export{F as T};
//# sourceMappingURL=Tag-e7a6d501.js.map