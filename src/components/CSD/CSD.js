import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import ColorModels, { ColorModelsDefaultProps } from "../ColorModels";
import ColorSpaces, { ColorSpacesDefaultProps } from "../ColorSpaces";
import Hues from "../Hues";

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

  const [model, setModel] = useState(ColorModelsDefaultProps.models[0].name);
  const [space, setSpace] = useState(ColorSpacesDefaultProps.spaces[0].name);

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleSpaceChange = (event) => {
    setSpace(event.target.value);
  };

  return (
    <div className={cx("CSD", containerKlass)}>
      <ColorModels
        selected={model}
        handleModelChange={() => handleModelChange}
      />
      <ColorSpaces
        selected={space}
        handleSpaceChange={() => handleSpaceChange}
      />
      <Hues modelName={model} space={space} />
    </div>
  );
};

CSD.propTypes = propTypes;
CSD.defaultProps = defaultProps;

export default CSD;
export { propTypes as CSDPropTypes, defaultProps as CSDDefaultProps };
