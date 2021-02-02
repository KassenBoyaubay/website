import React from "react";
import clsx from 'clsx'
import stylesModule from './HomeIntro.module.scss'
// Context
import { useTheme } from "../../App_util/Context/ThemeContext"
import { Text } from "../../App_util/Context/LanguageContext"
// Components
import ToggleSkip from "./components/ToggleSkip";
// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import img from "./img/lead-bg.jpg"
import img2 from "./img/html-on-page.jpg"

const styles = (theme) => ({
    ...theme.spread,
    homeIntro: {
        minHeight: "100vh",
        // backgroundColor: "rgb(25, 25, 25)",
        display: "grid",
        placeItems: "center",
        flexGrow: 1,
        background: `url(${img})`,
        backgroundSize: 'cover',
        overflow: 'hidden'
    },
    light: {
        // backgroundColor: "#f1f5f8",
    },
    overlay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: " rgba(33,125,187,0.8)",
        zIndex: 1,
    },
    overlayDark: {
        background: "rgb(20 55 78 / 80%)",
    },
    root: {
        // backgroundColor: "rgb(10, 6, 6)",
        backgroundColor: "#f1f5f8",
        // color: "rgba(255, 255, 255, 0.75)",
        color: "#191919",
        textAlign: "center",
        padding: theme.spacing(2),
        zIndex: 10,
    },
    rootDark: {
        backgroundColor: theme.palette.secondary.main,
        color: "#bbb",
    },
    spanDark: {
        // color: theme.palette.primary.contrastLightText
    },
    down: {
        position: 'absolute',
        paddingBottom: theme.spacing(2),
        bottom: 0,
        width: '100%',
        color: theme.palette.primary.contrastText,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    downDark: {
        // color: theme.palette.primary.contrastLightText
    },
    h1: {
        maxWidth: 500
    },
    p: {
        maxWidth: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    // img: {
    //     position: 'absolute',
    //     display: 'block',
    //     width: '400px',
    //     height: '460px',
    //     top: 0,
    //     bottom: 0,
    //     margin: 'auto',
    //     boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
    //     borderRadius: '4px',
    // },
})

const HomeIntro = ({ classes }) => {
    // dark theme
    const darkTheme = useTheme()

    return (
        <div className={clsx(classes.homeIntro, classes.light)}>
            <div className={clsx({ [classes.overlay]: true, [classes.overlayDark]: darkTheme })}></div>
            <Paper elevation={5} className={clsx({ [classes.root]: true, [classes.rootDark]: darkTheme })}>
                <Grid
                    container
                    spacing={2}
                    wrap="nowrap"
                    alignContent="center"
                    alignItems="center"
                >
                    <Grid item sm xs={12} className={stylesModule.grid}>
                        <h1 className={classes.h1}>
                            <Text tid={"homeIntro_welcome_1"} />
                            <span>
                                <i className="fa fa-spinner fa-spin" style={{ fontSize: "1.5rem" }}></i>
                            </span>
                            <Text tid={"homeIntro_welcome_2"} />
                        </h1>
                        <p className={classes.p}>
                            <Text tid={"homeIntro_p_1"} />
                            <strong>
                                HTML, CSS, SASS, JavaScript, JQuery, Bootstrap, React, Material-UI, Firebase
                            </strong>
                            <Text tid={"homeIntro_p_2"} />
                        </p>
                        <ToggleSkip />
                    </Grid>
                    <Grid item md className={stylesModule.grid}>
                        <img className={stylesModule.img2} alt="coding img" src={img2} />
                    </Grid>
                </Grid>
            </Paper>
            <div className={clsx({ [classes.down]: true, [classes.downDark]: darkTheme })}>
                <span className={clsx({ [stylesModule.span]: true, [classes.spanDark]: darkTheme })}>
                    <Text tid={"homeIntro_down"} />
                </span>
                <Tooltip
                    aria-label="move down"
                    placement="right"
                    title="move to projects"
                >
                    <Link
                        style={{ color: 'inherit' }}
                        href="#sectionOne"
                    >
                        <IconButton color="inherit" aria-label="arrow down" className={darkTheme ? classes.iconDark : classes.iconLight}>
                            <ExpandMoreIcon fontSize="large" />
                        </IconButton>
                    </Link>
                </Tooltip>
            </div>
        </div>
    );
};

export default (withStyles(styles)(HomeIntro))