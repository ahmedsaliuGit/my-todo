import React from "react";

import "./components.css";
import Todo from "./Todo";

const TodoList = (props) => {
  const { items, onClick } = props;
  return (
    <div className="todo-content">
      <ul>
        {items.map((item, idx) => (
          <Todo key={item.id} item={item} handleClick={() => onClick(idx)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
