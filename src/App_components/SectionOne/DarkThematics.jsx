import React from 'react'
// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
// components
import VideoEffect from "../../components/video/video"
import TypewriterEffect from "../../components/typewriter_effect/TypewriterEffect"

const styles = (theme) => ({
    ...theme.spread,
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

function DarkThematics({ classes }) {
    return (
        <div>
            <div className={classes.SmallSectionTitle}><h2>Typewriter Effect</h2></div>
            <TypewriterEffect />
            <div className={classes.SmallSectionTitle}><h2>Video</h2></div>
            <VideoEffect />
        </div>
    )
}

export default (withStyles(styles)(DarkThematics))