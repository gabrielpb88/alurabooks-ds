import React from 'react';
import { AbCard } from '../src';
import { Story } from '@storybook/react';

export default {
  title: 'Card',
  component: AbCard,
};

const Template: Story<typeof AbCard> = (props) => <AbCard {...props} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Card Content',
};
