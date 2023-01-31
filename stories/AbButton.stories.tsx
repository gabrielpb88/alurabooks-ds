import React from 'react';
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

const Template: Story<typeof AbButton> = (props) => <AbButton {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Ab Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Ab Secondary Button',
  variant: 'secondary',
};
