import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// App
import App from './App'
// Animated Website
import AnimatedWebsite from './components/animated_website/animatedWebsite'
// Bootstrap Template
import BootstrapTemplate from './components/bootstrap_template/bootstrapTemplate'
// Bootstrap Portfolio
import BootstrapPortfolio from './components/bootstrap_portfolio/bootstrapPortfolio'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/animatedWebsite" component={AnimatedWebsite} />
            <Route path="/bootstrapTemplate" component={BootstrapTemplate} />
            <Route path="/bootstrapPortfolio" component={BootstrapPortfolio} />
        </Switch>
    </BrowserRouter>
    , document.querySelector('#root'))