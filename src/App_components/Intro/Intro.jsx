import React, { useState, useEffect } from "react";
import styles from "./Intro.module.scss";
import TransitionOne from "./TransitionOne";

const Intro = () => {
  const [transitionOne, setTransitionOne] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      transit();
    }, 8000);
  }, []);

  function transit() {
    setTransitionOne(false);
    // window.scrollTo({
    //   left: 0,
    //   top: 0,
    // });
  }

  return (
    <section id={styles.intro}>
      {transitionOne && <TransitionOne onClick={() => transit()} />}
    </section>
  );
};

export default Intro;
