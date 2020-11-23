import React, { useState } from "react";

import "./App.css";

import TodoHeader from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([]);

  const addTodo = (item) => {
    const newItems = items.concat({ ...item });
    setItems(newItems);
  };

  const handleClick = (index) => {
    const newItems = items.slice();
    newItems[index].complete = !newItems[index].complete;

    setItems(newItems);
  };

  return (
    <div className="App">
      <div className="App-container">
        <TodoHeader onAddTodo={(item) => addTodo(item)} />
        <TodoList items={items} onClick={(index) => handleClick(index)} />
      </div>
    </div>
  );
}

export default App;
