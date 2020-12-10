import React from "react";
import Card from "./Card";

function CardList({ robot }) {
  const robotsCard = robot.map((user, i) => {
    //each card need to have a key property
    return <Card key={i} name={user.name} email={user.email} id={user.id} />;
  });

  return <div>{robotsCard}</div>;
}

export default CardList;
