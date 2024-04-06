import React, { useContext } from "react";
import { Globalcontext } from "./Context";

const Component = () => {
  const { count } = useContext(Globalcontext);
  return <div>Component {count}</div>;
};

export default Component;
