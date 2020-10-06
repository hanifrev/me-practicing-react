import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="TheCount">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setCount(count * 0)}>Reset</button>
    </div>
  );
};

export default Counter;

// https://reactjs.org/docs/hooks-state.html
