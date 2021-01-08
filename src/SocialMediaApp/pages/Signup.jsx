import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppIcon from "../images/icon.png"
// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// Redux stuff
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

const styles = (theme) => ({
    ...theme.spread
});

function Signup({ classes, history, signupUser, UI: { loading, errors } }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [handle, setHandle] = useState('')
    const [error, setError] = useState({})
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (errors) {
            setError(errors)
        }
    }, [errors])

    const handleSubmit = (event) => {
        event.preventDefault();
        // setLoading(true)
        const newUserData = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            handle: handle
        };
        signupUser(newUserData, history);
    };

    return (
        <div>
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm>
                    <img src={AppIcon} alt="monkey" className={classes.image} />
                    <Typography variant="h2" className={classes.pageTitle}>
                        Signup
                    </Typography>
                    <form noValidate onSubmit={handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            className={classes.textField}
                            helperText={error.email}
                            error={error.email ? true : false}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            className={classes.textField}
                            helperText={error.password}
                            error={error.password ? true : false}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            className={classes.textField}
                            helperText={error.confirmPassword}
                            error={error.confirmPassword ? true : false}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            id="handle"
                            name="handle"
                            type="text"
                            label="Handle"
                            className={classes.textField}
                            helperText={error.handle}
                            error={error.handle ? true : false}
                            value={handle}
                            onChange={(e) => setHandle(e.target.value)}
                            fullWidth
                        />
                        {error.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {error.general}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            disabled={loading}
                        >
                            Signup
                        {loading && (
                                <CircularProgress size={30} className={classes.progress} />
                            )}
                        </Button>
                        <br />
                        <small>
                            already have an account ? login <Link to="/socialMediaApp/login">here</Link>
                        </small>
                    </form>
                </Grid>
                <Grid item sm />
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

export default connect(mapStateToProps, { signupUser })(withStyles(styles)(Signup))