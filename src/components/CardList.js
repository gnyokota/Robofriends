import React from "react";
import Card from "./Card";

function CardList({ robot }) {
  const robotsCard = robot.map((uniqueRobot, i) => {
    //each card need to have a key property
    return (
      <Card
        key={uniqueRobot.id}
        name={uniqueRobot.name}
        email={uniqueRobot.email}
        id={uniqueRobot.id}
      />
    );
  });

  return <div>{robotsCard}</div>;
}

export default CardList;
