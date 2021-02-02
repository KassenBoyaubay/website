import React, { useState } from 'react'
// Context
import { useSetLanguage, useLanguage, Text } from "../../../App_util/Context/LanguageContext"
import { useTheme } from "../../../App_util/Context/ThemeContext"
// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TranslateIcon from '@material-ui/icons/Translate';

const styles = (theme) => ({
    ...theme.spread,
    language: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    formControl: {
        margin: theme.spacing(0, 1),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fill: 'white',
    },
    select: {
        color: 'white',
        fontSize: '0.875rem',
        fontWeight: '525',
        textTransform: 'uppercase',
        letterSpacing: '0.02875em',
        margin: theme.spacing(0, 0.5, 0, 1),
        '&:focus': {
            backgroundColor: 'inherit',
        },
    }
})

function LanguageSelect({ classes }) {
    // dark theme
    const darkTheme = useTheme()
    // Language Select
    const setLang = useSetLanguage()
    const Lang = useLanguage()

    const [language, setLanguage] = useState(Lang)
    const [open, setOpen] = useState(false)
    const [isHover, setIsHover] = useState(false);
    const handleChange = (e) => {
        setLanguage(e.target.value)
        setLang(e.target.value)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className={classes.language}>
            <Tooltip
                aria-label="language"
                placement="bottom"
                title={Text({ tid: "nav_tooltip_language" })}
                open={!open && isHover}
            >
                <FormControl className={classes.formControl} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} color={darkTheme ? "secondary" : "primary"}>
                    <TranslateIcon className={classes.icon} />
                    <Select
                        autoWidth
                        disableUnderline
                        value={language}
                        onChange={(e) => handleChange(e)}
                        open={open}
                        onClose={() => handleClose()}
                        onOpen={() => handleOpen()}
                        classes={{
                            icon: classes.icon,
                            select: classes.select
                        }}
                        IconComponent={ExpandMoreIcon}
                    >
                        <MenuItem value="en">ENGLISH</MenuItem>
                        <MenuItem value="ru">РУССКИЙ</MenuItem>
                    </Select>
                </FormControl>
            </Tooltip>
        </div>
    )
}

export default (withStyles(styles)(LanguageSelect))
