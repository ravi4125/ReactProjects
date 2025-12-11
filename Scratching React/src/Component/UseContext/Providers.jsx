import React from "react";
import UserContext from "./UserContext";
import Child from "./Child";

const Providers = () => {
  const user = {
    eyes: "blue",
  };
  return (
    <>
      <UserContext.Provider value={user}>
        {/* Other components that need access to the context */}
        <Child />
      </UserContext.Provider>
    </>
  );
};

export default Providers;
