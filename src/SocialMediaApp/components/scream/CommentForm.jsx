import React, { useState, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
// MUI Stuff
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// Redux stuff
import { connect } from 'react-redux';
import { submitComment } from '../../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.spread
});

function CommentForm({ classes, authenticated, submitComment, screamId, UI: { errors, loading } }) {
    const [body, setBody] = useState('')
    const [localerrors, setLocalErrors] = useState({})

    useEffect(() => {
        if (errors)
            setLocalErrors(errors)
        else if (!errors && !loading) {
            setBody('')
            // setLocalErrors({})
        }
    }, [errors])

    const handleChange = (event) => {
        setBody(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitComment(screamId, { body: body });
    };

    const commentFormMarkup = authenticated ? (
        <Grid item sm={12} style={{ textAlign: 'center' }}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextField
                    name="body"
                    type="text"
                    label="Comment on scream"
                    error={localerrors.comment ? true : false}
                    helperText={localerrors.comment}
                    value={body}
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    className={classes.textField}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Submit
            </Button>
            </form>
            <hr className={classes.visibleSeparator} />
        </Grid>
    ) : null;

    return commentFormMarkup;
}

const mapStateToProps = (state) => ({
    UI: state.UI,
    authenticated: state.user.authenticated
});

export default connect(
    mapStateToProps,
    { submitComment }
)(withStyles(styles)(CommentForm));
