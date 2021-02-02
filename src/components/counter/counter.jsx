import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className="mySass Counter">
      <main>
        <div className="c-container">
          <h1>counter</h1>
          <span
            id="value"
            style={{
              color: `${number > 0 ? "green" : number < 0 ? "red" : "#102a42"}`,
            }}
          >
            {number}
          </span>
          <div className="button-container">
            <button
              className="btn decrease"
              onClick={() => {
                setNumber(number - 1);
              }}
            >
              decrease
            </button>
            <button
              className="btn reset"
              onClick={() => {
                setNumber(0);
              }}
            >
              reset
            </button>
            <button
              className="btn increase"
              onClick={() => {
                setNumber(number + 1);
              }}
            >
              increase
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Counter;
