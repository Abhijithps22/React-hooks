import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Running once");
  }, [count]);

  return (
    <div>
      <h1>UseEffectt</h1>
      <div>
        <h2>{count}</h2>
      </div>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
};

export default Effect;
