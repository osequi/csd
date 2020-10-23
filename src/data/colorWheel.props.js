import PropTypes from "prop-types";

/**
 * A set of colors constructed from primary colors.
 */

import {
  colorModelPropTypes,
  colorModelDefaultProps,
} from "./colorModel.props";

const propTypes = {
  primary: PropTypes.arrayOf(PropTypes.shape(colorPropTypes)),
  secondary: PropTypes.arrayOf(PropTypes.shape(colorPropTypes)),
  tertiary: PropTypes.arrayOf(PropTypes.shape(colorPropTypes)),
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
