import React, { useEffect, useState } from "react";

const ColorFlipper = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const [color, setColor] = useState("#f1f5f8");

  const changeColor = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    setColor(hexColor);
  };

  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }

  return (
    <div className="mySass ColorFlipper">
      <main style={{ background: `${color}` }}>
        <div className="cf-container">
          <h2>
            background color : <span className="color">{color}</span>
          </h2>
          <button
            className="btn btn-hero"
            id="btn"
            onClick={() => changeColor()}
          >
            click me
          </button>
        </div>
      </main>
    </div>
  );
};

export default ColorFlipper;
