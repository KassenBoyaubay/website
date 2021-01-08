import React, { useState, useEffect } from "react";
import styles from "./HomeIntro.module.scss";

const HomeIntro = ({ skip }) => {
    const [skipIntro, setSkipIntro] = useState(skip)

    // toggle skip/unskip intro with local storage
    const toggleSkipIntro = (e) => {
        if (localStorage.getItem("skipIntro") === null) {
            localStorage.setItem("skipIntro", JSON.stringify('true'))
        } else {
            let skip = JSON.parse(localStorage.getItem("skipIntro"))
            if (skip === 'false') {
                localStorage.setItem("skipIntro", JSON.stringify('true'));
            } else
                localStorage.setItem("skipIntro", JSON.stringify('false'));
        }
        setSkipIntro(e.target.checked)
    }

    return (
        <div className={styles.HomeIntro}>
            <div className={styles.HomeIntro_container}>
                <h1>Yep</h1>
                <input type="checkbox" name="skipIntro" onChange={(e) => toggleSkipIntro(e)} checked={skipIntro} />
                <label htmlFor="skipIntro">skip intro</label>
            </div>
        </div>
    );
};

export default HomeIntro;