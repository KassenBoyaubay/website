import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import AppStyledComponent from "./AppStyledComponent";

import Tweets from "./components/Tweets";
import State from "./components/State";
import ButtonNeon from "./components/button_neon_light/buttonNeon";
import ClockDigital from "./components/clock_digital/clockDigital";
import ClockNeumorphism from "./components/clock_neumorphism/clockNeumorphism";
import ToggleMode from "./components/dark_light_toggle_mode/toggleMode";
import FlexGallery from "./components/flex_gallery/flexGallery";
import RealPhone from "./components/real_phone/realPhone";
import SignForm from "./components/sign_form/signForm";
import SkewedBorderBox from "./components/skewed_border_box/skewedBorderBox";
import StatsCard from "./components/stats_card/statsCard";
import Minesweeper from "./components/minesweeper/minesweeper";
import ContentSlider from "./components/content_slider/contentSlider";
import ImageLightbox from "./components/image_lightbox/imageLightbox";
import TypewriterEffect from "./components/typewriter_effect/TypewriterEffect";
import Tabs from "./components/tabs/tabs";
import AutocompleteVanilla from "./components/autocomplete_vanilla/autocompleteVanilla";
import ColorFlipper from "./components/color_flipper/colorFlippper";
import Counter from "./components/counter/counter";
import Reviews from "./components/reviews/reviews";
import Sidebar from "./components/sidebar/sidebar";
import Modal from "./components/modal/modal";

const App = () => {
  const name = "Kas";
  const age = 26;

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fake Back-end API
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      });
  }, []);

  /*
    // Post to server (Add todo)
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })  // and after change data of states
    .then(res => this.setState({
      [...this.state.todos, res.data]
    }))
 
    // Delete from server
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  */

  const buttonNeonContainer = {
    margin: "0",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10vh",
    background: "#031321",
    fontFamily: "consolas",
  };

  const clockNeumorphismContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "40vh",
    background: "#091921",
  };

  const signFormContainer = {
    background: "#f6f5f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: ["Montserrat", "sans-serif"],
    height: "80vh",
  };

  const skewedBorderBoxContainer = {
    minHeight: "100vh",
    background: "#060c21",
  };

  return (
    <div className="App">
      <h1>
        Hell
        <span>
          <i className="fa fa-spinner fa-spin"></i>
        </span>{" "}
        React{" "}
      </h1>
      <br />
      <h2>Neon Button Light</h2>
      <div style={buttonNeonContainer}>
        <ButtonNeon name={"Neon Button"} />
      </div>
      <br />
      <h2>Digital Clock</h2>
      <ClockDigital />
      <br />
      <h2>Clock Neumorphism</h2>
      <div style={clockNeumorphismContainer}>
        <ClockNeumorphism />
        <br />
      </div>
      <br />
      <h2>Dark Light Toggle Mode</h2>
      <ToggleMode />
      <br />
      <h2>Flex Gallery</h2>
      <FlexGallery />
      <br />
      <h2>Real Phone</h2>
      <RealPhone />
      <br />
      <h2>Sign in/out Form</h2>
      <div style={signFormContainer}>
        <SignForm />
      </div>
      <br />
      <h2>Skewed Border Box Border Hover Effect</h2>
      <div style={skewedBorderBoxContainer}>
        <SkewedBorderBox />
      </div>
      <br />
      <h2>Stats Card</h2>
      <StatsCard />
      <br />
      <h2>Minesweeper</h2>
      <Minesweeper />
      <br />
      <h2>Content slider</h2>
      <ContentSlider />
      <br />
      <h2>Image Lightbox</h2>
      <ImageLightbox />
      <br />
      <h2>Typewriter Effect</h2>
      <TypewriterEffect />
      <br />
      <h2>Tabs</h2>
      <Tabs />
      <br />
      <h2>Autocomplete Vanilla</h2>
      <AutocompleteVanilla />
      <br />
      <h2>Color Flipper</h2>
      <ColorFlipper />
      <br />
      <h2>Counter</h2>
      <Counter />
      <br />
      <h2>Reviews</h2>
      <Reviews />
      <br />
      <h2>Sidebar</h2>
      <Sidebar />
      <br />
      <h2>Modal</h2>
      <Modal />
      <div className="home" style={{ display: "flex" }}>
        <Tweets me={name} age={age} />
        <Tweets me="NotKas" age="30" />
      </div>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <State />
        <br />
        <Link to="/animatedWebsite">
          <button>Animated Website</button>
        </Link>
        <Link to="/bootstrapTemplate">
          <button>Bootstrap Template</button>
        </Link>
        <Link to="/bootstrapPortfolio">
          <button>Bootstrap Portfolio</button>
        </Link>
        <Link to="/contactForm">
          <button>Contact Form</button>
        </Link>
        <Link to="/SVGBubbles_example">
          <button>SVG Bubbles example</button>
        </Link>
        <Link to="/SVG_example">
          <button>SVG example</button>
        </Link>
        <Link to="/weatherAPI">
          <button>Weather API</button>
        </Link>
        <Link to="/bookList">
          <button>Book List</button>
        </Link>
        <Link to="/hangman">
          <button>Hangman</button>
        </Link>
        <a href="./Blogger/Index.html">
          <button>Blogger</button>
        </a>
        <a href="./Books_bootstrap/src/Index.html">
          <button>Books bootstrap</button>
        </a>
        <a href="./Travelville/index.html">
          <button>Travelville</button>
        </a>
        <a href="./Plitkade/index.html">
          <button>Plitkade</button>
        </a>
        <a href="./Portfolio_1/index.html">
          <button>Portfolio_1</button>
        </a>
        <a href="./Portfolio_2_template/index.html">
          <button>Portfolio_2</button>
        </a>
        <a href="./Portfolio_3/index.html">
          <button>Portfolio_3</button>
        </a>
        <a href="./Portfolio_4/index.html">
          <button>Portfolio_4</button>
        </a>
        <a href="./Portfolio_5/Index.html">
          <button>Portfolio_5</button>
        </a>
        <a href="./Portfolio_6/dist/index.html">
          <button>Portfolio_6</button>
        </a>
        <a href="./Portfolio_7/index.html">
          <button>Portfolio_7</button>
        </a>
      </div>
      <AppStyledComponent color="blue" size="large">
        Blue
      </AppStyledComponent>
      <AppStyledComponent color="green" size="small" noBorder>
        Green
      </AppStyledComponent>
      <div className="todos">
        <h2>ToDo API</h2>
        {todos.map((todo) => (
          <p key={todo.id}>
            {todo.id}. {todo.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
