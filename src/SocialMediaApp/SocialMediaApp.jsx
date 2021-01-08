// https://www.youtube.com/watch?v=m_u6P5k0vP0&list=PLlBzNJv1tsht93h2D6Y1Vt0pQgYbmT4S1
// https://github.com/hidjou/classsed-react-firebase-client/tree/master/src

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./SocialMediaApp.module.scss"
import jwtDecode from 'jwt-decode';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';
// theme
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import themeObject from "./util/theme"
// pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import User from "./pages/user"
// components
import Navbar from "./components/layout/Navbar"
import AuthRoute from "./util/AuthRoute"
// axios
import axios from "axios";

const theme = createMuiTheme(themeObject)

axios.defaults.baseURL = 'https://europe-west3-website-f5daf.cloudfunctions.net/api'

const token = localStorage.FBIdToken;
if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(logoutUser());
        window.location.href = '/socialMediaApp/login';
    } else {
        store.dispatch({ type: SET_AUTHENTICATED });
        axios.defaults.headers.common['Authorization'] = token;
        store.dispatch(getUserData());
    }
}

function SocialMediaApp() {
    return (
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <div className={styles.SocialMediaApp}>
                    <Navbar />
                    <div className={styles.container}>
                        <Switch>
                            <AuthRoute path="/socialMediaApp/login" component={Login} /*aithenticated={authenticated}*/ />
                            <AuthRoute path="/socialMediaApp/signup" component={Signup} /*aithenticated={authenticated}*/ />
                            <Route path="/socialMediaApp/users/:handle" component={User} />
                            <Route path="/socialMediaApp/scream/:screamId/users/:handle" component={User} />
                            <Route path="/socialMediaApp" component={Home} />
                        </Switch>
                    </div>
                </div>
            </Provider>
        </MuiThemeProvider>
    )
}

export default SocialMediaApp
