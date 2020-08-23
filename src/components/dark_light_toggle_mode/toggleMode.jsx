import React, { useState } from "react";
import "./toggleMode.scss";

const ToggleMode = () => {
  const [toggleClass, setToggleClass] = useState("");
  const [dataTheme, setDataTheme] = useState("");
  const [checked, setChecked] = useState(true);

  const checkbox = () => {
    setChecked(!checked);
    if (checked) {
      trans();
      setDataTheme("dark");
    } else {
      trans();
      setDataTheme("light");
    }
  };

  let trans = () => {
    setToggleClass("transition");
    window.setTimeout(() => {
      setToggleClass("");
    }, 1000);
  };

  return (
    <div className={`ToggleMode ${toggleClass}`} data-theme={dataTheme}>
      <div className="container">
        <h1>Light / Dark Mode</h1>
        <div className="toggle-container">
          <input
            type="checkbox"
            id="switch"
            name="theme"
            checked={checked}
            onChange={() => checkbox()}
          />
          <label htmlFor="switch">Toggle</label>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          magni optio impedit cum beatae fugit, quis enim eligendi cumque
          expedita pariatur dicta assumenda delectus quia voluptatum eos quo
          quam vitae.
        </p>
      </div>
    </div>
  );
};

export default ToggleMode;
