import React from "react";
import "./contentSlider.scss";
import { useEffect } from "react";

const content = [
  {
    quote:
      "“At eight o'clock a steward entered the car and announced that the time for going to bed had arrived; and in a few minutes the car was transformed into a dormitory.”",
    cite: '- "Around the World in 80 Days" by Jules Verne',
  },
  {
    quote:
      "“The backs of the seats were thrown back, bedsteads carefully packed were rolled out by an ingenious system, berths were suddenly improvised, and each traveller had soon at his disposition a comfortable bed, protected from curious eyes by thick curtains. The sheets were clean and the pillows soft. It only remained to go to bed and sleep which everybody did—while the train sped on across the State of California.”",
    cite: '- "Around the World in 80 Days" by Jules Verne',
  },
  {
    quote:
      "“The country between San Francisco and Sacramento is not very hilly. The Central Pacific, taking Sacramento for its starting-point, extends eastward to meet the road from Omaha.”",
    cite: '- "Around the World in 80 Days" by Jules Verne',
  },
  {
    quote:
      "“The line from San Francisco to Sacramento runs in a north-easterly direction, along the American River, which empties into San Pablo Bay. The one hundred and twenty miles between these cities were accomplished in six hours, and towards midnight, while fast asleep, the travellers passed through Sacramento; so that  they saw nothing of that important place, the seat of the State government, with its fine quays, its broad streets, its noble hotels, squares, and churches.”",
    cite: '- "Around the World in 80 Days" by Jules Verne',
  },
  {
    quote:
      "“The train, on leaving Sacramento, and passing the junction, Roclin, Auburn, and Colfax, entered the range of the Sierra Nevada. 'Cisco was reached at seven in the morning; and an hour later the dormitory was transformed into an ordinary car, and the travellers could observe the picturesque beauties of the mountain region through which they were steaming. The railway track wound in and out among the passes, now approaching the mountain-sides, now suspended over precipices, avoiding abrupt angles by bold curves, plunging into narrow defiles, which seemed to have no outlet. The locomotive, its great funnel emitting a weird light, with its sharp bell, and its cow-catcher extended like a spur, mingled its shrieks and bellowings with the noise of torrents and cascades, and twined its smoke among the branches of the gigantic pines.”",
    cite: '- "Around the World in 80 Days" by Jules Verne',
  },
  {
    quote:
      " “There were few or no bridges or tunnels on the route. The railway turned around the sides of the mountains, and did not attempt to violate nature by taking the shortest cut from one point to another.”",
    cite: '- "Around the World in 80 Days" by Jules Verne',
  },
];
const slideCount = content.length;
var slides = document.getElementsByClassName("slide"),
  slider = document.getElementById("slider"),
  cursor = 0,
  topHeight = 0,
  slideWidth = 0;

const ContentSlider = () => {
  useEffect(() => {
    // Get the slide width
    slideWidth = slides[0].offsetWidth;
    // Calculate tallest slide
    calculateTallestSlide();
    // Add the animated class to each slide
    for (let i = 0; i < slideCount; i++) {
      slides[i].classList.add("animated");
    }
    // Add event listener for window resize
    const resize = (event) => {
      // Get the new slide width
      slideWidth = slides[0].offsetWidth;

      // Recalculate the left position of the slides
      for (let i = 0; i < slides.length; i++) {
        if (i <= cursor) {
          slides[i].style.left = "-" + slideWidth * (cursor - i) + "px";
        } else if (i > cursor) {
          slides[i].style.left = slideWidth * (i - cursor) + "px";
        }
      }

      // Recalculate the height of the tallest slide
      calculateTallestSlide();
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const next = (e, next) => {
    e.preventDefault();
    if (next) {
      if (cursor < slideCount - 1) {
        moveSlides("forward");
        cursor++;
      }
    } else {
      if (cursor > 0) {
        moveSlides("backward");
        cursor--;
      }
    }
  };

  // Declare a function that calculates the tallest slide
  function calculateTallestSlide() {
    for (let i = 0; i < slideCount; i++) {
      if (slides[i].offsetHeight > topHeight) {
        topHeight = slides[i].offsetHeight;
      }
    }
  }

  // Declare a function that will change the slide position
  function moveSlides(direction) {
    for (var j = 0; j < slides.length; j++) {
      if (direction == "backward") {
        slides[j].style.left =
          +slides[j].style.left.replace(/[^-\d\.]/g, "") + slideWidth + "px";
      } else if (direction == "forward") {
        slides[j].style.left =
          +slides[j].style.left.replace(/[^-\d\.]/g, "") - slideWidth + "px";
      }
    }
  }

  return (
    <div className="ContentSlider">
      <div className="cs-container">
        <ul
          className="slider-container simple-list"
          id="slider"
          style={{ height: `${topHeight}px` }}
        >
          {content.map((item, i) => (
            <li className="slide" style={{ left: `${slideWidth * i}px` }}>
              <blockquote>{item.quote}</blockquote>
              <cite>{item.cite}</cite>
            </li>
          ))}
        </ul>
        <a href="#" id="prev" onClick={(e) => next(e, false)}></a>
        <a href="#" id="next" onClick={(e) => next(e, true)}></a>
      </div>
    </div>
  );
};

export default ContentSlider;
