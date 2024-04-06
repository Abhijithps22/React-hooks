import React, { useState } from "react";

const State = () => {
  const [data, setData] = useState(true);

  const handleClick = () => {
    setData(!data);
    console.log(data);
  };
  return (
    <div>
      <h1>UseState</h1>
      <div>{data ? <h3>true</h3> : <h3>false</h3>}</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default State;
