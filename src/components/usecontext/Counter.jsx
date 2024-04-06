import React, { useContext } from "react";
import { Globalcontext } from "./Context";

const Counter = () => {
  const { count, setCount } = useContext(Globalcontext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
};

export default Counter;
