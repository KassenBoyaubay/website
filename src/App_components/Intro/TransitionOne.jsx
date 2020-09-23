import React, { useState, useEffect } from "react";
import styles from "./TransitionOne.module.scss";

import TypewriterEffect from "../../components/typewriter_effect/TypewriterEffect";

const TransitionOne = ({ onClick }) => {
  return (
    <div className={styles.transitionOne} onClick={onClick}>
      <TypewriterEffect
        Newtext={".Welcome to my Website!"}
        TypewriterEffect={"TypewriterEffectIntro line1"}
        button={false}
      />
      <TypewriterEffect
        Newtext={".I am a"}
        TypewriterEffect={"TypewriterEffectIntro line2"}
        button={false}
      />
      <TypewriterEffect
        Newtext={"..Designer,"}
        TypewriterEffect={"TypewriterEffectIntro line3"}
        button={false}
      />
      <TypewriterEffect
        Newtext={"..Developer,"}
        TypewriterEffect={"TypewriterEffectIntro line4"}
        button={false}
      />
      <TypewriterEffect
        Newtext={"...and a Learner;"}
        TypewriterEffect={"TypewriterEffectIntro line5"}
        button={false}
      />
      <div className={styles.skipContainer}>
        <p>click anywhere to skip</p>
      </div>
    </div>
  );
};

export default TransitionOne;
