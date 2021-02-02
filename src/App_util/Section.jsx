import React from 'react'
import clsx from 'clsx'
// Context
import { useTheme } from "./Context/ThemeContext"
// Components
import AppTitle from './AppTitle'
// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
    ...theme.spread,
    container: {
        padding: '5rem 0'
    },
    paper: {
        padding: '0 2rem 2rem 2rem',
        backgroundColor: "#fff"
    },
    paperDark: {
        backgroundColor: theme.palette.secondary.main
    },
})

function Section({ classes, children, name }) {
    // dark theme
    const darkTheme = useTheme()

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Paper elevation={5} className={clsx({ [classes.paper]: true, [classes.paperDark]: darkTheme })}>
                <AppTitle name={name} />
                {children}
            </Paper>
        </Container>
    )
}

export default (withStyles(styles)(Section))
