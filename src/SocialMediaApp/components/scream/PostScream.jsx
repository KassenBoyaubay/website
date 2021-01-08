import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
// MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
// Redux stuff
import { connect } from 'react-redux';
import { postScream, clearErrors } from '../../redux/actions/dataActions';

const styles = theme => ({
    ...theme.spread,
    submitButton: {
        position: 'relative'
    },
    progressSpiner: {
        position: 'absolute'
    },
    closeButton: {
        position: 'absolute',
        left: '90%',
        top: '10%'
    }
})

const NavSvg = {
    color: "#fff"
}

function PostScream({ classes, UI: { loading, errors }, postScream, clearErrors }) {
    const [open, setOpen] = useState(false)
    const [body, setBody] = useState('')
    const [localErrors, setLocalErrors] = useState({})

    useEffect(() => {
        if (errors)
            setLocalErrors(errors)
        else if (!errors && !loading) {
            setOpen(false)
            setBody('')
            setLocalErrors({})
        }
    }, [errors])

    const handleOpen = () => {
        clearErrors()
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setLocalErrors({})
    }

    const handleChange = (event) => {
        setBody(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postScream({ body: body });
        handleClose()
    };

    return (
        <>
            <MyButton tip="Post a Scream!" onClick={() => handleOpen()}>
                <AddIcon style={NavSvg} />
            </MyButton>
            <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth="sm">
                <MyButton tip="Close" onClick={() => handleClose()} tipClassName={classes.closeButton}>
                    <CloseIcon />
                </MyButton>
                <DialogTitle>Post a new scream</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <TextField
                            name="body"
                            type="text"
                            label="SCREAM!!"
                            multiline
                            rows="3"
                            placeholder="Scream at your fellow apes"
                            error={localErrors.body ? true : false}
                            helperText={localErrors.body}
                            className={classes.textField}
                            onChange={(e) => handleChange(e)}
                            fullWidth
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                            disabled={loading || !/\S/.test(body)}
                        >
                            Submit
                {loading && (
                                <CircularProgress
                                    size={30}
                                    className={classes.progressSpinner}
                                />
                            )}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

const mapStateToProps = state => ({
    UI: state.UI
})

export default connect(mapStateToProps, { postScream, clearErrors })(withStyles(styles)(PostScream))
