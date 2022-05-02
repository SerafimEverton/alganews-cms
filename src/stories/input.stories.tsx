import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../Components/input/input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // // argTypes: {
  // //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Input>;

///////////////////////////////////////////

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WhithPlaceholder = Template.bind({})

WhithPlaceholder.args= {
    placeholder: 'e.g.: Joe Doe'

}

export const WhithLabelAndPlaceholder = Template.bind({})

WhithLabelAndPlaceholder.args= {
    label: 'Name',
    placeholder:'e.g.: Joe Doe'

}

export const WhithLabelAndContent = Template.bind({})

WhithLabelAndContent.args= {
    label: 'Name',
    placeholder: 'e.g.: Joe Doe',
    value: 'Joe Doe'
}

export const WhithContent = Template.bind({})

WhithContent.args= {
    value: 'Joe Doe'
}