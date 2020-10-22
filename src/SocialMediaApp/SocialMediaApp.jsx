import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./SocialMediaApp.module.scss"
import jwtDecode from 'jwt-decode';
// theme
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import themeObject from "./util/theme"
// pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// components
import Navbar from "./components/Navbar"
import AuthRoute from "./util/AuthRoute"

const theme = createMuiTheme(themeObject)

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
        // store.dispatch(logoutUser());
        window.location.href = '/socialMediaApp/login';
        authenticated = false
    } else {
        // store.dispatch({ type: SET_AUTHENTICATED });
        // axios.defaults.headers.common['Authorization'] = token;
        // store.dispatch(getUserData());
        authenticated = true
    }
}

function SocialMediaApp() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className={styles.SocialMediaApp}>
                <Navbar />
                <div className={styles.container}>
                    <Switch>
                        <AuthRoute path="/socialMediaApp/login" component={Login} aithenticated={authenticated} />
                        <AuthRoute path="/socialMediaApp/signup" component={Signup} aithenticated={authenticated} />
                        <Route path="/socialMediaApp" component={Home} />
                    </Switch>
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default SocialMediaApp
