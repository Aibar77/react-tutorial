import React from "react";
import ReactDOM from "react-dom/client";

const TodoList = () => {
  const items = ["Learn React", "Build App"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};
const AppHeader = () => {
  return <h1>My ToDo List</h1>;
};

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: 20,
    padding: 5,
  };
  return <input style={searchStyle} placeholder={searchText} />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
