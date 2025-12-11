import React, { act, useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;

      case "decrement":
        return state - 1;

      default:
        return state;
    }
  };
  //   const [first, setfirst] = useState(0);
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Use Reducer</h1>
      <h1>{state}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </>
  );
};

export default UseReducer;
