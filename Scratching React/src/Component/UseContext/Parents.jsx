import React from "react";
import Child from "./Child";

const Parents = ({ eyes }) => {
  return (
    <>
      <h1>Parents</h1>
      <Child eyes={eyes} />
    </>
  );
};

export default Parents;
