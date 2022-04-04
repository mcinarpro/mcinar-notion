import type { NextPage } from "next";
import { useForm } from "react-hook-form";

const NewBookPage: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: "Please enter a name.",
          })}
        />
        <input
          {...register("author", {
            required: "Please enter an author.",
          })}
        />
        <input type="submit" value="Add book"/>
      </form>
    </>
  );
};

export default NewBookPage;
