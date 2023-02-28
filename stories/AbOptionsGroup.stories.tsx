import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { AbOptionsGroup, OptionsGroupProps } from '../src';

export default {
  title: 'OptionsGroup',
  component: AbOptionsGroup,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbOptionsGroup>;

const Template: Story<typeof AbOptionsGroup> = (args) => (
  <AbOptionsGroup {...args} />
);
export const Default = Template.bind({});
Default.args = {
  options: [
    {
      id: 1,
      title: 'E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      title: 'Impresso',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      title: 'Impresso + E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
  ],
} as OptionsGroupProps;
