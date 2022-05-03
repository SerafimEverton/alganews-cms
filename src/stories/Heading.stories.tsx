import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from '../Components/Typography/Heading';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // // argTypes: {
  // //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Heading>;

///////////////////////////////////////////

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({})
Heading1.args = {

    level: 1,
    children: 'Heading 1'
}