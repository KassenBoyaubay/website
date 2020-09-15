import React, { useState, useEffect, useRef } from "react";
import { useCountRenders } from "./useCountRenders.js";

// if only props changed -> re-render component
// usually when parent changed, but memo -> when props changed
export const Hello = React.memo(({ increment }) => {
  useCountRenders();
  return <button onClick={() => increment(5)}>hello</button>;
});
