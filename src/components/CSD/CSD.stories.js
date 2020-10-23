import React from "react";
import CSD from "./CSD";

export default {
  component: CSD,
  title: "CSD",
};

const Template = (args) => <CSD {...args} />;

export const Default = Template.bind({});
Default.args = {};
