import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Sass
import "./sass/main.scss";

// App
import App from "./App";
// Animated Website
import AnimatedWebsite from "./components/animated_website/animatedWebsite";
// Bootstrap Template
import BootstrapTemplate from "./components/bootstrap_template/bootstrapTemplate";
// Bootstrap Portfolio
import BootstrapPortfolio from "./components/bootstrap_portfolio/bootstrapPortfolio";
// Contact Form
import ContactForm from "./components/contact_form/contactForm";
// SVG Bubbles example
import SVGBubbles_example from "./components/SVG_section_dividers_1/SVGBubbles_example";
// SVG examples
import SVG_example from "./components/SVG_section_divider_2/SVG_example";
// Weather API
import WeatherAPI from "./components/weather_api/weatherAPI";
// Book List
import BookList from "./components/book_list/bookList";
// Hangman
import Hangman from "./components/hangman/App";
// Amazon App
import AmazonApp from "./AmazonApp/AmazonApp";
import reducer, { initialState } from "./AmazonApp/reducer";
import { StateProvider } from "./AmazonApp/StateProvider";
// Facebook Messenger App
import FacebookMessengerApp from "./FacebookMessengerApp/FacebookMessengerApp";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/animatedWebsite" component={AnimatedWebsite} />
      <Route path="/bootstrapTemplate" component={BootstrapTemplate} />
      <Route path="/bootstrapPortfolio" component={BootstrapPortfolio} />
      <Route path="/contactForm" component={ContactForm} />
      <Route path="/SVGBubbles_example" component={SVGBubbles_example} />
      <Route path="/SVG_example" component={SVG_example} />
      <Route path="/weatherAPI" component={WeatherAPI} />
      <Route path="/bookList" component={BookList} />
      <Route path="/hangman" component={Hangman} />
      <Route path="/facebookMessengerApp" component={FacebookMessengerApp} />
      <StateProvider initialState={initialState} reducer={reducer}>
        <Route path="/amazonApp" component={AmazonApp} />
      </StateProvider>
    </Switch>
  </BrowserRouter>,
  document.querySelector("#root")
);
