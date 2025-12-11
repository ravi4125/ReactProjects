import axios from "axios";
import { useForm } from "react-hook-form";

const Create = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/userData", data);
      console.log("User data uploaded successfully: ", res.data);
      reset();
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <>
      <h1>Data Created</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input type="text" {...register("Name")} name="Name" />
        <br />
        <label>Email:</label>
        <input type="email" {...register("Email")} name="Email" />
        <br />
        <button type="submit" className="mt-3 btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
