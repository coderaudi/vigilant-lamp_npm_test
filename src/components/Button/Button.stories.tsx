import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CCMButton from "./Button.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ccm-components/CCMButton",
    component: CCMButton,
} as ComponentMeta<typeof CCMButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CCMButton> = (args) => <CCMButton {...args} />;

export const PrimaryButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryButton.args = {
    title: "Primary Button",
    variant: "primary"
};

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
    title: "Primary Link",
    variant: 'primaryLink'
};

export const SecondaryLink = Template.bind({});
SecondaryLink.args = {
    title: "Secondary Link",
    variant: 'secondaryLink'
};

export const Outlined = Template.bind({});
Outlined.args = {
    title: "Outlined",
    variant: 'outlined',
    bgColor: 'transparent',
    outlineColor: 'red',
    titleColor: 'red'
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
    title: "Disabled button",
    disabled: true
};

export const CustomBgColorButton = Template.bind({});
CustomBgColorButton.args = {
    title: "Custom bg color button",
    bgColor: 'red'
};

export const CustomButton = Template.bind({});
CustomButton.args = {
    title: "Custom button",
    style: {
        borderRadius: '10px',
        textTransform: 'uppercase',
        height: '40px'
    }
};