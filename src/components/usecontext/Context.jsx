import React, { createContext, useState } from "react";
import Counter from "./Counter";
import Component from "./Component";

export const Globalcontext = createContext();

const Context = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Context</h1>
      <Globalcontext.Provider value={{ count, setCount }}>
        <>
          <Counter />
          <Component />
        </>
      </Globalcontext.Provider>
    </div>
  );
};

export default Context;
