import React, { useState } from "react";
import { useEffect } from "react";

import Video from "./video.mp4";
import preloader from "./preloader.gif";

const VideoEffect = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="mySass VideoEffect">
      <div className="te-button">
        <button onClick={() => setShow(!show)}>Show Video</button>
      </div>
      {show && <VideoMain />}
    </div>
  );
};

const VideoMain = () => {
  const [slide, setSlide] = useState("");
  const [preload, setPreload] = useState("");

  useEffect(() => {
    setPreload("hide-preloader");
  }, []);

  const video = document.querySelector(".video-container");

  const videoClick = () => {
    if (slide === "") {
      setSlide("slide");
      video.pause();
    } else {
      setSlide("");
      video.play();
    }
  };
  return (
    <div>
      <div className={`preloader ${preload}`}>
        <img src={preloader} alt="preloader" className="preloader__item" />
      </div>
      <header>
        <video
          controls
          muted
          autoPlay
          loop
          className="video-container"
          src={Video}
          type="video/mp4"
        />
        <h1>video project</h1>
        <button className={`switch-btn ${slide}`} onClick={() => videoClick()}>
          <span>play</span>
          <span>pause</span>
          <span className="switch"></span>
        </button>
      </header>
    </div>
  );
};

export default VideoEffect;
