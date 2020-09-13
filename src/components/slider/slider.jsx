import React, { useEffect, useState } from "react";

import img1 from "./img-1.jpeg";
import person1 from "./person-1.jpeg";

const Slider = () => {
  const [counter, setCounter] = useState(0);
  const [next, setNext] = useState("block");
  const [prev, setPrev] = useState("none");

  const slides = document.querySelectorAll(".s-slide");
  slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });

  useEffect(() => {
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }, [counter]);

  return (
    <div className="mySass Slider">
      <div class="slider-container">
        <div class="s-slide">
          <img src={img1} class="slide-img" alt="" />
          <h1>1</h1>
        </div>
        <div class="s-slide">
          <h1>2</h1>
        </div>
        <div class="s-slide">
          <h1>3</h1>
        </div>
        <div class="s-slide">
          <div>
            <img src={person1} class="person-img" alt="" />
            <h4>susan doe</h4>
            <h1>4</h1>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <button
          type="button"
          class="prevBtn"
          style={{ display: `${prev}` }}
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
              setNext("block");
              if (counter != 1) {
                setPrev("block");
              } else {
                setPrev("none");
              }
            } else {
              setCounter(counter);
              setPrev("none");
            }
          }}
        >
          prev
        </button>
        <button
          type="button"
          class="nextBtn"
          style={{ display: `${next}` }}
          onClick={() => {
            if (counter < slides.length - 1) {
              setCounter(counter + 1);
              setPrev("block");
              if (counter != slides.length - 2) {
                setNext("block");
              } else {
                setNext("none");
              }
            } else {
              setCounter(counter);
              setNext("none");
            }
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Slider;
