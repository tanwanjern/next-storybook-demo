import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Atom/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: '#f3f3f3',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: '#ffb0b0',
  children: 'Secondary Button',
};