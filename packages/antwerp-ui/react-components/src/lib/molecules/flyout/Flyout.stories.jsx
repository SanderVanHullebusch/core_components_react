import Button from '../../atoms/button/Button';
import { Flyout } from './Flyout';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

Flyout.displayName = 'Flyout';

export default {
  title: 'React/Molecules/Flyout',
  component: Flyout,
  parameters: {
    docs: {
      description: {
        component:
          'A flyout is a contextual panel that floats over the page and is directly attached to the component that triggered it. It can be used to display additional (rich) information, navigation or contextual menus, suggested options or results, etc.'
      }
    }
  },
  args: {
    trigger: <Button>Open flyout</Button>,
    orientation: 'bottom-left',
    size: '',
    hasPadding: true,
    scrollable: true,
    children: 'Flyout content'
  },
  argTypes: {
    trigger: {
      table: {
        type: { summary: 'ReactNode' }
      },
      description: 'ReactNode that is the trigger for the flyout to open or close. Required to render the `Flyout`.'
    },
    orientation: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom-left' }
      },
      description:
        'The orientation attribute allows to re-orient the flyout to snap to either a right or/and top side of a triggering component.',
      options: ['', 'upper-left', 'upper-right', 'bottom-left', 'bottom-right']
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      description:
        'Flyouts can be used in 2 size variations. Medium (default) and small sizes both lock in the flyout to a predetermined maximum width.',
      options: ['', 'small', 'medium']
    },
    hasPadding: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      description:
        'By default a flyout will provide internal padding on all its sides, though this can be disabled to provide an edge-to-edge style for hosting lists.'
    },
    open: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      description: 'By using the `open` prop you can set the flyout to be open by default.'
    },
    scrollable: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      description: 'The scrollable attribute will add a scrollbar to the content of the flyout.'
    },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' }
      },
      description: 'React Node(s) inside the flyout content.'
    },
    onStateChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onStateChange',
      description:
        'Function that is triggered when the state of the flyout is changed to open or closed state. The first parameter is the new state.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => <Flyout {...args} />;
export const flyout = Template.bind({});
