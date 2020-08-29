import React, { useState } from "react";
import "./minesweeper.scss";
import { useEffect } from "react";

const Minesweeper = () => {
  const [bombAmount, setBombAmount] = useState(20);
  const [flags, setFlags] = useState(0);
  const [total, setTotal] = useState([]);
  const [squareClass, setSquareClass] = useState([]);
  const [squareContent, setSquareContent] = useState([]);
  const [result, setResult] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [yep, setYep] = useState(-1);
  const [width, setWidth] = useState(10);

  var squareClassLoop = [];
  var squareContentLoop = [];

  function squareOnClick(e, id) {
    //cntrl and left click
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      addFlag(id);
    }
    //normal click
    else {
      click(id);
    }
  }

  //add Flag with right click
  function addFlag(i) {
    if (isGameOver) return;
    else if (
      !squareClass[i].includes("checked") &&
      flags < bombAmount &&
      !squareClass[i].includes("flag")
    ) {
      setSquareClass((prev) =>
        prev.map((item, index) => (index === i ? (item += " flag") : item))
      );
      setSquareContent((prev) =>
        prev.map((item, index) => (index === i ? (item = "🚩") : item))
      );
      setFlags((prev) => (prev += 1));
      checkForWin();
    } else if (squareClass[i].includes("flag")) {
      setSquareClass((prev) =>
        prev.map((item, index) =>
          index === i ? item.replace(" flag", "") : item
        )
      );
      setSquareContent((prev) =>
        prev.map((item, index) => (index === i ? (item = "") : item))
      );
      setFlags((prev) => (prev -= 1));
    }
  }

  //click on square actions
  function click(i) {
    if (isGameOver) return;
    else if (
      squareClass[i].includes("checked") ||
      squareClass[i].includes("flag")
    )
      return;
    else if (squareClass[i].includes("bomb")) {
      gameOver(i);
    } else {
      setSquareClass((prev) =>
        prev.map((item, index) => (index === i ? (item += " checked") : item))
      );
      if (total[i] !== 0) {
        if (total[i] === 1)
          setSquareClass((prev) =>
            prev.map((item, index) => (index === i ? (item += " one") : item))
          );
        else if (total[i] === 2)
          setSquareClass((prev) =>
            prev.map((item, index) => (index === i ? (item += " two") : item))
          );
        else if (total[i] === 3)
          setSquareClass((prev) =>
            prev.map((item, index) => (index === i ? (item += " three") : item))
          );
        else if (total[i] === 4)
          setSquareClass((prev) =>
            prev.map((item, index) => (index === i ? (item += " four") : item))
          );
        setSquareContent((prev) =>
          prev.map((item, index) => (index === i ? (item = total[i]) : item))
        );
        return;
      }
      setYep(i);
    }
  }

  useEffect(() => {
    if (yep !== -1) checkSquare(yep);
  }, [yep]);

  //check for win
  function checkForWin() {
    ///simplified win argument
    let matches = 0;

    for (let i = 0; i < width * width; i++) {
      if (squareClass[i].includes("flag") && squareClass[i].includes("bomb")) {
        matches++;
      }
      if (matches === bombAmount) {
        setResult("YOU WIN!");
        setIsGameOver(true);
      }
    }
  }

  //game over
  function gameOver() {
    setResult("BOOM! Game Over!");
    setIsGameOver(true);

    //show ALL the bombs
    for (let i = 0; i < width * width; i++) {
      if (squareClass[i].includes("bomb")) {
        setSquareContent((prev) =>
          prev.map((item, index) => (index === i ? (item = "💣") : item))
        );
        setSquareClass((prev) =>
          prev.map((item, index) =>
            index === i ? item.replace(" bomb", " checked") : item
          )
        );
      }
    }
  }

  //check neighboring squares once square is clicked
  function checkSquare(i) {
    let isLeftEdge = i % width === 0;
    let isRightEdge = i % width === width - 1;

    setTimeout(() => {
      if (i > 0 && !isLeftEdge) {
        click(i - 1);
      }
      if (i > width - 1 && !isRightEdge) {
        click(i + 1 - width);
      }
      if (i > width - 1) {
        click(i - width);
      }
      if (i > width && !isLeftEdge) {
        click(i - 1 - width);
      }
      if (i < width * width - 1 && !isRightEdge) {
        click(i + 1);
      }
      if (i < width * (width - 1) && !isLeftEdge) {
        click(i - 1 + width);
      }
      if (i < width * (width - 1) - 1 && !isRightEdge) {
        click(i + 1 + width);
      }
      if (i < width * width - 1) {
        click(i + width);
      }
    }, 100);
  }

  //create Board
  function createBoard() {
    setIsGameOver(false);
    setResult("");

    //get shuffled game array with random bombs
    const bombsArray = Array(bombAmount).fill("bomb");
    const emptyArray = Array(width * width - bombAmount).fill("valid");
    const gameArray = emptyArray.concat(bombsArray);
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < width * width; i++) {
      squareClassLoop = [...squareClassLoop, shuffledArray[i]];
      squareContentLoop = [...squareContentLoop, ""];
    }

    let totalLoop = [];

    //add numbers
    for (let i = 0; i < width * width; i++) {
      totalLoop[i] = 0;
      let isLeftEdge = i % width === 0;
      let isRightEdge = i % width === width - 1;

      // Logic is not correct if width is not 10
      if (squareClassLoop[i].includes("valid")) {
        if (i > 0 && !isLeftEdge && squareClassLoop[i - 1].includes("bomb"))
          totalLoop[i]++; // L      0
        if (
          i > width - 1 &&
          !isRightEdge &&
          squareClassLoop[i + 1 - width].includes("bomb")
        )
          totalLoop[i]++; // R-T    9
        if (i > width - 1 && squareClassLoop[i - width].includes("bomb"))
          totalLoop[i]++; // T      9
        if (
          i > width &&
          !isLeftEdge &&
          squareClassLoop[i - 1 - width].includes("bomb")
        )
          totalLoop[i]++; // L-T    10
        if (
          i < width * width - 1 &&
          !isRightEdge &&
          squareClassLoop[i + 1].includes("bomb")
        )
          totalLoop[i]++; // R      99
        if (
          i < width * (width - 1) &&
          !isLeftEdge &&
          squareClassLoop[i - 1 + width].includes("bomb")
        )
          totalLoop[i]++; // L-D    90
        if (
          i < width * (width - 1) - 1 &&
          !isRightEdge &&
          squareClassLoop[i + 1 + width].includes("bomb")
        )
          totalLoop[i]++; // R-D    89
        if (
          i < width * (width - 1) &&
          squareClassLoop[i + width].includes("bomb")
        )
          totalLoop[i]++; // D      90
      }
    }
    setSquareClass(squareClassLoop);
    setSquareContent(squareContentLoop);
    setTotal(totalLoop);
  }

  return (
    <div className="Minesweeper">
      <div className="ms-container">
        <button onClick={() => createBoard()}>
          {isGameOver ? "Restart" : "Start"}
        </button>
        <div className="ms-grid">
          {[...Array(width * width)].map((value, i) => (
            <div
              key={i}
              id={i}
              className={squareClass[i]}
              onClick={(e) => squareOnClick(e, i)}
              data={total[i]}
            >
              {squareContent[i]}
            </div>
          ))}
        </div>
        <div>
          Flags left: <span id="flags-left">{bombAmount - flags}</span>
        </div>
        <div id="result">
          {result ? result : "ctrl + click to place a flag"}
        </div>
      </div>
    </div>
  );
};

export default Minesweeper;
