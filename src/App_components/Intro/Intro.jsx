import React, { useState, useEffect } from "react";
import styles from "./Intro.module.scss";
import TransitionOne from "./TransitionOne";

const Intro = () => {
  const [transitionOne, setTransitionOne] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTransitionOne(false);
    }, 8000);
  }, []);

  return (
    <section id={styles.intro}>{transitionOne && <TransitionOne />}</section>
  );
};

export default Intro;
