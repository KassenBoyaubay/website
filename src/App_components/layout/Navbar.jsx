import React from 'react'
// Context
import { useTheme } from "../../App_util/Context/ThemeContext"
import { Text } from "../../App_util/Context/LanguageContext"
// Components
import DarkThemeButton from './Navbar/DarkThemeButton';
import LanguageSelect from './Navbar/LanguageSelect';
import Userinfo from "./Navbar/Userinfo"
// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import { fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
// Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = (theme) => ({
    ...theme.spread,
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    closeBtn: {
        position: 'absolute',
        fontSize: '2rem',
        background: 'transparent',
        borderColor: 'transparent',
        color: '#bb2525',
        left: '0',
    }
});

function Navbar({ classes }) {
    // dark theme
    const darkTheme = useTheme()

    return (
        <div className={classes.grow}>
            <AppBar color={darkTheme ? "secondary" : "primary"}>
                <Toolbar>
                    {/* Menu Icon button */}
                    { /*
                    <Tooltip
                        aria-label="side menu"
                        placement="bottom"
                        title={Text({ tid: "nav_tooltip_sidebar" })}
                    >
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                            <span className={classes.closeBtn} >
                                <i className="fas fa-times"></i>
                            </span>
                        </IconButton>
                    </Tooltip>
                    */}
                    {/* Nav header */}
                    <Typography variant="h6" className={classes.grow}>
                        <Text tid={"nav_title"} />
                        {/* Main Page */}
                    </Typography>
                    {/* Search */}
                    { /*
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                            <span className={classes.closeBtn} >
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <InputBase
                            placeholder={Text({ tid: "nav_search" })}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    */}
                    {/* Language Select */}
                    <LanguageSelect />
                    {/* Light/dark mode */}
                    <DarkThemeButton />
                    {/* Github profile */}
                    <Tooltip
                        aria-label="github profile"
                        placement="bottom"
                        target="_blank"
                        rel="noopener"
                        title={Text({ tid: "nav_tooltip_github" })}
                    >
                        <Link
                            style={{ color: 'inherit' }}
                            href="https://github.com/KassenBoyaubay"
                        >
                            <IconButton color="inherit" aria-label="github profile">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    {/* User Info */}
                    <Userinfo />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default (withStyles(styles)(Navbar))
