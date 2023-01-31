import React from 'react';
import { Story } from '@storybook/react';
import { AbTag } from '../src/components/AbTag';

export default {
  title: 'Tag',
  component: AbTag,
};

const Template: Story<typeof AbTag> = (props) => <AbTag {...props} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Android',
};
