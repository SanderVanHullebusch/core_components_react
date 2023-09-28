var r=Object.defineProperty;var n=(e,t)=>r(e,"name",{value:t,configurable:!0});import{T as o}from"./Tag-595115aa.js";import{Q as i}from"./stories.settings-7ac24d87.js";import{j as l}from"./jsx-runtime-bb315772.js";import{u as s}from"./hooks-b9a57b8f.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./dom.utils-bd8c7a66.js";import"./Icon-859096df.js";import"./settings-2cad0569.js";import"./log.utils-f56af116.js";const w={title:"React/Molecules/Tag",component:o,parameters:{storySource:{source:`import Tag from './Tag';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'React/Molecules/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Tags are components that help filter content to the desired relevance.'
      }
    }
  },
  args: {
    label: 'I am a Tag!',
    isToggle: false,
    active: false,
    iconLeft: 'hammer-wench',
    removable: false,
    name: 'aui-tag',
    ariaLabelDelete: 'Delete'
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The \`label\` describes the \`Tag\` component.'
    },

    isToggle: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The \`isToggle\` prop turns the Tag component into a toggle tag. A toggle tag always remains visible but can be toggled on or off. Toggle tags can never include a trailing icon, as they cannot be removed.'
    },
    active: {
      control: { type: 'boolean' },
      if: { arg: 'isToggle', truthy: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'This prop sets a toggle \`Tag\` component as \`active\`. This prop makes the \`Tag\` a controlled component and should be used together with \`onClick\`.'
    },
    iconLeft: {
      control: { type: 'select' },
      options: [
        '',
        'tags',
        'tags-double',
        'hammer-wench',
        'headphones-customer-support-human',
        'professional-tool-dropbox'
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'A Tag component can include a leading icon.'
    },
    removable: {
      control: { type: 'boolean' },
      if: { arg: 'isToggle', truthy: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'A Tag component can include a trailing icon. The use of the trailing icon is reserved for an interactive icon action to remove the tag itself.'
    },
    onClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onClick',
      description:
        'Function triggered when the tag is clicked. First parameter of this function is of type \`(React).MouseEvent\`. Only available on tags with \`isToggle\` or \`removable\` enabled.'
    },
    name: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description:
        'The \`name\` prop is set on the button if the \`isToggle\` prop is true. It is also used for the name on the remove button (postfixed with \`-delete\`).'
    },
    ariaLabelDelete: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Verwijderen' }
      },
      description: 'The \`aria-label\` for the delete icon button on removable tags.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [, updateArgs] = useArgs();
  return (
    <Tag
      {...args}
      onClick={(name) => {
        args.onClick(name);
        updateArgs({ ...args, active: args.isToggle ? !args.active : args.active });
      }}
    />
  );
};

export const tag = Template.bind({});
`,locationsMap:{tag:{startLoc:{col:17,line:108},endLoc:{col:1,line:119},startBody:{col:17,line:108},endBody:{col:1,line:119}}}},docs:{description:{component:"Tags are components that help filter content to the desired relevance."}}},args:{label:"I am a Tag!",isToggle:!1,active:!1,iconLeft:"hammer-wench",removable:!1,name:"aui-tag",ariaLabelDelete:"Delete"},argTypes:{label:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `label` describes the `Tag` component."},isToggle:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `isToggle` prop turns the Tag component into a toggle tag. A toggle tag always remains visible but can be toggled on or off. Toggle tags can never include a trailing icon, as they cannot be removed."},active:{control:{type:"boolean"},if:{arg:"isToggle",truthy:!0},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"This prop sets a toggle `Tag` component as `active`. This prop makes the `Tag` a controlled component and should be used together with `onClick`."},iconLeft:{control:{type:"select"},options:["","tags","tags-double","hammer-wench","headphones-customer-support-human","professional-tool-dropbox"],table:{type:{summary:"string"},defaultValue:{summary:""}},description:"A Tag component can include a leading icon."},removable:{control:{type:"boolean"},if:{arg:"isToggle",truthy:!1},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"A Tag component can include a trailing icon. The use of the trailing icon is reserved for an interactive icon action to remove the tag itself."},onClick:{control:{type:"function"},table:{type:{summary:"function"}},action:"onClick",description:"Function triggered when the tag is clicked. First parameter of this function is of type `(React).MouseEvent`. Only available on tags with `isToggle` or `removable` enabled."},name:{control:{type:"text"},table:{type:{summary:"string"}},description:"The `name` prop is set on the button if the `isToggle` prop is true. It is also used for the name on the remove button (postfixed with `-delete`)."},ariaLabelDelete:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Verwijderen"}},description:"The `aria-label` for the delete icon button on removable tags."},qa:i}},c=n(e=>{const[,t]=s();return l(o,{...e,onClick:a=>{e.onClick(a),t({...e,active:e.isToggle?!e.active:e.active})}})},"Template"),k=c.bind({}),x=["tag"];export{x as __namedExportsOrder,w as default,k as tag};
//# sourceMappingURL=Tag.stories-4be54ebb.js.map
