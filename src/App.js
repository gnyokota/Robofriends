import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./ErrorBoundary";
import { setSearchField, setRobots } from "./redux/actions";

import "./components/Card.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fecthUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      dispatch(setRobots(users));
    };
    fecthUser();
  }, [dispatch]);

  const { searchField, robots } = useSelector((state) => state);

  //   Here the function is changing the value of the searchField according to the input
  function onSearchChange(event) {
    dispatch(setSearchField(event.target.value));
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
