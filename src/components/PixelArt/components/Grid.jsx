import React from "react";
import useStyles from "./Grid.styles";

const Grid = ({ currentColor, setInHistory, cells, setCells, offCell }) => {
  const updateCell = (i, defaultState) => (e) => {
    e.preventDefault();
    setCells(
      cells.map((cell, index) => {
        if (index === i) {
          if (defaultState) return defaultState;
          if (cell.color === currentColor) return offCell;
          return {
            on: true,
            color: currentColor,
          };
        }
        return cell;
      })
    );
    if (!defaultState) setInHistory(currentColor);
  };

  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {cells.map((cell, i) => (
        <div
          key={i}
          className={classes.cell}
          onClick={updateCell(i)}
          style={{ background: cell.on ? cell.color : "#ffffff" }}
          onContextMenu={updateCell(i, offCell)}
        ></div>
      ))}
    </div>
  );
};

export default Grid;
