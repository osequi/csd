import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */

/**
 * Defines the prop types.
 */
const propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  color: "white",
};

/**
 * Defines the styles.
 */
const container = (props) => ({
  backgroundColor: props.color,
});

/**
 * Displays the component.
 * @see ColorSwatch.md
 */
const ColorSwatch = (props) => {
  const { children } = props;
  const { containerKlass } = useStyles([container], props);

  return <div className={cx("ColorSwatch", containerKlass)}>{children}</div>;
};

ColorSwatch.propTypes = propTypes;
ColorSwatch.defaultProps = defaultProps;

export default ColorSwatch;
export {
  propTypes as ColorSwatchPropTypes,
  defaultProps as ColorSwatchDefaultProps,
};
