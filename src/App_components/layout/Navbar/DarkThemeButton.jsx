import React from 'react'
import { useTheme, useThemeUpdate } from "../../../App_util/Context/ThemeContext"
import { Text } from "../../../App_util/Context/LanguageContext"
// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
//Icons
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const styles = (theme) => ({
    ...theme.spread,
})

function DarkThemeButton({ classes }) {
    // dark theme
    const darkTheme = useTheme()
    const toggleDarkTheme = useThemeUpdate()

    return (
        <Tooltip
            aria-label="light/dark theme"
            placement="bottom"
            title={Text({ tid: "nav_tooltip_theme" })}
            onClick={toggleDarkTheme}
        >
            <IconButton color="inherit" aria-label="light/dark mode" className={darkTheme ? classes.iconDark : classes.iconLight}>
                {darkTheme
                    ? <Brightness7Icon />
                    : <Brightness4Icon />
                }
            </IconButton>
        </Tooltip>
    )
}

export default (withStyles(styles)(DarkThemeButton))