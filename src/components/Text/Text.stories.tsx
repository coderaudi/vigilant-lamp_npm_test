import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CCMText from './Text.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ccm-components/CCMText',
  component: CCMText,
} as ComponentMeta<typeof CCMText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CCMText> = (args) => (
  <CCMText {...args} />
);
export const Label = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Label.args = {
  variant: 'label',
  children: 'I am a label'
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: 'I am a caption'
};

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  children: 'I am a H1'
};

