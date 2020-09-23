import React, { useState, useEffect } from "react";
import useStyles from "./PixelArt.styles";

import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";

const offCell = {
  on: false,
  color: "#ffffff",
};

const initialCells = Array.from({ length: 256 }, () => offCell);

const initColor = "#b90e83";

const PixelArt = () => {
  const [currentColor, setCurrentColor] = useState(initColor);
  const [colorHistory, setColorHistory] = useState([]);
  const [cells, setCells] = useState(initialCells);

  const setInHistory = (color) => {
    if (colorHistory.indexOf(color) === -1)
      setColorHistory(colorHistory.slice(-8).concat(color));
    else setColorHistory(colorHistory.filter((c) => c !== color).concat(color));
  };

  const reset = () => {
    setCurrentColor(initColor);
    setColorHistory([]);
    setCells(initialCells);
  };

  const classes = useStyles();
  return (
    <div className={classes.app}>
      <button className={classes.resetButton} onClick={() => reset()}>
        Reset
      </button>
      <ColorPicker
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <div className={classes.colorSwatchContainer}>
        {colorHistory.map((color) => (
          <div
            key={color}
            className={classes.colorSwatch}
            style={{ background: color }}
            onClick={() => setCurrentColor(color)}
          ></div>
        ))}
      </div>
      <Grid
        currentColor={currentColor}
        setInHistory={setInHistory}
        cells={cells}
        setCells={setCells}
        offCell={offCell}
      />
    </div>
  );
};

export default PixelArt;
