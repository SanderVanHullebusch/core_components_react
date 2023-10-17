import{a as i,j as a,Q as b}from"./stories.settings-7040e2b8.js";import{I as g}from"./Image-5a546b0c.js";import{a as y}from"./render.utils-72fc6f3a.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./dom.utils-26b7419a.js";import"./log.utils-973a80c9.js";import"./layout.settings-581780cb.js";import"./Avatar-6ff17722.js";import"./settings-577c54c5.js";import"./Icon-a4a94a86.js";import"./Spinner-63ac2c73.js";function r({title:e,subTitle:s,description:n,children:l,image:c,link:o,qa:u}){const h=(e==null?void 0:e.tag)||"h4";return i("div",{className:"m-card","data-qa":u,children:[!!c&&a("div",{className:"m-card__image",children:a(g,{...c})}),i("div",{className:"m-card__body",children:[!!(e!=null&&e.label)&&a(h,{id:`${e==null?void 0:e.id}`,className:`u-margin-bottom-xs ${e.className??""}`,children:e.label}),!!s&&a("p",{className:"small u-text-bold u-margin-bottom-xs",children:s}),!!n&&a("p",{className:"u-margin-bottom",children:n}),!!o&&a("p",{className:"u-text-right",children:y({...o,href:o.href??"#"},"arrow-right-1",{className:"has-icon-right","aria-labelledby":e==null?void 0:e.id})}),l]})]})}r.displayName="Card";const L={title:"React/Molecules/Card",component:r,parameters:{docs:{description:{component:"Use cards to display content and actions on a single topic as a group. Elements like text and images are placed on them in a way that clearly indicates hierarchy."}}},args:{image:{src:"https://placedog.net/1000/300?r",alt:"A random dog"},title:{label:"Card Title"},subTitle:"May 4th 2021, 12:34",description:"Arma virumque cano, Troiae qui primus ab oris Italiam, fato profugus, Laviniaque venit litora, multum ille et terris iactatus et alto vi superum saevae memorem Iunonis ob iram. Multa quoque et bello passus, dum conderet urbem, inferretque deos Latio, genus unde Latinum, Albanique patres, atque altae moenia Romae.",link:{label:"link label",href:"https://www.google.be",target:"_blank"}},argTypes:{image:{table:{type:{summary:"object"}},control:{type:"object"},description:"The `image` prop sets the image, for the card component. It can have any of the props of an `Image` component passed as an attribute (use `children` prop to pass optional `Copyright`)."},title:{table:{type:{summary:"object"}},control:{type:"object"},description:"The `title` prop sets the title for the card component. It has the following format `{ label: 'string', tag: 'h1', id: 'title ID', className: 'h3' }` (`tag` can be omitted for an 'h5' tag)."},subTitle:{table:{type:{summary:"string"}},control:{type:"text"},description:"The `subTitle` prop sets the subtitle for the card component. In most cases this should be a date or date and time format."},description:{table:{type:{summary:"string"}},control:{type:"text"},description:"The `description` prop sets the text content for the card component."},link:{table:{type:{summary:"object"}},control:{type:"object"},description:"The `link` prop sets the footer action for the card component."},children:{control:{type:!1},table:{type:{summary:"ReactNode"}},description:"React Node(s) inside the card, can be used to have complete custom card content."},qa:b}},f=e=>a(r,{...e}),t=f.bind({});var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Card {...args} />",...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const A=["card"];export{A as __namedExportsOrder,t as card,L as default};
//# sourceMappingURL=Card.stories-7ec51c92.js.map
