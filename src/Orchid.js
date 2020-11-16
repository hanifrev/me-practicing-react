// import React from "react";

// import React, { useState } from "react";

const Orchid = () => {
  // const [state, setState] = useState("");
  // console.log("this is orchid test");
  // document.createTextNode("asdasds");
  const para = document.createElement("h3");
  const node = document.createTextNode("Black Rose Immortal");
  para.appendChild(node);
  const element = document.querySelector(".meow");
  element.appendChild(para);

  // const Excecute = () => {
  //
  // };
  // Excecute();

  // return (
  //   // <div className="orchid">
  //   //   <p>{state}</p>

  //   //   <h1>Black Rose Immmortal</h1>
  //   // </div>
  // );
};
export default Orchid;
