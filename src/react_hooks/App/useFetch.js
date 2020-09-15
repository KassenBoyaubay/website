import React, { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      //called when component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url).then((x) =>
      x.text().then((y) => {
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
      })
    );
  }, [url]);

  return state;
};

export default useFetch;
