import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import ColorModels from "../ColorModels";

/**
 * Defines the prop types.
 */
const propTypes = {};

/**
 * Defines the default props.
 */
const defaultProps = {};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see CSD.md
 */
const CSD = (props) => {
  const { containerKlass } = useStyles([container], props);

  return (
    <div className={cx("CSD", containerKlass)}>
      <ColorModels />
    </div>
  );
};

CSD.propTypes = propTypes;
CSD.defaultProps = defaultProps;

export default CSD;
export { propTypes as CSDPropTypes, defaultProps as CSDDefaultProps };
