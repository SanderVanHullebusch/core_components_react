import Label from './Label';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Atoms/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          'A label is a small alphabetical (letters only) label component that accompanies other elements, such as text in tables, lists, etc. and is primarily used to indicate a status associated with the accompanying element.'
      }
    }
  },
  args: {
    children: 'default label'
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: 'Sets the type for the component. Can be omitted for default.'
    },
    children: {
      control: 'text',
      table: { type: { summary: 'string' } },
      description: 'Sets the label text.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => <Label {...args} />;
export const label = Template.bind({});
