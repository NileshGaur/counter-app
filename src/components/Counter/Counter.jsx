import React, { useState } from "react";
import "./styles.css";

export default function () {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter__container">
        <h2>Counter App</h2>
        <div className="counter__display"> {count}</div>
        <div className="counter__buttons">
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>Increment</button>
        </div>
      </div>
    </>
  );
}
