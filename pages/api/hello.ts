import type { NextApiRequest, NextApiResponse } from "next";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { notion } from "../../config/notion";

type Data = {
  response: QueryDatabaseResponse
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  res.status(200).json({ response });
}
