import React, { useEffect, useState } from "react";

import data from "./data.js";

const SliderReview = () => {
  const [people] = useState(data);
  const [position, setPosition] = useState(
    Array(data.length)
      .fill("next")
      .map((item, i) => {
        return i === 0
          ? (item = "active")
          : data.length <= 1
            ? (item = "active")
            : (item);
      })
  );
  const [active, setActive] = useState(0);

  const startSlider = (type) => {
    if (data.length >= 1) {
      if (type === "prev") {
        setPosition(
          position.map((item, i) => {
            return i === active
              ? (item = "next")
              : (i < position.length - 1 && i + 1 === active) ||
                (i === position.length - 1 && 0 === active)
                ? (item = "active")
                : (item = item);
          })
        );
      } else {
        setPosition(
          position.map((item, i) => {
            return i === active
              ? (item = "next")
              : (i > 0 && i - 1 === active) ||
                (i === 0 && position.length - 1 === active)
                ? (item = "active")
                : (item);
          })
        );
      }
    }
  };

  useEffect(() => {
    let k;
    position.forEach((item, i) => {
      if (item === "active") k = i;
    });
    setActive(k);
  }, [position]);

  return (
    <div className="mySass SliderReview">
      <section className="slider">
        <div className="reviews">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="slide-container">
          {people.map((person, slideIndex) => {
            const { img, name, job, text } = person;
            return (
              <article className={`slide ${position[slideIndex]}`}>
                <img src={img} className="img" alt={name} />
                <h4>{name}</h4>
                <p className="title">{job}</p>
                <p className="text">{text}</p>
                <div className="quote-icon">
                  <i className="fas fa-quote-right"></i>
                </div>
              </article>
            );
          })}
          {!people.length && (
            <article className="slide">
              <img
                src="https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg"
                className="img"
                alt="peter doe"
              />
              <h4>peter doe</h4>
              <p className="title">product designer</p>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quo eius recusandae officia voluptas sint deserunt dicta nihil
                nam omnis?
              </p>
              <div className="quote-icon">
                <i className="fas fa-quote-right"></i>
              </div>
            </article>
          )}
        </div>
        <button
          className="btn prev-btn"
          style={{ display: `${data.length <= 1 ? "none" : "block"}` }}
          onClick={() => startSlider("prev")}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="btn next-btn"
          style={{ display: `${data.length <= 1 ? "none" : "block"}` }}
          onClick={() => startSlider()}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </section>
    </div>
  );
};

export default SliderReview;
