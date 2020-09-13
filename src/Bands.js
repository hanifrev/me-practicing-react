import React from "react";
export default function Bands({ name, origin }) {
  // return React.createElement("div", {}, [
  //   React.createElement("h2", {}, name),
  //   React.createElement("h4", {}, origin),
  // ]);
  return (
    <div className="BandClass">
      <br></br>
      <h1>{name.toUpperCase()}</h1>
      <h3>{origin}</h3>
      <br></br>
    </div>
  );
}
