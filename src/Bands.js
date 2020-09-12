import React from "react";
export default function Bands({ name, origin }) {
  // return React.createElement("div", {}, [
  //   React.createElement("h2", {}, name),
  //   React.createElement("h4", {}, origin),
  // ]);
  return (
    <div className="BandClass">
      <h2>{name.toUpperCase()}</h2>
      <h2>{origin}</h2>
    </div>
  );
}
