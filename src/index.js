import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
// Minesweeper
import Minesweeper from "./components/minesweeper/minesweeper";

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
      <Route path="/minesweeper" component={Minesweeper} />
    </Switch>
  </BrowserRouter>,
  document.querySelector("#root")
);
