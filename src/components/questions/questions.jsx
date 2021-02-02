import React, { useState } from "react";

const Allquestions = [
  {
    question: "do you accept all major credit cards?",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
  {
    question: "do you suppport local farmers?",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
  {
    question: "do you use organic ingredients?",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
];

const Questions = () => {
  const [questions] = useState(Allquestions);
  const [show, setShow] = useState(Array(Allquestions.length).fill(""));

  const open = (id) => {
    setShow(
      show.map((item, i) =>
        i === id ? (item !== "show-text" ? "show-text" : "") : ""
      )
    );
  };

  return (
    <div className="mySass Questions">
      <section className="questions">
        <div className="title">
          <h2>general questions</h2>
        </div>
        <div className="section-center">
          {questions.map((item, i) => (
            <Question
              question={item.question}
              text={item.text}
              id={i}
              open={open}
              showClass={show[i]}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const Question = ({ question, text, id, showClass, open }) => {
  return (
    <article className={`question ${showClass}`}>
      <div className="question-title">
        <p>{question}</p>
        <button type="button" className="question-btn" onClick={() => open(id)}>
          <span className="plus-icon">
            <i className="far fa-plus-square"></i>
          </span>
          <span className="minus-icon">
            <i className="far fa-minus-square"></i>
          </span>
        </button>
      </div>
      <div className="question-text">
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Questions;
