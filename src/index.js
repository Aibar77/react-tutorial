import React from "react";
import ReactDOM from "react-dom/client";

const el = (
  <div>
    <h1>My ToDo List</h1>
    <input placeholder="search" />
    <ul>
      <li>Learn React</li>
      <li>Drink Tea</li>
    </ul>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(el);
