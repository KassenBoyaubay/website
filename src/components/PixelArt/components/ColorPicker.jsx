import React from "react";
import useStyles from "./ColorPicker.styles";

const ColorPicker = ({ currentColor, setCurrentColor }) => {
  const classes = useStyles();
  return (
    <input
      className={classes.colorPicker}
      type="color"
      onChange={(e) => setCurrentColor(e.target.value)}
      value={currentColor}
    />
  );
};

export default ColorPicker;
