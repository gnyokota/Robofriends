import React, { useState } from "react";
import "./Card.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import Scroll from "./Scroll";

function App() {
  const [user, setUser] = useState({
    robots: robots,
    searchField: "",
  });

  //   Here the function is changing the value of the searchField according to the input
  function onSearchChange(event) {
    setUser({ ...user, searchField: event.target.value });
  }

  //   this function will filter the cardList according to the input set by the event
  const filteredRobots = user.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(user.searchField.toLowerCase());
  });

  return (
    <div>
      <h1 className="title">Robofriends</h1>
      {/* since this is a class, I need to add this */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robot={filteredRobots} />
      </Scroll>
      <p className="attribution">
        Coded by{" "}
        <a href="https://www.linkedin.com/in/gyokota/">Giovana Yokota</a>
      </p>
    </div>
  );
}

export default App;
