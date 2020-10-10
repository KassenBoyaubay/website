import React from 'react';
import useStyles from "./Food.styles";

export default ({ dot }) => {
  const classes = useStyles();
  return (
    <div className={classes.snakeFood} style={{ left: `${dot[0]}%`, top: `${dot[1]}%` }}></div>
  )
}