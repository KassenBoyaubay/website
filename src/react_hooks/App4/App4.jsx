import React, { useState, useEffect, useReducer } from "react";

//what action is and change state accordingly
//when complex state -> change state based on actions -> use reducer
function reducer1(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        toDoCount: state.toDoCount + 1,
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        toDoCount: state.toDoCount,
      };
    default:
      return state;
  }
}

const App4 = () => {
  const [count, dispatch1] = useReducer(reducer1, 0);
  const [{ todos, toDoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    toDoCount: 0,
  });
  const [text, setText] = useState();
  return (
    <div>
      <div>cout: {count}</div>
      <button onClick={() => dispatch1({ type: "increment" })}>
        increment
      </button>
      <button onClick={() => dispatch1({ type: "decrement" })}>
        decrement
      </button>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "add-todo", text });
            setText("");
          }}
        >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        {todos.map((t, idx) => (
          <div
            style={{ textDecoration: t.completed ? "line-through" : "" }}
            key={t.text}
            onClick={() => dispatch({ type: "toggle-todo", idx })}
          >
            {t.text}
          </div>
        ))}
        <span>number of todos: {toDoCount}</span>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App4;
