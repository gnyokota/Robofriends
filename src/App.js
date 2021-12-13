import React, { useState, useEffect } from "react";
import "./Card.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const fecthUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setRobots(users);
  };

  useEffect(() => {
    fecthUser();
  }, []);

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  //   Here the function is changing the value of the searchField according to the input
  function onSearchChange(event) {
    setSearchField(event.target.value);
  }

  //   this function will filter the cardList according to the input set by the event
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div>
      <h1 className="title">Robofriends</h1>
      {/* since this is a class, I need to add this */}
      <ErrorBoundary>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robot={filteredRobots} />
        </Scroll>
        <p className="attribution">
          Coded by{" "}
          <a href="https://www.linkedin.com/in/gyokota/">Giovana Yokota</a>
        </p>
      </ErrorBoundary>
    </div>
  );
}

export default App;
