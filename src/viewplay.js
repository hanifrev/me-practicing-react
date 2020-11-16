// import React from 'react';
import players from "./playerlist";

const ViewPlay = () => {
  const para = document.createElement("p");
  const goal = players.filter((gk) => gk.position === "Goalkeeper");
  const node = document.createTextNode(
    goal.map((xx) => `${xx.number}. ${xx.name}`).join(", ")
  );

  para.appendChild(node);
  const element = document.querySelector(".goalkeeper");
  element.appendChild(para);
};

export default ViewPlay;
