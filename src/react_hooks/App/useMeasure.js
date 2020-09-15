import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

export const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    console.log(myRef.current.getBoundingClientRect());
    setRect(myRef.current.getBoundingClientRect());
  }, deps);

  return [rect, myRef];
};
