import{Q as s,j as l}from"./stories.settings-7040e2b8.js";import{A as t}from"./Avatar-6ff17722.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./dom.utils-26b7419a.js";import"./settings-577c54c5.js";import"./layout.settings-581780cb.js";import"./Icon-a4a94a86.js";import"./log.utils-973a80c9.js";t.displayName="Avatar";const b={title:"React/Atoms/Avatar",component:t,parameters:{docs:{description:{component:"Avatars are a special type of add-on or stand-alone visualisation meant to represent a user. Avatars can be interactive, and take on the form of the button-like call to action. They can also be an actual part (or add-on) of a button. Or they can function as a purely ‘decorative’ callback to a user."}}},args:{image:"https://placedog.net/100/100?r",letter:"NT",icon:"single-neutral",rounded:!1,size:"",ariaLabel:"Gebruiker",imageAlt:"Avatar"},argTypes:{image:{control:{type:"text"},table:{type:{summary:"url"},defaultValue:{summary:""}},description:"The `image` prop will allow to display an authenticated user in the avatar. It will override the `letter` prop if provided."},letter:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `letter` prop will allow an authenticated user to display their initials (will display up to 3 characters. Extra characters will be ignored). If an image is provided, it will override the letter parameter."},icon:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"single-neutral"}},options:["single-neutral","social-media-snapchat","house-chimney","bicycle","flash"],description:"The `icon` prop displays an icon in the avatar for guest users. Authenticated users will have this replaced with their initials, or an image, if they provided one."},rounded:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Adds a class to the underlying HTML to change the style to rounded."},size:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:""}},options:["","small","medium","large"],description:"Sets the size for the component. Can be omitted for `medium`."},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Gebruiker"}},description:"The `ariaLabel` describes an accessible name for the icon inside the `Avatar` component."},imageAlt:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Avatar"}},description:"Image alt text for the provided image."},qa:s}},n=i=>l(t,{...i}),e=n.bind({});var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"args => <Avatar {...args} />",...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const v=["avatar"];export{v as __namedExportsOrder,e as avatar,b as default};
//# sourceMappingURL=Avatar.stories-599f4ad9.js.map
