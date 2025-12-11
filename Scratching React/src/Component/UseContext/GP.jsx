import React from "react";
import Parents from "./Parents";

const GP = ({ eyes }) => {
  return (
    <>
      <h1>Grand parents</h1>
      <Parents eyes={eyes} />
    </>
  );
};

export default GP;
