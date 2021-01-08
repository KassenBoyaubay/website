import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
// MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// Icons
import EditIcon from '@material-ui/icons/Edit';
// Redux stuff
import { connect } from 'react-redux';
import { editUserDetails } from '../../redux/actions/userActions';

const styles = (theme) => ({
    ...theme.spread,
    button: {
        float: 'right'
    }
});

function EditDetails({ classes, credentials, editUserDetails }) {
    const [bio, setBio] = useState('')
    const [website, setWebsite] = useState('')
    const [location, setLocation] = useState('')
    const [open, setopen] = useState(false)

    useEffect(() => {
        mapUserDetailsToState(credentials);
    }, [])

    const mapUserDetailsToState = (credentials) => {
        setBio(credentials.bio ? credentials.bio : '')
        setWebsite(credentials.website ? credentials.website : '')
        setLocation(credentials.location ? credentials.location : '')
    };

    const handleOpen = () => {
        setopen(true)
        mapUserDetailsToState(credentials);
    };

    const handleClose = () => {
        setopen(false)
    };

    const handleChange = (event) => {
        event.target.name == 'bio' ? setBio(event.target.value) : event.target.name == 'website' ? setWebsite(event.target.value) : event.target.name == 'location' ? setLocation(event.target.value) : console.log('handleChange error')
    };

    const handleSubmit = () => {
        const userDetails = {
            bio: bio,
            website: website,
            location: location
        };
        editUserDetails(userDetails);
        handleClose();
    };

    return (
        <>
            <MyButton
                tip="Edit Details"
                onClick={() => handleOpen()}
                btnClassName={classes.button}
            >
                <EditIcon color="primary" />
            </MyButton>
            <Dialog
                open={open}
                onClose={() => handleClose()}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Edit your details</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            name="bio"
                            tpye="text"
                            label="Bio"
                            multiline
                            rows="3"
                            placeholder="A short bio about yourself"
                            className={classes.textField}
                            value={bio}
                            onChange={(e) => handleChange(e)}
                            fullWidth
                        />
                        <TextField
                            name="website"
                            tpye="text"
                            label="Website"
                            placeholder="Your personal/professinal website"
                            className={classes.textField}
                            value={website}
                            onChange={(e) => handleChange(e)}
                            fullWidth
                        />
                        <TextField
                            name="location"
                            tpye="text"
                            label="Location"
                            placeholder="Where you live"
                            className={classes.textField}
                            value={location}
                            onChange={(e) => handleChange(e)}
                            fullWidth
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose()} color="primary">
                        Cancel
            </Button>
                    <Button onClick={() => handleSubmit()} color="primary">
                        Save
            </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

const mapStateToProps = (state) => ({
    credentials: state.user.credentials
});

export default connect(mapStateToProps, { editUserDetails })(withStyles(styles)(EditDetails));