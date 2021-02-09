import React, { useState, useEffect} from "react";
import "./Card.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(()=>{
    try{async function fetchData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json(); 
      setRobots(data);
    }
    fetchData();
  }catch(err){console.error(err.response)}
  },[]);
  
  //   Here the function is changing the value of the searchField according to the input
  function onSearchChange(event) {
    setSearchField(event.target.value);
  }
  //   this function will filter the cardList according to the input set by the event
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div>
      <h1 className="title">Robofriends</h1>
      {/* since this is a class, I need to add this */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robot={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
      <p className="attribution">
        Coded by{" "}
        <a href="https://www.linkedin.com/in/gyokota/">Giovana Yokota</a>
      </p>
    </div>
  );
}

export default App;
