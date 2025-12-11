import React, { useState } from "react";

const StateManagement = () => {
  //   let count = 0;

  //   const handleIncrement = () => {
  //     count++;
  //     console.log("count", count);
  //   };

  const [count, setcount] = useState(0);

  const handleIncrement = () => {
    setcount(count + 1);
  };

  return (
    <>
      <h1>StateManagement</h1>

      <p>Count : {count} </p>
      <button onClick={handleIncrement}>click me</button>
    </>
  );
};

export default StateManagement;
