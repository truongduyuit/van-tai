import { POST_CREATE_FAIL, POST_EDIT_FAIL } from "../../../contants/error";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PostFuntions } from "../../../database";
import { POST_DELETE_FAIL } from "../../../contants/error";
import { ResponseValue } from "../../../contants/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseValue>
) {
  try {
    const { _id, title, description, url, content, tags, creator } = req.body;
    let post = {};
    // switch (req.method) {
    //   case "PUT": {
    //     post = await PostFuntions.updateById(_id, {
    //       title,
    //       description,
    //       url,
    //       content,
    //       tags,
    //       creator,
    //     });
    //     break;
    //   }

    //   case "DELETE": {
    //     post = await PostFuntions.updateById(_id, {
    //       status: false,
    //     });
    //     break;
    //   }

    //   case "POST": {
    //     post = await PostFuntions.create({
    //       title,
    //       description,
    //       url,
    //       content,
    //       tags,
    //       creator,
    //     });
    //     break;
    //   }

    //   case "GET": {
    //     const { page = "0", limit = "10", status = true } = req.query;
    //     post = await PostFuntions.getByQuery({
    //       query: {
    //         status,
    //       },
    //       page: +page,
    //       limit: +limit,
    //       sort: {
    //         updatedAt: -1,
    //       },
    //     });
    //     break;
    //   }
    // }

    // console.log("req.body: ", req.body, req.cookies.admin_id);
    return res.status(200).json({ success: true, data: post });
  } catch (error) {
    switch (req.method) {
      case "PUT": {
        return res.status(200).json({ success: false, error: POST_EDIT_FAIL });
      }

      case "DELETE": {
        return res
          .status(200)
          .json({ success: false, error: POST_DELETE_FAIL });
      }

      case "POST": {
        return res
          .status(200)
          .json({ success: false, error: POST_CREATE_FAIL });
      }
    }
  }
}
