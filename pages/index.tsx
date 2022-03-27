import { GetDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { notion } from "../config/notion";
import styles from "../styles/Home.module.css";

const databaseId = process.env.NOTION_DATABASE_ID;

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({data}) => {
  return <div className={styles.container}>
    <pre>{JSON.stringify(data, null, 2)}</pre></div>;
};

export const getServerSideProps: GetServerSideProps<{
  data: GetDatabaseResponse
}> = async (context) => {
  const data = await notion.databases.retrieve({ database_id: databaseId! })
  return {
    props: {data}, // will be passed to the page component as props
  }
};

export default Home;
