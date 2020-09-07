import React, { useEffect, useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className="mySass Counter">
      <main>
        <div class="c-container">
          <h1>counter</h1>
          <span
            id="value"
            style={{
              color: `${number > 0 ? "green" : number < 0 ? "red" : "#102a42"}`,
            }}
          >
            {number}
          </span>
          <div class="button-container">
            <button
              class="btn decrease"
              onClick={() => {
                setNumber(number - 1);
              }}
            >
              decrease
            </button>
            <button
              class="btn reset"
              onClick={() => {
                setNumber(0);
              }}
            >
              reset
            </button>
            <button
              class="btn increase"
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
