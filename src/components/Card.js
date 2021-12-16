import React from "react";
import "tachyons";
import "./Card.css";

function Card({ name, email, id }) {
  return (
    <div className="robotsCard grow">
      <img
        alt="roboCards"
        src={`https://robohash.org/${id}?size=150x150`}
      ></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
