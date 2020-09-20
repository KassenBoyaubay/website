import React, { useState } from "react";
import "./typewriterEffect.scss";

const TypewriterEffect = ({
  Newtext = "Animation typewriter style using css steps()",
  TypewriterEffect = "TypewriterEffectExample",
}) => {
  const [anim, setAnim] = useState("anim-typewriter");
  const [text, setText] = useState(Newtext);
  const [toggleAnim, setToggleAnim] = useState(true);

  const reset = (cond) => {
    if (cond) {
      setAnim("");
      setText("");
      setToggleAnim(false);
    } else {
      setAnim("anim-typewriter");
      setText(Newtext);
      setToggleAnim(true);
    }
  };

  return (
    <div className={TypewriterEffect}>
      <p className={`line-1 ${anim}`}>{text}</p>
      <div className="te-button">
        <button onClick={() => reset(toggleAnim)}>
          {toggleAnim ? "Reset typewriter animation effect" : "Start again"}
        </button>
      </div>
    </div>
  );
};

export default TypewriterEffect;
