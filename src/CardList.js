import React from 'react';
import Card from './Card';


function CardList (props){
    //const with the same name from the props robots={Robots}
    const {robots} = props;
    
    const robotsCard = robots.map((user,i)=>{
        //each card need to have a key property
        return <Card key={i} name={robots[i].name} email={robots[i].email} id={robots[i].id}  />
    })

    return(
        <div>
             {robotsCard}
        </div>
    )
    
}

export default CardList;