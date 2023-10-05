import { Copyright } from '../../atoms/copyright';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Image from './Image';

export default {
  title: 'React/Molecules/Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          'Use this component to style and visualise an image. Complement the image itself with a `Copyright` component whenever you are legally required to do so.'
      }
    }
  },
  args: {
    alt: '',
    src: 'https://placedog.net/400/300?r',
    copyrighted: false,
    children: <Copyright sign="©" label="All rights reserved" link="#" />
  },
  argTypes: {
    alt: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'An image which is not purely decorative always comes with a text alternative, or alt-text. When an image does not require an alt text, use an empty alt.'
    },
    src: {
      control: { type: 'text' },
      table: {
        type: { summary: 'url' },
        defaulValue: { summary: '' }
      },
      description:
        'The `src` prop expects a url as its value. The url can be the relative or absolute path to an image.'
    },
    copyrighted: {
      control: { type: 'boolean' },
      description:
        'Control whether the example should be of a copyrighted image or not. An image can have a Copyright component as its child.'
    },
    children: {
      control: { type: 'object' },
      if: { arg: 'copyrighted', truthy: true },
      component: Copyright,
      table: {
        disable: true
      },
      description: ''
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => <Image {...args} />;
export const image = Template.bind({});
