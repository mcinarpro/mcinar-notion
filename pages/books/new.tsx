import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { notion } from "../../config/notion";

const NewBookPage: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    console.log(process.env.NOTION_DATABASE_ID!);
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: "Tuscan Kale",
              },
            },
          ],
        }
      },
    });
    console.log(response)
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
        <input type="submit" value="Add book" />
      </form>
    </>
  );
};

export default NewBookPage;
