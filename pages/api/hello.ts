// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CommentFuntions } from "../../database/functions";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const comment = await CommentFuntions.getOne({});
  return res.status(200).json({ name: comment.account_id });
}
