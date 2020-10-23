import PropTypes from "prop-types";

import { colorPropTypes, colorDefaultProps } from "./color.props";

const propTypes = {
  primary: PropTypes.arrayOf(PropTypes.colorPropTypes),
  secondary: PropTypes.arrayOf(PropTypes.colorPropTypes),
  tertiary: PropTypes.arrayOf(PropTypes.colorPropTypes),
};

let defaultProps = {
  primary: [
    {
      name: "red",
    },
    {
      name: "green",
    },
    {
      name: "blue",
    },
  ],
};

const generateSecondary = (props) => {};
const generateTertiary = (props) => {};

defaultProps.secondary = generateSecondary(defaultProps);
colorDefaultProps.tertiary = generateTertiary(defaultProps);

export {
  propTypes as colorWheelPropTypes,
  defaultProps as colorWheelDefaultProps,
};
