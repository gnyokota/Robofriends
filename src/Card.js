import React from 'react';
import 'tachyons';
import './Card.css'

function Card(props){
    //const {name,email,id} = props;
    return(
        <div className='robotsCard grow'>
            <img alt='roboCards' src={`https://robohash.org/${props.id}?size=150x150`}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>

    );
}

export default Card;