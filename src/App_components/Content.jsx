import React, { useEffect } from 'react'
import clsx from 'clsx'
// Context
import { useTheme } from "../App_util/Context/ThemeContext"
import { useSkipButton, useSkipButtonUpdate } from "../App_util/Context/SkipButtonContext"
// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
// components
import Navbar from "./layout/Navbar"
import Intro from "./Intro/Intro";
import HomeIntro from "./HomeIntro/HomeIntro";
import SectionOne from './SectionOne/SectionOne'

const styles = (theme) => ({
    ...theme.spread,
    theme: {
        backgroundColor: theme.palette.primary.background
    },
    themeDark: {
        backgroundColor: theme.palette.secondary.dark
    },
})

function Content({ classes }) {
    // dark theme
    const darkTheme = useTheme()
    // skip intro
    const skipIntro = useSkipButton()
    const setSkipIntro = useSkipButtonUpdate()

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("skipIntro")) === 'true') {
            setSkipIntro()
        }
    }, []);

    return (
        <div className={clsx({ [classes.theme]: !darkTheme, [classes.themeDark]: darkTheme })}>
            <Navbar />
            {!skipIntro && <Intro />}
            <HomeIntro />
            <SectionOne />
        </div>
    )
}

export default (withStyles(styles)(Content))
