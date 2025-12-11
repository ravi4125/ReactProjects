import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setcount] = useState(0);
  const [parent, setparent] = useState(0);

  // const handleIncrement = () => {
  //   setcount(count + 1);
  // };

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <>
      <h1>UseEffect</h1>
      <p>Count : {count} </p>
      <p>Parent : {parent} </p>
      <button onClick={() => setcount(count + 1)}>Click me</button>
      <button onClick={() => setparent(parent + 1)}>Parent Click me</button>
    </>
  );
};

export default UseEffect;
