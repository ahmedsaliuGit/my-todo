import React from "react";
import PropTypes from "prop-types";

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

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoList;
