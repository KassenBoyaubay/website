import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import styles from "./App.module.scss"

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
import Tabs1 from "./components/tabs1/tabs1";
import Tabs2 from "./components/tabs2/tabs2";
import AutocompleteVanilla from "./components/autocomplete_vanilla/autocompleteVanilla";
import ColorFlipper from "./components/color_flipper/colorFlippper";
import Counter from "./components/counter/counter";
import Reviews from "./components/reviews/reviews";
import Sidebar from "./components/sidebar/sidebar";
import Modal from "./components/modal/modal";
import Questions from "./components/questions/questions";
import Menu from "./components/menu/menu";
import VideoEffect from "./components/video/video";
import CountdownTimer from "./components/countdown_timer/countdownTimer";
import TextGenerator from "./components/text_generator/textGenerator";
import TodoVanilla from "./components/todo_vanilla/todoVanilla";
import Slider from "./components/slider/slider";
import SliderReview from "./components/slider_review/sliderReview";
import ReactHooks from "./react_hooks/ReactHooks";
import PixelArt from "./components/PixelArt/PixelArt";
import SnakeGame from "./components/SnakeGame/SnakeGame";
import TypingTest from "./components/typing_test/TypingTest";

import Loading from "./App_components/Loading/Loading";
import Intro from "./App_components/Intro/Intro";
import HomeIntro from "./App_components/HomeIntro/HomeIntro";

const App = () => {
  const name = "Kas";
  const age = 26;

  const [todos, setTodos] = useState([]);
  //Loaded website?
  const [loaded, setLoaded] = useState(false);
  // skip intro
  const [skipIntro, setSkipIntro] = useState(false)

  // When website is loaded
  useEffect(() => {
    setLoaded(true);
    checkSkipIntro()
  }, []);

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

  const checkSkipIntro = () => {
    if (JSON.parse(localStorage.getItem("skipIntro")) === 'true') {
      setSkipIntro(true)
    }
  }

  if (!loaded) return <Loading />;
  else
    return (
      <div className={styles.App}>
        <section>
          {!skipIntro && <Intro />}
        </section>
        <HomeIntro skip={skipIntro} />
        <h1>
          Hell
          <span>
            <i className="fa fa-spinner fa-spin"></i>
          </span>{" "}
          React{" "}
        </h1>

        <div className={styles.SectionTitle}><h2>Neon Button Light</h2></div>
        <div style={buttonNeonContainer}>
          <ButtonNeon name={"Neon Button"} />
        </div>

        <div className={styles.SectionTitle}><h2>Digital Clock</h2></div>
        <ClockDigital />

        <div className={styles.SectionTitle}><h2>Clock Neumorphism</h2></div>
        <div style={clockNeumorphismContainer}>
          <ClockNeumorphism />

        </div>

        <div className={styles.SectionTitle}><h2>Dark Light Toggle Mode</h2></div>
        <ToggleMode />

        <div className={styles.SectionTitle}><h2>Flex Gallery</h2></div>
        <FlexGallery />

        <div className={styles.SectionTitle}><h2>Real Phone</h2></div>
        <RealPhone />

        <div className={styles.SectionTitle}><h2>Sign in/out Form</h2></div>
        <div style={signFormContainer}>
          <SignForm />
        </div>

        <div className={styles.SectionTitle}><h2>Skewed Border Box Border Hover Effect</h2></div>
        <div style={skewedBorderBoxContainer}>
          <SkewedBorderBox />
        </div>

        <div className={styles.SectionTitle}><h2>Stats Card</h2></div>
        <StatsCard />

        <div className={styles.SectionTitle}><h2>Minesweeper</h2></div>
        <Minesweeper />

        <div className={styles.SectionTitle}><h2>Content slider</h2></div>
        <ContentSlider />

        <div className={styles.SectionTitle}><h2>Image Lightbox</h2></div>
        <ImageLightbox />

        <div className={styles.SectionTitle}><h2>Typewriter Effect</h2></div>
        <TypewriterEffect />

        <div className={styles.SectionTitle}><h2>Tabs 1</h2></div>
        <Tabs1 />

        <div className={styles.SectionTitle}><h2>Tabs 2</h2></div>
        <Tabs2 />

        <div className={styles.SectionTitle}><h2>Autocomplete Vanilla</h2></div>
        <AutocompleteVanilla />

        <div className={styles.SectionTitle}><h2>Color Flipper</h2></div>
        <ColorFlipper />

        <div className={styles.SectionTitle}><h2>Counter</h2></div>
        <Counter />

        <div className={styles.SectionTitle}><h2>Reviews</h2></div>
        <Reviews />

        <div className={styles.SectionTitle}><h2>Sidebar</h2></div>
        <Sidebar />

        <div className={styles.SectionTitle}><h2>Modal</h2></div>
        <Modal />

        <div className={styles.SectionTitle}><h2>Questions</h2></div>
        <Questions />

        <div className={styles.SectionTitle}><h2>Menu</h2></div>
        <Menu />

        <div className={styles.SectionTitle}><h2>Video</h2></div>
        <VideoEffect />

        <div className={styles.SectionTitle}><h2>Countdown Timer</h2></div>
        <CountdownTimer />

        <div className={styles.SectionTitle}><h2>Text Generator</h2></div>
        <TextGenerator />

        <div className={styles.SectionTitle}><h2>Todo Vanilla</h2></div>
        <TodoVanilla />

        <div className={styles.SectionTitle}><h2>Slider</h2></div>
        <Slider />

        <div className={styles.SectionTitle}><h2>Slider Review</h2></div>
        {/* style state works for 3, if more remove style and change in scss */}
        <SliderReview />

        <div className={styles.SectionTitle}><h2>Pixel Art</h2></div>
        <PixelArt />

        <div className={styles.SectionTitle}><h2>Snake Game</h2></div>
        <SnakeGame />

        <div className={styles.SectionTitle}><h2>Typing Test</h2></div>
        <TypingTest />

        <ReactHooks />
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
          <Link to="/amazonApp">
            <button>Amazon App</button>
          </Link>
          <Link to="/facebookMessengerApp">
            <button>Facebook Messenger App</button>
          </Link>
          <Link to="/socialMediaApp">
            <button>Social Media App</button>
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
          <a href="./Scroll_Project/index.html">
            <button>Scroll Project</button>
          </a>
        </div>
        <div className="todos">
          <div className={styles.SectionTitle}><h2>ToDo API</h2></div>
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
