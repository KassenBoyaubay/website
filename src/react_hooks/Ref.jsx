import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const Ref = () => {
  // Reference & focus
  // Use w/ fetch

  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  //Measure dimensions of DOM
  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current.focus();
          hello.current();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default Ref;
