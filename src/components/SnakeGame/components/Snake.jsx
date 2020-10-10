import React from 'react';
import useStyles from "./Snake.styles";

export default ({ snakeDots }) => {
  const classes = useStyles();
  return (
    <>
      {snakeDots.map((dot, i) => {
        return (
          <div className={classes.snakeDot} key={i} style={{ left: `${dot[0]}%`, top: `${dot[1]}%` }}></div>
        )
      })}
    </>
  )
}