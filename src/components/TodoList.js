import React from "react";

import "./components.css";
import Todo from "./Todo";

const TodoList = (props) => {
  const { items } = props;
  return (
    <div className="todo-content">
      <ul>
        {items.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
