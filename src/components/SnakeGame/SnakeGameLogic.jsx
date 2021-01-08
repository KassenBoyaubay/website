import React, { useState, useEffect } from "react";
import useStyles from "./SnakeGameLogic.styles";

import Snake from './components/Snake';
import Food from './components/Food';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y]
}

const initialState = {
  food: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [
    [0, 0],
    [2, 0]
  ]
}

const SnakeGameLogic = () => {
  const [food, setFood] = useState(initialState.food)
  const [speed, setSpeed] = useState(initialState.speed)
  const [direction, setDirection] = useState(initialState.direction)
  const [snakeDots, setSnakeDots] = useState(initialState.snakeDots)

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  })

  useEffect(() => {
    const interval = setInterval(() => {
      moveSnake()
    }, 200);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    checkIfOutOfBorders();
    checkIfCollapsed();
    checkIfEat();
  }, [snakeDots])

  const onKeyDown = (e) => {
    e.preventDefault()
    switch (e.keyCode) {
      case 38:
        setDirection('UP')
        break;
      case 40:
        setDirection('DOWN');
        break;
      case 37:
        setDirection('LEFT');
        break;
      case 39:
        setDirection('RIGHT');
        break;
    }
  }

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    setSnakeDots(dots)
  }

  const checkIfOutOfBorders = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameOver();
    }
  }

  const checkIfCollapsed = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        onGameOver();
      }
    })
  }

  const checkIfEat = () => {
    let head = snakeDots[snakeDots.length - 1];
    let foods = food;
    if (head[0] == foods[0] && head[1] == foods[1]) {
      setFood(getRandomCoordinates())
      enlargeSnake();
      increaseSpeed();
    }
  }

  const enlargeSnake = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([])
    setSnakeDots(newSnake)
  }

  const increaseSpeed = () => {
    if (speed > 10) {
      setSpeed(speed - 10)
    }
  }

  const onGameOver = () => {
    alert(`Game Over. Snake length is ${snakeDots.length}`);
    setFood(initialState.food)
    setSpeed(initialState.speed)
    setDirection(initialState.direction)
    setSnakeDots(initialState.snakeDots)
  }

  const classes = useStyles();
  return (
    <div>
      <div className={classes.gameArea}>
        <Snake snakeDots={snakeDots} />
        <Food dot={food} />
        {Array(625).fill(0).map((_, i) => <div key={i} className={classes.box}></div>)}
      </div>
    </div>
  );
};

export default SnakeGameLogic;
