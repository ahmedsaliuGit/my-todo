import React from "react";

import "./components.css";
import { limitText } from "../helpers";

const Todo = (props) => {
  const { item, handleClick } = props;

  return (
    <>
      <li>
        <span className="todo-item">{limitText(item.name)}</span>
        <span
          className="todo-item-complete"
          style={{
            backgroundColor: !item.complete ? "red" : "green",
            color: !item.complete ? "white" : "default",
          }}
          onClick={handleClick}
        >
          {item.complete ? "Completed" : "Not complete"}
        </span>
      </li>
    </>
  );
};

export default Todo;
