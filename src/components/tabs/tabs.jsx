import React, { useState } from "react";
import "./tabs.scss";
import { useEffect } from "react";

const Tabs = () => {
  const tabs = [
    {
      name: "Jules Verne",
      text: (
        <div>
          <p>
            The train entered the State of Nevada through the Carson Valley
            about nine o'clock, going always northeasterly; and at midday
            reached Reno, where there was a delay of twenty minutes for
            breakfast.
          </p>

          <p>
            From this point the road, running along Humboldt River, passed
            northward for several miles by its banks; then it turned eastward,
            and kept by the river until it reached the Humboldt Range, nearly at
            the extreme eastern limit of Nevada.
          </p>
        </div>
      ),
    },
    {
      name: "Jack London",
      text: (
        <div>
          <p>
            "For one day longer the despatches continued to come from New York.
            Then they, too, ceased. The man who had sent them, perched in his
            lofty building, had either died of the plague or been consumed in
            the great conflagrations he had described as raging around him. And
            what had occurred in New York had been duplicated in all the other
            cities. It was the same in San Francisco, and Oakland, and Berkeley.
            By Thursday the people were dying so rapidly that their corpses
            could not be handled, and dead bodies lay everywhere. Thursday night
            the panic outrush for the country began. Imagine, my grandsons,
            people, thicker than the salmon-run you have seen on the Sacramento
            river, pouring out of the cities by millions, madly over the
            country, in vain attempt to escape the ubiquitous death. You see,
            they carried the germs with them. Even the airships of the rich,
            fleeing for mountain and desert fastnesses, carried the germs.
          </p>

          <p>
            "Hundreds of these airships escaped to Hawaii, and not only did they
            bring the plague with them, but they found the plague already there
            before them. This we learned, by the despatches, until all order in
            San Francisco vanished, and there were no operators left at their
            posts to receive or send. It was amazing, astounding, this loss of
            communication with the world. It was exactly as if the world had
            ceased, been blotted out. For sixty years that world has no longer
            existed for me. I know there must be such places as New York,
            Europe, Asia, and Africa; but not one word has been heard of
            them&mdash;not in sixty years. With the coming of the Scarlet Death
            the world fell apart, absolutely, irretrievably. Ten thousand years
            of culture and civilization passed in the twinkling of an eye,
            'lapsed like foam.'
          </p>
        </div>
      ),
    },
    {
      name: "Edgar Rice Burroughs",
      text: (
        <div>
          <p>
            "And what, think you, may have been the fate of the princess, Dejah
            Thoris?" I asked as casually as possible.
          </p>

          <p>
            "She is dead," he answered. "This much was learned from a green
            warrior recently captured by our forces in the south. She escaped
            from the hordes of Thark with a strange creature of another world,
            only to fall into the hands of the Warhoons. Their thoats were found
            wandering upon the sea bottom and evidences of a bloody conflict
            were discovered nearby."
          </p>
        </div>
      ),
    },
  ];

  const [tabIndex, setTabIndex] = useState(Array(tabs.length).fill(false));

  const tabClick = (e) => {
    e.preventDefault();
    if (e.target.className.indexOf("active") == -1) {
      let ntabs = Array(tabs.length).fill(false);
      setTabIndex(
        ntabs.map((item, i) =>
          e.target.className.indexOf(`${i}`) != -1
            ? (item = true)
            : (item = false)
        )
      );
    }
  };

  useEffect(() => {
    setTabIndex([true, ...tabIndex].slice(0, -1));
  }, []);

  return (
    <div className="Tabs">
      <div className="tabs-container">
        <ul className="tabs">
          {tabs.map((item, i) => (
            <li>
              <a
                className={`${i} ${tabIndex[i] ? "active" : ""}`}
                onClick={(e) => tabClick(e)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="tab-contents">
          {tabs.map((item, i) => (
            <li className={`${i} ${tabIndex[i] ? "visible" : ""}`}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
