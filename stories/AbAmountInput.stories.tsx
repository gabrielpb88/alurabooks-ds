import React, { useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import AbAmountInput from '../src/components/AbAmountInput';

export default {
  title: 'AmountInput',
  component: AbAmountInput,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbAmountInput>;

const Template: Story<typeof AbAmountInput> = () => {
  const [value, setValue] = useState(0);
  return <AbAmountInput onChange={setValue} value={value} />;
};

export const Default = Template.bind({});
