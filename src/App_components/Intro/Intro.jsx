import React, { useState, useEffect } from "react";
import styles from "./Intro.module.scss";
import TransitionOne from "./TransitionOne";
import TransitionTwo from "./TransitionTwo";

const Intro = () => {
  const [transitionOne, setTransitionOne] = useState(true);
  const [transitionTwo, setTransitionTwo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      transit();
    }, 8000);
  }, []);

  function transit() {
    setTransitionOne(false);
    setTransitionTwo(true);
    // window.scrollTo({
    //   left: 0,
    //   top: 0,
    // });
  }

  return (
    <section id={styles.intro}>
      {transitionOne && <TransitionOne onClick={() => transit()} />}
      {transitionTwo && <TransitionTwo />}
    </section>
  );
};

export default Intro;
