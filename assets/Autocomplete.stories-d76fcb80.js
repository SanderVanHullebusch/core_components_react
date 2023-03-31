var K=Object.defineProperty;var r=(f,y)=>K(f,"name",{value:y,configurable:!0});import{Q as q}from"./stories.settings-7ac24d87.js";import{r as u,R as B}from"./index-d23035ce.js";import{a as G}from"./TextField-03003af6.js";import"./TextArea-7d8913fd.js";import"./DefinitionList-850b66f5.js";import{F as S}from"./FunctionalList-3d217ebd.js";import{j as i}from"./jsx-runtime-bb315772.js";import{L as I}from"./ListItem-2dc9bc56.js";import"./Avatar-f56fc850.js";import"./Checkbox-2e093fda.js";import{F as H}from"./Flyout-2219970d.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./dom.utils-1db2b487.js";import"./layout.settings-9902fce9.js";import"./Icon-26da32f2.js";import"./settings-4d2c475c.js";import"./log.utils-f56af116.js";import"./input.renders-556c48d1.js";import"./index-8eee599f.js";function _({id:f,label:y,items:a,name:m,inputValue:d,value:o,onInputChange:v,onChange:h,noResultsText:F,qa:V}){const[C,p]=u.exports.useState(!1),[l,k]=u.exports.useState(a),[E,L]=u.exports.useState(d||""),[D,R]=u.exports.useState(o||""),[n,g]=u.exports.useState(-1),s=d||d===""?d:E,b=o||o===""?o:D,x=B.useRef(null);u.exports.useEffect(()=>{o&&w(o,!0)},[o]),u.exports.useEffect(()=>{k((a||[]).filter(e=>{var t;return s?(t=e.label)==null?void 0:t.toLowerCase().includes(s.toLowerCase()):!0}))},[s]),u.exports.useEffect(()=>{if(x.current){const t=x.current.querySelector(`.a-list__item:nth-child(${n+1})`);t==null||t.scrollIntoView({block:"nearest",inline:"nearest"})}},[n]);const O=r(e=>{p(e)},"handleStateChange"),A=r(()=>{p(!1),g(-1)},"closeFlyout"),T=r(e=>{L(e),p(!0),b&&!e&&(R(""),h&&h("",m)),v&&v(e,m)},"handleInput"),w=r((e,t=!1)=>{if(o!==""&&(!o||o===e)){const c=a==null?void 0:a.find(j=>j.value===e);T((c==null?void 0:c.label)||""),R((c==null?void 0:c.value)||""),A()}!t&&h&&h(e,m)},"selectValue"),P=r(()=>{const e=a==null?void 0:a.find(t=>t.value===b);e&&(s!=null&&s.length)&&e.label!==s&&T(e.label),A()},"setValueBack"),M=r(()=>{const e=l&&l[n];e&&w(e.value)},"onEnter");return i(H,{scrollable:!0,hasPadding:!1,qa:V,trigger:i(G,{id:f,name:m,label:y,onBlur:P,value:s,onChange:e=>T(e.target.value),role:"combobox","aria-autocomplete":"list","aria-haspopup":"true","aria-expanded":C,onKeyDown:r(e=>{const t=(l==null?void 0:l.length)||0;switch(e.key){case"ArrowDown":return g(n===-1?0:(n+1)%t),p(!0);case"ArrowUp":return g(n===-1||n-1<0?t-1:n-1),p(!0);case"Enter":return M();case"Escape":return A()}},"handleKeyDown")}),ref:x,open:C,onStateChange:O,children:l&&l.length?i(S,{lined:!0,onItemClick:w,children:l.map((e,t)=>i(I,{id:e.value,tabIndex:-1,highlighted:t===n,onMouseDown:c=>c.preventDefault(),active:e.value===b,name:e.value,link:{href:""},children:e.label},e.value))}):i(S,{lined:!0,children:i(I,{id:"aui-autocomplete-no-results",children:i("small",{children:F})})})})}r(_,"Autocomplete");_.defaultProps={id:"aui-autocomplete",noResultsText:"Geen resultaten"};const pe={title:"React/Molecules/Autocomplete",component:_,parameters:{docs:{description:{component:"The `Autocomplete` component is a normal text input enhanced by a pannel of filtered suggestions."}}},argTypes:{name:{control:{type:"text"},defaultValue:"aui-autocomplete",table:{type:{summary:"string"}},description:"The `name` prop; is set on the `input` HTML element of the `Autocomplete` component. It is also returned by `onChange` and `onInputChange` to identify the component."},items:{control:{type:"array"},defaultValue:[{label:"Acadia",value:"1"},{label:"American Samoa",value:"2"},{label:"Arches",value:"3"},{label:"Canyonlands",value:"4"},{label:"Capitol Reef",value:"5"}],table:{type:{summary:"array"},defaultValue:{summary:"[]"}},description:'The `items` prop control the results from the dropdown in the `Autocomplete` component. These `items` are objects in the format of `{ label: "", value: "" }`.'},label:{control:{type:"text"},defaultValue:"National Parcs",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The label of the `Autocomplete` component."},noResultsText:{control:{type:"text"},defaultValue:"Sorry, niet gevonden",table:{type:{summary:"string"},defaultValue:{summary:"Geen resultaten"}},description:"The text when no item match the provided search term."},inputValue:{table:{type:{summary:"string"}},description:"The `inputValue` prop controls the value of the `Autocomplete` input field. This prop makes the `Autocomplete` a controlled component and should be used together with `onInputChange`."},value:{table:{type:{summary:"string"}},description:"The `value` prop controls the value of the selected `Autocomplete` item. This prop makes the `Autocomplete` a controlled component and should be used together with `onChange`."},id:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"aui-autocomplete"}},description:"The `id` prop; set on the `input` HTML element of the `Autocomplete` component."},onChange:{control:{type:"function"},table:{type:{summary:" function"}},action:"onChange",description:"Function triggered when selecting an option from the `Autocomplete` dropdown. The first parameter of this function is the selected value, the second parameter is the `name` of the `Autocomplete` component."},onInputChange:{control:{type:"function"},table:{type:{summary:" function"}},action:"onInputChange",description:"Function triggered when the input field value changes. The first parameter of this function is the input, the second parameter is the given component name."},qa:q}},me="",de=["autocomplete"];export{de as __namedExportsOrder,me as autocomplete,pe as default};
//# sourceMappingURL=Autocomplete.stories-d76fcb80.js.map
