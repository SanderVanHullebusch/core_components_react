import{a as h,j as r,Q as f}from"./stories.settings-7040e2b8.js";import{c as v}from"./dom.utils-26b7419a.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";function t({label:e,labelId:s,showLabel:o,percentage:l,ariaValueNow:u,minValue:p,maxValue:c,large:d,qa:b}){const y=u||l,g=v({"a-progress":!0,"a-progress--l":!!d});return h("div",{className:g,"data-qa":b,children:[o?r("div",{id:s,className:"a-progress__label",children:e}):null,r("div",{className:"a-progress__inner",children:r("div",{className:"a-progress__bar",role:"progressbar","aria-valuenow":y,"aria-valuemin":p,"aria-valuemax":c,style:{width:`${l}%`},...o?{"aria-labelledby":s}:{"aria-label":e}})})]})}t.defaultProps={percentage:0,minValue:0,maxValue:100,showLabel:!0,labelId:"aui-progress-label",size:""};t.displayName="ProgressBar";const B={title:"React/Atoms/ProgressBar",component:t,parameters:{docs:{description:{component:"A progress indicator communicates to the user that they have to wait for a page, element of functionality to complete loading or processing a task before they can access it."}}},args:{percentage:10,large:!1,label:"Downloading...",minValue:0,maxValue:100,showLabel:!0},argTypes:{percentage:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:0}},description:"Current width in percentage; value from 0 to 100."},large:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Set the size of the bar to `large`."},label:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label of the progress bar."},ariaValueNow:{control:{type:"number"},table:{type:{summary:"number"}},description:"Use this prop to override the `aria-valuenow`, if not set the `percentage` prop is used."},minValue:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:0}},description:"Use this prop to set the `aria-valuemin` attribute."},maxValue:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:100}},description:"Use this prop to set the `aria-valuemax` attribute."},showLabel:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},description:"Set to false to hide the label (by replacing it with an `aria-label`)."},labelId:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"aui-progress-label"}},description:"Id of the label, used by `aria-labelledby`."},qa:f}},V=e=>r(t,{...e}),a=V.bind({});var i,n,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const N=["progressBar"];export{N as __namedExportsOrder,B as default,a as progressBar};
//# sourceMappingURL=ProgressBar.stories-a0405c39.js.map
