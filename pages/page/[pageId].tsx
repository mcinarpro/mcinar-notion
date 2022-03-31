import { NotionAPI } from "notion-client";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { NotionRenderer } from 'react-notion-x'
import Link from "next/link";

const NotionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ recordMap }) => {
  return (
    <>
    <Link href="/">&nbsp;&nbsp;🏠</Link>
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </>
  )
};

export const getServerSideProps: GetServerSideProps<{
  recordMap: any;
}> = async (context) => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(context.query.pageId as string);

  return {
    props: {
      recordMap
    },
  };
};

export default NotionPage;
