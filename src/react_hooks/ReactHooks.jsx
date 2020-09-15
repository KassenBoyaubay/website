import React, { useState, useEffect } from "react";
import App from "./App/App";
import Ref from "./Ref";
import App2 from "./App2/App2";
import App3 from "./App3/App3";
import App4 from "./App4/App4";
//import App5 from "./App5/App5";

const ReactHooks = () => {
  return (
    <div>
      <h1>React Hooks</h1>
      <br />
      <h2>UseState, UseEffect, UseRef, UseLayoutEffect</h2>
      {/* UseState, UseEffect, UseRef, UseLayoutEffect */}
      <App />
      <br />
      <h2>UseRef, UseLayoutEffect</h2>
      {/* UseRef, UseLayoutEffect */}
      <Ref />
      <br />
      <h2>useCallback</h2>
      {/* useCallback */}
      <App2 />
      <br />
      <h2>UseMemo</h2>
      {/* useMemo */}
      <App3 />
      <br />
      <h2>useReducer</h2>
      {/* useReducer */}
      <App4 />
      {/* <br />
      <h2>useContext</h2>
      <App5 /> */}
    </div>
  );
};

export default ReactHooks;
