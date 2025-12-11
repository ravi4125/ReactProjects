import React, { useCallback, useMemo } from "react";
import ChildComponent from "./ChildComponent";

const UseMemo = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  function expensiveComponent() {
    // for (let i = 0; i < 10000000000; i++) {}
  }

  //   expensiveComponent();
  const memo = useMemo(() => expensiveComponent(), []);

  const name = useCallback(() => {
    return "name function called";
  }, []);

  // const name = "akshay";

  // const name = () => {
  //   return "name function called";
  // };

  return (
    <>
      <h1>Use Memo</h1>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <ChildComponent value={name} />
    </>
  );
};

export default UseMemo;
