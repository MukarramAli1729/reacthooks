import React from "react";
import ReactDOM from "react-dom";
import TodoByHooks from "./TodoByHooks";
import TodoByClasses from "./TodoByClasses";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>Let the magic begin!</h2>
      <TodoByHooks />
      <br/>
      <TodoByClasses />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
