import React from "react";
import { useForm } from "react-hook-form";

const ControlledComponents = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>controlled Components</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fname">Fname</label>
        <input type="text" name="fname" {...register("fname")} />
        <label htmlFor="lname">Lname</label>
        <input type="text" name="lname" {...register("lname")} />

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default ControlledComponents;
