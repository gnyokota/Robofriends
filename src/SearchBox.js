import React from "react";
import "./Card.css";

function SearchBox({ searchChange }) {
  return (
    <div>
      <input
        className="box"
        placeholder="search robot"
        type="search"
        onChange={searchChange}
      ></input>
    </div>
  );
}

export default SearchBox;
