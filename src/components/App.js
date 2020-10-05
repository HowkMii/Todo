import React from "react";
import TodoListContextProvider from "../contexts/TodoListContext";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import "../App.css";
import Header from "./Header";

const App = () => {
  return (
    <TodoListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoListContextProvider>
  );
};

export default App;
