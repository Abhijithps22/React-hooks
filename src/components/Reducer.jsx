import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };

    default:
      break;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>UseReducer</h1>
      {state.count}
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Reducer;
