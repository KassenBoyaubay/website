import React, { useState, useEffect } from 'react'
// Context
import { useSkipButton } from "../../../App_util/Context/SkipButtonContext"
import { Text } from "../../../App_util/Context/LanguageContext"

function ToggleSkip() {
    // skip intro
    const skipIntroContext = useSkipButton()
    const [skipIntro, setSkipIntro] = useState(skipIntroContext)

    useEffect(() => {
        setSkipIntro(skipIntroContext)
    }, [skipIntroContext])

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
        <>
            <input type="checkbox" name="skipIntro" onChange={(e) => toggleSkipIntro(e)} checked={skipIntro} />
            <label htmlFor="skipIntro" style={{ margin: 0 }}><strong>&nbsp;
            <Text tid={"homeIntro_skip"} />
            </strong></label>
        </>
    )
}

export default ToggleSkip
