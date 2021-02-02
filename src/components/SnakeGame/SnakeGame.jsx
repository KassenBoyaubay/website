import React, { useState } from "react";
import useStyles from "./SnakeGame.styles";

import SnakeGameLogic from "./SnakeGameLogic"

function SnakeGame() {
    const [startGame, setStartGame] = useState(true)
    const classes = useStyles();
    return (
        <div className={classes.snakeGame}>
            <button className={classes.button} onClick={() => setStartGame(!startGame)}>{startGame ? "Start Game" : "Finish Game"}</button>
            {!startGame && <SnakeGameLogic />}
        </div>
    )
}

export default SnakeGame
