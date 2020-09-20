import React, { useState, useEffect } from "react";
import styles from "./Intro.module.scss";

import TypewriterEffect from "../../components/typewriter_effect/TypewriterEffect";

const Intro = () => {
  return (
    <section id={styles.intro}>
      <TypewriterEffect
        Newtext={"Welcome!"}
        TypewriterEffect={"TypewriterEffectIntro"}
      />
    </section>
  );
};

export default Intro;
