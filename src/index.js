import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// App
import App from './App'
// Animated Website
import AnimatedWebsite from './components/animated_website/animatedWebsite'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/animatedWebsite" component={AnimatedWebsite} />
        </Switch>
    </BrowserRouter>
    , document.querySelector('#root'))