import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Spinner from './Spinner';

export default {
  title: 'React/Atoms/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          'A spinner communicates to the users that they have to wait for a page, element or functionality to complete loading before they can access it. '
      }
    }
  },
  args: {
    label: 'Wordt geladen...',
    showText: false,
    size: '',
    vertical: false
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Wordt geladen...' }
      },
      description: 'The `label` describes the spinner. This label is visible if `showText` is set to `true`.'
    },
    showText: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Controls whether the label should be used as a visual element or as a screen reader only element.'
    },
    size: {
      control: { type: 'select' },
      options: ['', 'small', 'medium', 'large'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Sets the size for the component. Can be omitted for medium.'
    },
    vertical: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Controls whether the component and its text should be stacked vertically.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => <Spinner {...args} />;
export const spinner = Template.bind({});
