import { ComponentStory, ComponentMeta } from '@storybook/react';

import ValueDescriptor from '../Components/ValueDescriptor/ValueDescriptor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // // argTypes: {
  // //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ValueDescriptor>;

///////////////////////////////////////////

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ValueDescriptorProps> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
    description: 'Ganhos na semana',
    value: 560322.02
}

export const DefaultCurrency
 = Template.bind({})
DefaultCurrency.args = {
    description: 'Ganhos na semana',
    value: 560322.02
}

export const Primary = Template.bind({})
Primary.args = {
    description: 'Ganhos na semana',
    value: 560322.02
}

export const PrimaryCurrency
 = Template.bind({})
PrimaryCurrency.args = {
    description: 'Ganhos na semana',
    value: 560322.02
}

