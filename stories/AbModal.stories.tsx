import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { AbModal } from '../src';

export default {
  title: 'Modal',
  component: AbModal,
} as ComponentMeta<typeof AbModal>;

const Template: Story<typeof AbModal> = (args) => <AbModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: 'Title',
  children: 'Sample content',
};
