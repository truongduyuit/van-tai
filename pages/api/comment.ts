// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mongo } from "../../services";
import { CommentFuntions } from "../../services/mongoose/funtions/comment.funtions";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  mongo.init();

  const result = await CommentFuntions.getOne({});
  console.log("result: ", result);
  res.status(200).json({ name: "John Doe" });
}
