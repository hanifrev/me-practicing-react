import React, { useState } from "react";
// import Orchid from "./Orchid";
import ViewPlay from "./viewplay";

export default function ConT() {
  const [state, setState] = useState();
  return (
    <div className="contain">
      <h4>abc</h4>
      <button onClick={() => setState(ViewPlay())}>test </button>
      <button onClick={() => setState("")}>delete</button>
      <p className="meow">{state}</p>
      <div className="goalkeeper">{state}</div>
    </div>
  );
}
