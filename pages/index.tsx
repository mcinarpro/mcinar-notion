import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import type {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { notion } from "../config/notion";
import styles from "../styles/Home.module.css";

const Home: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ books }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Reading List</h1>

        <p className={styles.description}>
          These books come from my Notion document.
        </p>

        <div className={styles.grid}>
          {books.map((book) => (
            <a
              key={book.id}
              href={book.properties.URL.url}
              className={styles.card}
              target="_blank"
            >
              <h2>{book.properties.Name.title[0].plain_text} &rarr;</h2>
              <p>{book.properties.Author.rich_text[0].plain_text}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
          Made with ❤️ by Mehmet Cinar
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  books: any;
}> = async (context) => {
  const response = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID! });

  return {
    props: {
      books: response.results,
    },
    revalidate: 1,
  };
};

export default Home;
