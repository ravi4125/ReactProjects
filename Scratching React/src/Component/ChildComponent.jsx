import { memo } from "react";

const ChildComponent = ({ value }) => {
  // console.log(value);
  console.log(value());

  return (
    <>
      <h1>Child Component</h1>
    </>
  );
};

export default memo(ChildComponent);

// import { memo } from "react";

// const ChildComponent = ({ value }) => {
//   console.log(value);

//   return (
//     <>
//       <h1>Child Component</h1>
//     </>
//   );
// };

// export default memo(ChildComponent);
