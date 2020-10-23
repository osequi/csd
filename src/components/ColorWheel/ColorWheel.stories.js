import React from "react";
import ColorWheel from "./ColorWheel";

export default {
  component: ColorWheel,
  title: "ColorWheel",
};

const Template = (args) => <ColorWheel {...args} />;

export const Default = Template.bind({});
Default.args = {};
