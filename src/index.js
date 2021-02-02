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
// Bootstrap Portfolio
import BootstrapPortfolio from "./components/bootstrap_portfolio/bootstrapPortfolio";
// Contact Form
import ContactForm from "./components/contact_form/contactForm";
// Weather API
import WeatherAPI from "./components/weather_api/weatherAPI";
// Book List
import BookList from "./components/book_list/bookList";
// Hangman
import Hangman from "./components/hangman/App";
// Minesweeper
import Minesweeper from "./components/minesweeper/minesweeper"
// Pixel Art
import PixelArt from "./components/PixelArt/PixelArt";
// Snake game
import SnakeGame from "./components/SnakeGame/SnakeGame";
// Clocks
import Clocks from "./App_components/SectionOne/Clocks"
// DarkThematics
import DarkThematics from "./App_components/SectionOne/DarkThematics"
// LightThematics
import LightThematics from "./App_components/SectionOne/LightThematics"
// OtherProjects
import OtherProjects from "./App_components/SectionOne/OtherProjects"
// Amazon App
import AmazonApp from "./AmazonApp/AmazonApp";
import reducer, { initialState } from "./AmazonApp/reducer";
import { StateProvider } from "./AmazonApp/StateProvider";
// Facebook Messenger App
import FacebookMessengerApp from "./FacebookMessengerApp/FacebookMessengerApp";
// Social Media App
import SocialMediaApp from "./SocialMediaApp/SocialMediaApp"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/animatedWebsite" component={AnimatedWebsite} />
      <Route path="/bootstrapPortfolio" component={BootstrapPortfolio} />
      <Route path="/contactForm" component={ContactForm} />
      <Route path="/weatherAPI" component={WeatherAPI} />
      <Route path="/bookList" component={BookList} />
      <Route path="/hangman" component={Hangman} />
      <Route path="/minesweeper" component={Minesweeper} />
      <Route path="/pixelArt" component={PixelArt} />
      <Route path="/snakeGame" component={SnakeGame} />
      <Route path="/clocks" component={Clocks} />
      <Route path="/darkThematics" component={DarkThematics} />
      <Route path="/lightThematics" component={LightThematics} />
      <Route path="/otherProjects" component={OtherProjects} />
      <Route path="/facebookMessengerApp" component={FacebookMessengerApp} />
      <Route path="/socialMediaApp" component={SocialMediaApp} />
      <StateProvider initialState={initialState} reducer={reducer}>
        <Route path="/amazonApp" component={AmazonApp} />
      </StateProvider>
    </Switch>
  </BrowserRouter>,
  document.querySelector("#root")
);
