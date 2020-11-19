import React, { useState } from 'react';
import './Card.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

function App(){

    const [user,setUser] = useState({
        robots: robots,
        searchField: ''
    })

    function onSearchChange(event){
        setUser({...user, searchField : event.target.value}) 
    }

    const filteredRobots = user.robots.filter(robot=>{
         return robot.name.toLowerCase().includes(user.searchField.toLowerCase());
    });
    return(
        <div>
            <h1 className='title'>Robofriends</h1>
            {/* since this is a class, I need to add this */}
            <SearchBox searchChange={onSearchChange} />
            <CardList robots={filteredRobots} />
            <p className="attribution">Coded by <a href="https://www.linkedin.com/in/gyokota/">Giovana Yokota</a></p>
        </div>
    )

}


export default App;