import React, { use, useRef } from "react";

const UseRef = () => {
  const name = useRef("");
  const lname = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const name = document.getElementById("name");
    // const lname = document.getElementById("lname");

    console.log("name: ", name.current.value);
    console.log("lname: ", lname.current.value);
  };
  return (
    <>
      {/* Controlled components */}
      {/* uncontrolled components */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">fname</label>
        <input type="text" ref={name} id="name" name="name" />

        <label htmlFor="lname">lname</label>
        <input type="text" ref={lname} id="lname" name="lname" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseRef;
