// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  SERVICE_CREATE_FAIL,
  SERVICE_DELETE_FAIL,
  SERVICE_EDIT_FAIL,
} from "../../../contants/error";
import { ResponseValue } from "./../../../contants/index";
import { ServiceFuntions } from "./../../../database/functions/service.functions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseValue>
) {
  try {
    const { _id, name, description, path } = req.body;
    let service = null;
    switch (req.method) {
      case "PUT": {
        service = await ServiceFuntions.updateById(_id, {
          name,
          description,
          path,
        });
        break;
      }

      case "DELETE": {
        service = await ServiceFuntions.updateById(_id, {
          status: false,
        });
        break;
      }

      case "POST": {
        service = await ServiceFuntions.create({ name, description, path });
        break;
      }

      case "GET": {
        const { page = "0", limit = "10", status = true } = req.query;
        service = await ServiceFuntions.getByQuery({
          query: {
            status,
          },
          page: +page,
          limit: +limit,
          sort: {
            updatedAt: -1,
          },
        });
        break;
      }
    }

    return res.status(200).json({ success: true, data: service });
  } catch (error) {
    switch (req.method) {
      case "PUT": {
        return res
          .status(200)
          .json({ success: false, error: SERVICE_CREATE_FAIL });
      }

      case "DELETE": {
        return res
          .status(200)
          .json({ success: false, error: SERVICE_DELETE_FAIL });
      }

      case "POST": {
        return res
          .status(200)
          .json({ success: false, error: SERVICE_EDIT_FAIL });
      }
    }
  }
}
