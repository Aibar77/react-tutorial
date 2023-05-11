import "./search-panel.css";
import React, { useState } from "react";
const SearchPanel = ({ search }) => {
  const [term, setTerm] = useState({
    term: "",
  });
  const onSearchChange = (e) => {
    const term = e.target.value;
    setTerm({ term });
    search(term);
  };
  return (
    <input
      type="text"
      placeholder="Type to search"
      className="form-control search-input"
      value={term.term}
      onChange={onSearchChange}
    />
  );
};
export default SearchPanel;
