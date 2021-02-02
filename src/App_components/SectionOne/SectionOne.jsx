import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import clsx from 'clsx'
// Context
import { useTheme } from "../../App_util/Context/ThemeContext"
import { Text } from "../../App_util/Context/LanguageContext"
// Components
import Section from '../../App_util/Section'
import SubSectionTitle from '../../App_util/SubSectionTitle'
// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// MUI icons
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ForumIcon from '@material-ui/icons/Forum';
import FacebookIcon from '@material-ui/icons/Facebook';
import HelpIcon from '@material-ui/icons/Help';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import CreateIcon from '@material-ui/icons/Create';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import OpacityIcon from '@material-ui/icons/Opacity';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const styles = (theme) => ({
    ...theme.spread,
    iconLight: {
        backgroundColor: "fff"
    },
    iconDark: {
        backgroundColor: theme.palette.secondary.dark
    },
    iLight: {
        color: "#222"
    },
    iDark: {
        color: "#bbb"
    },
    pDark: {
        color: "#bbb"
    }
})

function SectionOne({ classes }) {
    // dark theme
    const darkTheme = useTheme()

    useEffect(() => {
        let lastScrollY = parseInt(localStorage.getItem("scrollY"))
        window.scrollTo(0, lastScrollY)
        localStorage.removeItem("scrollY");
    }, [])

    const SaveScroll = () => {
        let lastScrollY = window.scrollY;
        localStorage.setItem("scrollY", lastScrollY);
    }

    return (
        <div id="sectionOne">
            <Section name={'sectionOne_appTitle'}>
                <SubSectionTitle name={'sectionOne_subTitle_1'} />
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}>
                            <span className="blue">
                                <Text tid={"sectionOne_1_name_1"} />
                            </span>
                            <Text tid={"sectionOne_1_name_2"} />
                        </h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <LocalShippingIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <Text tid={"sectionOne_1_text_1"} />
                            <strong>firebase, stripe, redux,</strong>
                            <Text tid={"sectionOne_and"} />
                            <strong>react</strong>
                            <Text tid={"sectionOne_1_text_3"} />
                            <u>
                                <Text tid={"sectionOne_1_text_4"} />
                                <strong><Text tid={"sectionOne_1_text_5"} /> </strong>
                                <Text tid={"sectionOne_1_text_6"} />
                            </u></p>
                        <Link to="/amazonApp" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}>
                                <Text tid={"sectionOne_btn"} />
                            </button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="blue">
                            <Text tid={"sectionOne_2_name_1"} />
                        </span>
                            <Text tid={"sectionOne_2_name_2"} />
                        </h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <ForumIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <Text tid={"sectionOne_2_text_1"} />
                            <strong>firebase,</strong>
                            <Text tid={"sectionOne_and"} />
                            <strong>react</strong>
                            <Text tid={"sectionOne_2_text_3"} />
                        </p>
                        <Link to="/facebookMessengerApp" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}>
                                <Text tid={"sectionOne_btn"} />
                            </button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="blue">
                            <Text tid={"sectionOne_3_name_1"} />
                        </span>
                            <Text tid={"sectionOne_3_name_2"} />
                        </h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <FacebookIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <Text tid={"sectionOne_3_text_1"} />
                            <strong>firebase, redux</strong>
                            <Text tid={"sectionOne_and"} />
                            <strong>react</strong>
                            <Text tid={"sectionOne_3_text_2"} />
                        </p>
                        <Link to="/socialMediaApp" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}>
                                <Text tid={"sectionOne_btn"} />
                            </button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="blue">????</span> ???????</h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <HelpIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}><strong>
                            <Text tid={"sectionOne_4_text_1"} />
                        </strong></p>
                        <Link to="/" className="a disabled">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark disabled" : "btn disabled"}>
                                <Text tid={"sectionOne_4_text_2"} />
                            </button>
                        </Link>
                    </Grid>
                </Grid>
                <SubSectionTitle name={'sectionOne_subTitle_2'} />
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="orange">Minesweeper</span></h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <VideogameAssetIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <Text tid={"sectionOne_5_text_1"} />
                            <strong>minesweeper</strong>
                            <Text tid={"sectionOne_5_text_2"} />
                        </p>
                        <Link to="/minesweeper" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="orange">
                            <Text tid={"sectionOne_6_name_1"} />
                        </span>
                            <Text tid={"sectionOne_6_name_2"} />
                        </h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <TextFormatIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <Text tid={"sectionOne_6_text_1"} />
                            <strong>
                                <Text tid={"sectionOne_6_text_2"} />
                            </strong>
                            <Text tid={"sectionOne_6_text_3"} />
                        </p>
                        <Link to="/hangman" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="orange">
                            <Text tid={"sectionOne_7_name_1"} />
                        </span>
                            <Text tid={"sectionOne_7_name_2"} />
                        </h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <CreateIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <Text tid={"sectionOne_7_text_1"} />
                            <strong>
                                <Text tid={"sectionOne_7_text_2"} />
                            </strong>
                            <Text tid={"sectionOne_7_text_3"} />
                        </p>
                        <Link to="/pixelArt" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="orange">
                            <Text tid={"sectionOne_8_name_1"} />
                        </span>
                            <Text tid={"sectionOne_8_name_2"} />
                        </h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <LinearScaleIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <Text tid={"sectionOne_8_text_1"} />
                            <strong>
                                <Text tid={"sectionOne_8_text_2"} />
                            </strong>
                            <Text tid={"sectionOne_8_text_3"} />
                        </p>
                        <Link to="/snakeGame" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                </Grid>
                <SubSectionTitle name={'sectionOne_subTitle_3'} />
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="red">
                            <Text tid={"sectionOne_9_name_1"} />
                        </span>
                            <Text tid={"sectionOne_9_name_2"} />
                        </h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <AccessAlarmIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <strong>
                                <Text tid={"sectionOne_9_text_1"} />
                            </strong>
                            <Text tid={"sectionOne_9_text_2"} />
                        </p>
                        <Link to="/clocks" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="red">
                            <Text tid={"sectionOne_10_name_1"} />
                        </span>
                            <Text tid={"sectionOne_10_name_2"} />
                        </h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <InvertColorsIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <strong>
                                <Text tid={"sectionOne_10_text_1"} />
                            </strong>
                            <Text tid={"sectionOne_10_text_2"} />
                        </p>
                        <Link to="/darkThematics" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="red">
                            <Text tid={"sectionOne_11_name_1"} />
                        </span>
                            <Text tid={"sectionOne_11_name_2"} />
                        </h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <OpacityIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <Text tid={"sectionOne_11_text_1"} />
                            <strong>
                                <Text tid={"sectionOne_11_text_2"} />
                            </strong>
                            <Text tid={"sectionOne_11_text_3"} />
                        </p>
                        <Link to="/lightThematics" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : null}><span className="red">
                            <Text tid={"sectionOne_12_name_1"} />
                        </span>
                            <Text tid={"sectionOne_12_name_2"} />
                        </h2>
                        <div className={clsx("icon-container", { [classes.iconLight]: !darkTheme, [classes.iconDark]: darkTheme })}>
                            <ShoppingBasketIcon className={clsx("icon", { [classes.iLight]: !darkTheme, [classes.iDark]: darkTheme })} />
                        </div>
                        <p className={darkTheme ? classes.pDark : null}>
                            <Text tid={"sectionOne_12_text_1"} />
                            <strong>
                                <Text tid={"sectionOne_12_text_2"} />
                            </strong>
                            <Text tid={"sectionOne_12_text_3"} />
                        </p>
                        <Link to="/otherProjects" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                </Grid>
                <SubSectionTitle name={'sectionOne_subTitle_4'} />
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_portfolio"} />
                        </span> 1</h2>
                        <Link to="/bootstrapPortfolio" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_portfolio"} />
                        </span> 2</h2>
                        <a href="./Portfolio_1/index.html" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </a>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_portfolio"} />
                        </span> 3</h2>
                        <a href="./Portfolio_5/Index.html" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </a>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_portfolio"} />
                        </span> 4</h2>
                        <a href="./Portfolio_6/dist/index.html" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </a>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_portfolio"} />
                        </span> 5</h2>
                        <a href="./Portfolio_7/index.html" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </a>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_blogger"} />
                        </span></h2>
                        <a href="./Blogger/Index.html" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </a>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_travelville"} />
                        </span></h2>
                        <a href="./Travelville/index.html" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </a>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_books"} />
                        </span></h2>
                        <a href="./Books_bootstrap/src/Index.html" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </a>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_scroll"} />
                        </span></h2>
                        <a href="./Scroll_Project/index.html" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </a>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_contact_1"} />
                        </span>
                            <Text tid={"sectionOne_contact_2"} />
                        </h2>
                        <Link to="/contactForm" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>

                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_book_1"} />
                        </span>
                            <Text tid={"sectionOne_book_2"} />
                        </h2>
                        <Link to="/bookList" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_weather_1"} />
                        </span>
                            <Text tid={"sectionOne_weather_2"} />
                        </h2>
                        <Link to="/weatherAPI" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} container alignItems="center" direction="column" className={classes.SectionOneGrid}>
                        <h2 style={darkTheme ? { color: "#bbb" } : { color: "#bbb", marginBottom: 0 }}><span className="green">
                            <Text tid={"sectionOne_bubbles"} />
                        </span></h2>
                        <Link to="/animatedWebsite" className="a">
                            <button onClick={() => SaveScroll()} className={darkTheme ? "btnDark" : "btn"} style={{ marginBottom: '2rem' }}><Text tid={"sectionOne_btn"} /></button>
                        </Link>
                    </Grid>
                </Grid>
            </Section>
        </div>
    )
}

export default (withStyles(styles)(SectionOne))
