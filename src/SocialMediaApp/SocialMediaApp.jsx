import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./SocialMediaApp.module.scss"
// pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// components
import Navbar from "./components/Navbar"

function SocialMediaApp() {
    return (
        <div>
            <div className="SocialMediaApp">
                <Navbar />
                <div className={styles.container}>
                    <Switch>
                        <Route path="/socialMediaApp/login">
                            <Login />
                        </Route>
                        <Route path="/socialMediaApp/signup">
                            <Signup />
                        </Route>
                        <Route path="/socialMediaApp">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaApp
