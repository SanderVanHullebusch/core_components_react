var x=Object.defineProperty;var t=(s,a)=>x(s,"name",{value:a,configurable:!0});import{c as k}from"./dom.utils-1db2b487.js";import{r as c}from"./index-d23035ce.js";import{j as h}from"./jsx-runtime-bb315772.js";function u({onItemClick:s,type:a,ordered:i,flushed:o,lined:l,children:e,qa:n}){const m=k({"a-list":a!=="avatar"&&a!=="checkbox","a-list--flushed":!!o&&a!=="avatar"&&a!=="checkbox","a-list--lined":!!l,"a-avatar-list":a==="avatar","a-avatar-list--flushed":!!(a==="avatar"&&o),"a-checkbox-list":a==="checkbox","a-checkbox-list--flushed":!!(a==="checkbox"&&o)});return h(`${i?"ol":"ul"}`,{className:m,"data-qa":n,children:c.exports.Children.map(e||[],r=>c.exports.cloneElement(r,{key:r.props.id,onClick:r.props.onClick||s}))})}t(u,"FunctionalList");u.defaultProps={items:[]};export{u as F};
//# sourceMappingURL=FunctionalList-3d217ebd.js.map
