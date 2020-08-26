import React from "react";
import "./SVG_example.scss";

const SVG_example = () => {
  return (
    <div className="SVG_example">
      <div className="section-one">
        <h1>Dark Space</h1>
        {/* Place SVG here from svgs.html */}
        <svg
          className="curve"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
        </svg>
      </div>
      <div className="section-two">
        <h2>Aliens</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia
          voluptas dolor odio natus labore commodi assumenda, magnam ullam
          facilis dolores voluptates reprehenderit? Amet harum aspernatur
          veritatis modi perferendis quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          voluptas.
        </p>
      </div>
    </div>
  );
};

export default SVG_example;
