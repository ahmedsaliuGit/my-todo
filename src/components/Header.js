import React, { useState } from "react";

import "./components.css";

const Header = (props) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    let id = Date.now();

    const item = {
      id: id,
      name: value,
      complete: false,
    };

    props.onAddTodo(item);
    setValue("");
  };

  return (
    <div className="todo-header">
      <h2>My Todo</h2>
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Todo Name"
      />

      <button className="btn btn-primary mt-4 btn-lg" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default Header;
