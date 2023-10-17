import{j as r,Q as m,a as l}from"./stories.settings-7040e2b8.js";import{c as h}from"./dom.utils-26b7419a.js";import{A as n}from"./AccordionTab-8a9fc381.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";function c({children:e=[],type:i,qa:d}){const p=h({"m-accordion":!0,"m-accordion--open":i==="open"});return r("div",{className:p,"data-qa":d,children:e})}n.displayName="AccordionTab";c.displayName="Accordion";const g={title:"React/Molecules/Accordion",component:c,parameters:{docs:{description:{component:"An accordion is a flexible control that allows for large chunks of information to be presented within a single page through progressive disclosure. It aims to reduce cognitive load and allows the user to expose or hide multiple blocks of information as they choose."}}},argTypes:{type:{control:{type:"select"},table:{type:{summary:"string"}},options:["","open"],description:"Set the type of the accordion component. An open accordion omits the outside borders."},children:{table:{type:{summary:"ReactNode | ReactNode[]"}},description:"Children of the `Accordion` component are `AccordionTab` components."},qa:m}},u=e=>l(c,{type:e.type,children:[r(n,{header:"Tab 1",children:"Content"}),r(n,{header:"Tab 2",children:"Content 2"})]}),o=u.bind({});var t,a,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return <Accordion type={args.type}>
      <AccordionTab header="Tab 1">Content</AccordionTab>
      <AccordionTab header="Tab 2">Content 2</AccordionTab>
    </Accordion>;
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const x=["accordion"];export{x as __namedExportsOrder,o as accordion,g as default};
//# sourceMappingURL=Accordion.stories-6f332a87.js.map
