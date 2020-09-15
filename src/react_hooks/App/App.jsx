import React, { useState, useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import useFetch from "./useFetch";
import { useMeasure } from "./useMeasure";

const App = () => {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  const [values, handleChange] = useForm({ email: "", password: "" });

  // Every render
  useEffect(() => {
    console.log("render");
  });

  // Once render when mounts
  useEffect(() => {
    console.log("Once render");
  }, []);

  // Once render when mounts, then clean up logic
  // Mount -> once render, unmount -> unmount
  useEffect(() => {
    console.log("Once render");
    return () => {
      console.log("unmount");
    };
  }, []);

  // Password change
  useEffect(() => {
    console.log("password render");
  }, [values.password]);

  useEffect(() => {
    console.log("render email");
    return () => {
      console.log("unmount email");
    };
  }, [values.email]);

  // get mouse coordinates
  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  //API
  const [countApi, setCountApi] = useState(() =>
    JSON.parse(localStorage.getItem("countApi"))
  );
  const { data, loading } = useFetch(
    `http://numbersapi.com/${countApi}/trivia`
  );

  //Local Storage
  useEffect(() => {
    localStorage.setItem("countApi", JSON.stringify(countApi));
  }, [countApi]);

  // useLayoutEffect
  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      {/* API */}
      <div>
        <div style={{ display: "flex" }}>
          <div ref={divRef}>{!data ? "loading..." : data}</div>
        </div>
        <pre>{JSON.stringify(rect, null, 2)}</pre>
        <div>count: {countApi}</div>
        <button onClick={() => setCountApi((c) => c + 1)}>increment</button>
      </div>
      <br />
      <button
        onClick={() =>
          setCount((currentState) => ({
            count: currentState.count + 1,
            count2: currentState.count2 + 1,
          }))
        }
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
  ];
};

export default App;
