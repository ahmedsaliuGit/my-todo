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

  return (
    <div className="App">
      <div className="App-container">
        <TodoHeader onAddTodo={(item) => addTodo(item)} />
        <TodoList items={items} />
      </div>
    </div>
  );
}

export default App;
