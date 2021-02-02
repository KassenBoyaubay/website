import React, { useState } from "react";

const Allreviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const Reviews = () => {
  const [reviews] = useState(Allreviews);
  const [index, setIndex] = useState(0);

  const next = (cond) => {
    if (cond) {
      if (index < reviews.length - 1) setIndex(index + 1);
      else setIndex(0);
    } else {
      if (index > 0) setIndex(index - 1);
      else setIndex(reviews.length - 1);
    }
  };

  const random = () => {
    setIndex(Math.floor(Math.random() * reviews.length));
  };

  return (
    <div className="mySass Reviews">
      <main>
        <section class="r-container">
          <div class="title">
            <h2>our reviews</h2>
            <div class="underline"></div>
          </div>
          <article class="review">
            <div class="img-container">
              <img src={reviews[index].img} id="person-img" alt="" />
            </div>
            <h4 id="author">{reviews[index].name}</h4>
            <p id="job">{reviews[index].job}</p>
            <p id="info">{reviews[index].text}</p>
            <div class="button-container">
              <button class="prev-btn" onClick={() => next(false)}>
                <i class="fas fa-chevron-left"></i>
              </button>
              <button class="next-btn" onClick={() => next(true)}>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
            <button class="random-btn" onClick={() => random()}>
              surprise me
            </button>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Reviews;
