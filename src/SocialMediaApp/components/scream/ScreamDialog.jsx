import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
import LikeButton from './LikeButton';
import Comments from './Comments';
import CommentForm from './CommentForm';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// MUI Stuff
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Icons
import CloseIcon from '@material-ui/icons/Close';
import UnfoldMore from '@material-ui/icons/UnfoldMore';
import ChatIcon from '@material-ui/icons/Chat';
// Redux stuff
import { connect } from 'react-redux';
import { getScream, clearErrors } from '../../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.spread,
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        objectFit: 'cover'
    },
    dialogContent: {
        padding: 20
    },
    closeButton: {
        position: 'absolute',
        left: '90%'
    },
    expandButton: {
        position: 'absolute',
        left: '90%'
    },
    spinnerDiv: {
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50
    }
});

function ScreamDialog({ classes, openDialog, getScream, clearErrors, screamId, userHandle, scream, UI: { loading } }) {
    const [open, setOpen] = useState(false)
    const [oldPath, setOldPath] = useState('')
    const [newPath, setNewPath] = useState('')

    useEffect(() => {
        if (openDialog)
            handleOpen()
    }, [openDialog])

    const handleOpen = () => {
        let _oldPath = window.location.pathname;

        const _newPath = `/socialMediaApp/scream/${screamId}/users/${userHandle}`;

        if (_oldPath === _newPath) _oldPath = `/socialMediaApp/users/${userHandle}`;

        window.history.pushState(null, null, _newPath);

        setOpen(true)
        setOldPath(_oldPath)
        setNewPath(_newPath)
        getScream(screamId);
    };

    const handleClose = () => {
        window.history.pushState(null, null, oldPath);
        setOpen(false)
        clearErrors();
    };

    const dialogMarkup = loading ? (
        <div className={classes.spinnerDiv}>
            <CircularProgress size={200} thickness={2} />
        </div>
    ) : (
            <Grid container spacing={16}>
                <Grid item sm={5}>
                    <img src={scream.userImage} alt="Profile" className={classes.profileImage} />
                </Grid>
                <Grid item sm={7}>
                    <Typography
                        component={Link}
                        color="primary"
                        variant="h5"
                        to={`/socialMediaApp/users/${scream.userHandle}`}
                    >
                        @{scream.userHandle}
                    </Typography>
                    <hr className={classes.invisibleSeparator} />
                    <Typography variant="body2" color="textSecondary">
                        {dayjs(scream.createdAt).format('h:mm a, MMMM DD YYYY')}
                    </Typography>
                    <hr className={classes.invisibleSeparator} />
                    <Typography variant="body1">{scream.body}</Typography>
                    <LikeButton screamId={scream.screamId} />
                    <span>{scream.likeCount} likes</span>
                    <MyButton tip="comments">
                        <ChatIcon color="primary" />
                    </MyButton>
                    <span>{scream.commentCount} comments</span>
                </Grid>
                <hr className={classes.visibleSeparator} />
                <CommentForm screamId={scream.screamId} />
                <Comments comments={scream.comments} />
            </Grid>
        );

    return (
        <>
            <MyButton
                onClick={() => handleOpen()}
                tip="Expand scream"
                tipClassName={classes.expandButton}
            >
                <UnfoldMore color="primary" />
            </MyButton>
            <Dialog
                open={open}
                onClose={() => handleClose()}
                fullWidth
                maxWidth="sm"
            >
                <MyButton
                    tip="Close"
                    onClick={() => handleClose()}
                    tipClassName={classes.closeButton}
                >
                    <CloseIcon />
                </MyButton>
                <DialogContent className={classes.dialogContent}>
                    {dialogMarkup}
                </DialogContent>
            </Dialog>
        </>
    )
}

const mapStateToProps = (state) => ({
    scream: state.data.scream,
    UI: state.UI
});

const mapActionsToProps = {
    getScream,
    clearErrors
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(withStyles(styles)(ScreamDialog));