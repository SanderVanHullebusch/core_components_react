import{a as o,j as e,F as u,Q as k}from"./stories.settings-7040e2b8.js";import{r as V}from"./index-61bf1805.js";import{l as I}from"./render.utils-2b079e3b.js";import"./_commonjsHelpers-de833af9.js";import"./layout.settings-581780cb.js";import"./Avatar-0467fc58.js";import"./dom.utils-26b7419a.js";import"./settings-2256c0f5.js";import"./Icon-b88d001d.js";import"./log.utils-973a80c9.js";import"./Spinner-d608c31b.js";function r({ariaLabel:s,checked:t,disabled:y,id:n,internalIOLabels:w,label:i,labelId:c,onClick:l,qa:g,statusLabelOff:_,statusLabelOn:L,statusLabelSide:d}){const[h,S]=V.useState(!!t),O=t===!0||t===!1?!!t:h,x=v=>{S(!h),l&&typeof l=="function"&&l(v)},m=o(u,{children:[e("div",{className:"a-switch__label a-switch__label--on","aria-hidden":"true",children:L}),e("div",{className:"a-switch__label a-switch__label--off","aria-hidden":"true",children:_})]});return I(o("button",{id:n,"data-qa":g,className:"a-switch",role:"switch","aria-checked":O,"aria-label":i?void 0:s,"aria-labelledby":i?c:void 0,disabled:y,onClick:x,children:[d==="left"&&m,e("div",{className:"a-switch__toggle","aria-hidden":"true",children:w&&o(u,{children:[e("div",{className:"a-switch__toggle-label a-switch__toggle-label--on","aria-hidden":"true",children:"i"}),e("div",{className:"a-switch__toggle-label a-switch__toggle-label--off","aria-hidden":"true",children:"o"})]})}),d==="right"&&m]}),i,n,c)}r.defaultProps={disabled:!1,internalIOLabels:!1,labelId:"aui-switch-label",statusLabelOff:"Uit",statusLabelOn:"Aan",statusLabelSide:""};const Q={title:"React/Atoms/Switch",component:r,parameters:{docs:{description:{component:"Use a switch when a user needs to toggle a single item on or off, in order to immediately activate or deactivate something."}}},args:{statusLabelOn:"Aan",statusLabelOff:"Uit",statusLabelSide:"",internalIOLabels:!1,disabled:!1,label:"Switch me!",labelId:"aui-switch-label",id:"aui-switch"},argTypes:{statusLabelOn:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Aan"}},description:"Label shown on the side of the switch when its checked."},statusLabelOff:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Uit"}},description:"Label shown on the side of the switch when its unchecked."},statusLabelSide:{control:{type:"select"},options:["","left","right"],table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Side on which the status label will be shown. Leave empty to hide the status labels."},ariaLabel:{control:{type:"text"},table:{type:{summary:"text"},defaultValue:{summary:""}},description:"Sets the `aria-label` attribute on the rendered HTML button."},internalIOLabels:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Controls if additional I|O labels will be shown inside the `Switch` component."},checked:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Checked state. When this prop is set, the `Switch` becomes a controlled component; use it together with `onClick`."},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Disables the component interaction."},onClick:{control:{type:"function"},table:{type:{summary:"function"}},action:"clicked",description:"Function that is triggered when the `Switch` is clicked, returns a `React.MouseEvent` as first argument."},label:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label for the switch."},labelId:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"aui-switch-label"}},description:"ID of the label of the `Switch` component."},id:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"aui-switch"}},description:"ID of `Switch` component."},qa:k}},C=s=>e(r,{...s}),a=C.bind({});var p,b,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Switch {...args} />",...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const W=["switch_"];export{W as __namedExportsOrder,Q as default,a as switch_};
//# sourceMappingURL=Switch.stories-cf5542ad.js.map
