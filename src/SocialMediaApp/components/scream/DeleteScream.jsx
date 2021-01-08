import React from 'react'
import { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
// MUI Stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
// Icons
import DeleteOutline from '@material-ui/icons/DeleteOutline';
// Redux
import { connect } from 'react-redux';
import { deleteScream } from '../../redux/actions/dataActions';

const styles = {
    deleteButton: {
        position: 'absolute',
        left: '90%',
        top: '10%'
    }
};

function DeleteScream({ classes, deleteScream, screamId }) {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const toDeleteScream = () => {
        deleteScream(screamId)
        setOpen(false)
    }

    return (
        <>
            <MyButton tip="Delete Scream" onClick={() => handleOpen()} btnClassName={classes.deleteButton}>
                <DeleteOutline color="secondary" />
            </MyButton>
            <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth="sm">
                <DialogTitle>
                    Are you sure you want to delete this scream?
              </DialogTitle>
                <DialogActions>
                    <Button onClick={() => handleClose()} color="primary">
                        Cancel
                  </Button>
                    <Button onClick={() => toDeleteScream()} color="secondary">
                        Delete
                  </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default connect(null, { deleteScream })(withStyles(styles)(DeleteScream))
