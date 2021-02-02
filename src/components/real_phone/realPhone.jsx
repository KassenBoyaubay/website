import React, { useState } from "react";
import "./realPhone.css";

import arrow from "./images/arrow.png";
import battery from "./images/battery.png";
import camera from "./images/camera.png";
import display from "./images/display.png";
import logo from "./images/logo.png";
import mobile from "./images/mobile.png";
import processor from "./images/processor.png";

const RealPhone = () => {
  const [circle, setCircle] = useState("");
  const [rotateValue, setRotateValue] = useState("");

  var rotateSum;

  const rotate = (sign) => {
    rotateSum = rotateValue + `rotate(${sign}90deg)`;
    setCircle(rotateSum);
    setRotateValue(rotateSum);
  };

  return (
    <div className="RealPhone">
      <div className="main">
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <span>Home</span>
              </li>
              <li>
                <span>Phone</span>
              </li>
              <li>
                <span>Accessories</span>
              </li>
              <li>
                <span>Cart</span>
              </li>
            </ul>
          </div>
        </nav>
        <div className="information">
          <div className="overlay"></div>
          <img className="mobile" src={mobile} alt="" />
          <div id="circle" style={{ transform: circle }}>
            <div className="feature one">
              <img alt="" src={camera} />
              <div>
                <h1>Camera</h1>
                <p>12 MP, Wide Angle Lens</p>
              </div>
            </div>
            <div className="feature two">
              <img alt="" src={processor} />
              <div>
                <h1>Processor</h1>
                <p>Snapdragon Octa-core 11nms</p>
              </div>
            </div>
            <div className="feature three">
              <img alt="" src={display} />
              <div>
                <h1>Display</h1>
                <p>6.5 Mini-Drop Fullscreen</p>
              </div>
            </div>
            <div className="feature four">
              <img alt="" src={battery} />
              <div>
                <h1>Battery Life</h1>
                <p>5000mAh, 720Hrs Standby</p>
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <img src={arrow} id="upBtn" alt="" onClick={() => rotate("-")} />
          <h3>Features</h3>
          <img src={arrow} id="downBtn" alt="" onClick={() => rotate("+")} />
        </div>
      </div>
    </div>
  );
};

export default RealPhone;
