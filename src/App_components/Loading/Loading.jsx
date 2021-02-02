import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div
      className={styles.loader__wrap}
      role="alertdialog"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading…"
    >
      <div className={styles.loader__content}>
        <div className={styles.loader__name}>
          <span>L</span>
          <span>O</span>
          <span>A</span>
        </div>
        <div className={styles.loader} aria-hidden="true">
          <div className={styles.loader__sq}></div>
          <div className={styles.loader__sq}></div>
        </div>
        <div className={styles.loader__name}>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
