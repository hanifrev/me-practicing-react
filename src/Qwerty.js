import React, { useState } from "react";
import Orchid from "./Orchid";

const Qwerty = () => {
  const [first, setFirst] = useState("");
  const [fill, setFill] = useState("");
  const [zxc, setZxc] = useState("");
  return (
    <div className="tdl">
      <form>
        <label htmlFor="first">
          Todo list
          <input
            id="first"
            value={first}
            placeholder="write something"
            onChange={(e) => setFirst(e.target.value)}
          />
        </label>
      </form>
      <div className="orchid"></div>
      <button onClick={() => setFill(first)}>add list</button>
      <button onClick={() => setFill(removeEventListener.first)}>delete</button>
      {/* <button onClick={() => setZxc(Orchid())}>test call</button> */}
      <p>{fill}</p>
      <p>{zxc}</p>
    </div>
  );
};

export default Qwerty;
