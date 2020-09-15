import React, { useState, useEffect, useCallback, useMemo } from "react";
import useFetch from "../App/useFetch";

// if project slow -> use useMemo
const App3 = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch("https://api.kanye.rest/?format=text");

  const computeLongestWord = useCallback((word) => {
    if (!word) {
      return "";
    }

    console.log("computing logest word in one sentence");

    let longestWord = "";

    word.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });

    return longestWord;
  }, []); // no dependenices -> put outside of App3 like this w/o useCallback

  const longestWord = useMemo(() => computeLongestWord(data), [
    data,
    computeLongestWord,
  ]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>longest word: {longestWord}</div>
    </div>
  );
};

export default App3;
