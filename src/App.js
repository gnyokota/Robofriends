import React, { useEffect } from "react";
import "./components/Card.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";
import {useSelector, useDispatch, shallowEqual} from 'react-redux'; 
import {setSearchField, requestRobots} from './store/actions';

function App() {
  //now state has serachRobots and requestRobots, the were combined.
  const searchField = useSelector( state => state.searchRobots.searchField, shallowEqual);
  const robots = useSelector( state => state.requestRobots.robots);
  const isPending = useSelector( state => state.requestRobots.isPending);
  const error = useSelector( state => state.requestRobots.error); 
  const dispatch = useDispatch(); 
  const searchChange = (event) =>{
    return dispatch(setSearchField(event.target.value))
  };

  useEffect(()=>{
    const handleRequestRobot = () =>{
      isPending? console.log(error): dispatch(requestRobots)
    };
    handleRequestRobot();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  //   this function will filter the cardList according to the input set by the event
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  
    return (isPending? (<h1 className='title'>Loading...</h1>) : 
    (<div>
      <h1 className="title">Robofriends</h1>
      {/* since this is a class, I need to add this */}
      <SearchBox searchChange={searchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robot={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
      <p className="attribution">
        Coded by{" "}
        <a href="https://www.linkedin.com/in/gyokota/">Giovana Yokota</a>
      </p>
    </div>)
    );
}

export default App;
