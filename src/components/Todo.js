import React from "react";

import "./components.css";

const Todo = (props) => {
  const { item } = props;

  return (
    <>
      <li>
        <span className="todo-item">{item.name}</span>
        <span className="todo-complete">
          {item.complete ? "Completed" : "Not complete"}
        </span>
      </li>
    </>
  );
};

export default Todo;
