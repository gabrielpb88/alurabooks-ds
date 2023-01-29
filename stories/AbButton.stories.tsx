import { Meta, Story } from '@storybook/react';
import { AbButton } from '../src';

const meta: Meta = {
  title: 'Button',
  component: AbButton,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <AbButton>Clique aqui!</AbButton>;

export const Primary = Template.bind({});
