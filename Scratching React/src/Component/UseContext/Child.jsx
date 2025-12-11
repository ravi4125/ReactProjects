import React, { useContext } from "react";
import UserContext from "./UserContext";

const Child = () => {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Child </h1>
      <p>I am a Child and I have {user.eyes} eyes.</p>
    </>
  );
};

export default Child;
// import React from "react";

// const Child = ({ eyes }) => {
//   return <div>I am a Child and I have {eyes} eyes.</div>;
// };

// export default Child;
