import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import chroma from "chroma-js";
import shortid from "shortid";

/**
 * Imports other components and hooks.
 */
import { ColorModelsDefaultProps } from "../ColorModels";
import ColorSwatch from "../ColorSwatch";

/**
 * Defines the prop types.
 */
const propTypes = {
  modelName: PropTypes.string,
  space: PropTypes.string,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  modelName: null,
  space: null,
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see ColorWheel.md
 */
const ColorWheel = (props) => {
  const { modelName, space } = props;
  const { containerKlass } = useStyles([container], props);

  const model = ColorModelsDefaultProps.models.find(
    (item) => item.name === modelName
  );

  const { primaryColors } = model;

  const primaryColorsList =
    primaryColors &&
    primaryColors.map((item) => {
      const { name } = item;
      const color = chroma(name);
      return (
        <ColorSwatch
          key={shortid.generate()}
          color={color.css()}
          children={name}
        />
      );
    });

  let secondaryColorsList = [];
  for (var i = 0; i < primaryColors.length; i++) {
    const color1 = primaryColors[i];
    const j = i === primaryColors.length - 1 ? 0 : i + 1;
    const color2 = primaryColors[j];
    const { name: name1 } = color1;
    const { name: name2 } = color2;
    const color = chroma.mix(name1, name2);
    secondaryColorsList.push(
      <ColorSwatch
        key={shortid.generate()}
        color={color.css()}
        children={`${name1}-${name2}`}
      />
    );
  }

  return (
    <div className={cx("ColorWheel", containerKlass)}>
      {primaryColorsList}
      {secondaryColorsList}
    </div>
  );
};

ColorWheel.propTypes = propTypes;
ColorWheel.defaultProps = defaultProps;

export default ColorWheel;
export {
  propTypes as ColorWheelPropTypes,
  defaultProps as ColorWheelDefaultProps,
};
