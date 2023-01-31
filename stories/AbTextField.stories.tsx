import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import AbTextField from '../src/components/AbTextField';

export default {
  title: 'TextField',
  component: AbTextField,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbTextField>;

const Template: Story<typeof AbTextField> = () => (
  <>
    <AbTextField
      label="E-mail"
      placeholder="email@email.com"
      inputType="email"
    />
    <AbTextField label="Date" inputType="date" />
    <AbTextField
      label="Name"
      placeholder="First name, lastname"
      inputType="text"
    />
    <AbTextField
      label="Password"
      placeholder="*********"
      inputType="password"
    />
  </>
);
export const Default = Template.bind({});
