import React, { useState, useEffect, useCallback } from "react";
import { Hello } from "./Hello";
import { Square } from "./Square";

// function doesn't change, so it should not re-render, but it is in Hello w/ memo
// => use callback -> function doesn't re-render
// prevent functions from changing the value when using memo
const App2 = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favoriteNums.map((n) => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
};

export default App2;
