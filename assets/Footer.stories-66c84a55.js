var b=Object.defineProperty;var o=(e,a)=>b(e,"name",{value:a,configurable:!0});import{R as d}from"./index-d23035ce.js";import{r as f}from"./render.utils-c5585470.js";import{B as u}from"./Button-3a1fb9fa.js";import{a as n,j as i}from"./jsx-runtime-bb315772.js";import{Q as y}from"./stories.settings-7ac24d87.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./layout.settings-9902fce9.js";import"./Avatar-4201f388.js";import"./dom.utils-bd8c7a66.js";import"./settings-2cad0569.js";import"./Icon-859096df.js";import"./log.utils-f56af116.js";import"./Spinner-74f1217c.js";function l({backToTop:e,backToTopAriaLabel:a,items:t,qa:s}){const p=o(()=>{window.scrollTo({top:0,behavior:"smooth"})},"scrollToTop");return n("footer",{className:"o-footer","data-qa":s,children:[i("span",{className:"o-footer__label",children:o(()=>t==null?void 0:t.map((r,c)=>{const m=f(r),h=t.length>1&&c!==t.length-1;return n(d.Fragment,{children:[m,h?" | ":""]},r.label)}),"renderItems")()}),e&&i(u,{className:"o-footer__button a-button--secondary",addOn:{type:"icon",iconProps:{name:"arrow-up-1"}},onClick:p,ariaLabel:a})]})}o(l,"Footer");l.defaultProps={items:[],backToTopAriaLabel:"Terug naar omhoog"};const C={title:"React/Organisms/Footer",component:l,parameters:{docs:{description:{component:`The footer component provides an important landmark for the user at the bottom of a page. In the footer you can find information that is relevant to the entire application. Normally it contains a copyright notice together with three links:

• Privacy: a link to the application’s privacy statement.

• Accessibility: a link to the application’s accessibility statement.

• Cookie settings (optional): a link to adjust cookie settings that were previously chosen.

Only use the footer at the bottom of a page. Also, do not include content in the footer that is only relevant to the page and not to the entire application.`}}},args:{backToTop:!1,backToTopAriaLabel:"Ga naar boven",items:[{label:"© stad Antwerpen"},{label:"Privacy",href:"#"},{label:"Toegankelijkheid",href:"#"},{label:"Cookie instellingen",href:"#"}]},argTypes:{backToTop:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `backToTop` prop controls whether the footer gets a button which allows the user to scoll back to the top of the page. Make sure to provide a suitable aria-label for it using the `ariaLabel` prop."},backToTopAriaLabel:{control:{type:"text"},if:{arg:"backToTop"},table:{type:{summary:"string"},defaultValue:{summary:"Terug naar omhoog"}},description:"The `ariaLabel` prop provides the back to top button with a suitable aria-label attribute."},items:{control:{type:"array"},table:{type:{summary:"array"},defaultValue:{summary:""}},description:'The `items` prop contains the content that should be placed in the footer. This prop expects an array of items in the following format `{ label: "", target: "" }` where `target` can be empty.'},qa:y}},I="",V=["footer"];export{V as __namedExportsOrder,C as default,I as footer};
//# sourceMappingURL=Footer.stories-66c84a55.js.map
