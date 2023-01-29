import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbButton, Props } from '../src';

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

const Template: Story<Props> = args => <AbButton />;

export const Primary = Template.bind({})