import React from 'react'
// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
// components
import ClockDigital from "../../components/clock_digital/clockDigital";
import ClockNeumorphism from "../../components/clock_neumorphism/clockNeumorphism";

const styles = (theme) => ({
    ...theme.spread,
    clockNeumorphismContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
        background: "#091921",
    },
    SmallSectionTitle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // height: 200px,
        backgroundColor: '#f4f7ff',
        // margin-bottom: 20px,
        paddingBottom: '20px',
        // border-top: solid 20px #161616,
        boxSizing: 'border-box',
        boxShadow: '2px 0px 20px rgba(0,0,0,0.4)',

        '& h2': {
            fontSize: '2rem',
            color: '#1e1e1e',
            fontFamily: 'calibri',
            margin: '10px',
            padding: '5px',
            letterSpacing: '4px',
            borderBottom: '2px solid #1e1e1e',
        },
    },
})

function Clocks({ classes }) {
    return (
        <div>
            <div className={classes.SmallSectionTitle}>
                <h2>Digital Clock</h2>
            </div>
            <ClockDigital />

            <div className={classes.SmallSectionTitle}>
                <h2>Clock Neumorphism</h2>
            </div>
            <div className={classes.clockNeumorphismContainer}>
                <ClockNeumorphism />
            </div>
        </div>
    )
}

export default (withStyles(styles)(Clocks))
