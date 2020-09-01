import React, { useState } from "react";
import "./imageLightbox.scss";

import img1 from "./images/image-thumb-1.jpeg";
import img2 from "./images/image-thumb-2.jpeg";
import img3 from "./images/image-thumb-3.jpeg";
import img4 from "./images/image-thumb-4.jpeg";
import img5 from "./images/image-thumb-5.jpeg";
import img6 from "./images/image-thumb-6.jpeg";

const ImageLightbox = () => {
  const [overlayImage, setOverlayImage] = useState("");
  const [visible, setVisible] = useState("");

  const imageClick = (e) => {
    e.preventDefault();
    setOverlayImage(e.target.src);
    setVisible("visible");
  };

  const imageUnClick = (e) => {
    e.preventDefault();
    setVisible("");
  };

  return (
    <div className="ImageLightbox">
      <div className="gallery-container">
        <ul className="gallery">
          <Image image={img1} imageClick={imageClick} />
          <Image image={img2} imageClick={imageClick} />
          <Image image={img3} imageClick={imageClick} />
          <Image image={img4} imageClick={imageClick} />
          <Image image={img5} imageClick={imageClick} />
          <Image image={img6} imageClick={imageClick} />
        </ul>
      </div>

      <div
        id="lightbox-overlay"
        class={visible}
        onClick={(e) => imageUnClick(e)}
      >
        <img
          src={overlayImage}
          alt="Lightbox image"
          title="Click anywhere to close"
          id="lightbox-image"
        />
      </div>
    </div>
  );
};

const Image = ({ image, imageClick }) => {
  return (
    <li>
      <a href="#" alt="Gallery image">
        <img
          src={image}
          data-lightbox={image}
          alt="Gallery image"
          onClick={(e) => imageClick(e)}
        />
      </a>
    </li>
  );
};

export default ImageLightbox;
