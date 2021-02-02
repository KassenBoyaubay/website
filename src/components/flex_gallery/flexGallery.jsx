import React from "react";
import "./flexGallery.css";

import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

const FlexGallery = () => {
  return (
    <div className="FlexGallery">
      <div className="fg-container">
        {[
          { img: img1, name: "DANCE" },
          { img: img2, name: "GYM" },
          { img: img3, name: "YOGA" },
        ].map((item) => {
          return (
            <div className="fg-col">
              <h2>{item.name}</h2>
              <div className="caption">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                  placeat minima, illum sapiente quod beatae temporibus
                  exercitationem recusandae aliquam repudiandae?
                </p>
                <button type="button">Know More</button>
              </div>
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlexGallery;
