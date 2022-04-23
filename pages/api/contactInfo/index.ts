// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  CONTACT_INFO_EDIT_FAIL,
  CONTACT_INFO_GET_FAIL,
} from "../../../contants/error";
import { ResponseValue } from "../../../contants/index";
import { ContactInfoFunction } from "../../../database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseValue>
) {
  try {
    let contactInfo = {};
    switch (req.method) {
      case "POST": {
        contactInfo = await ContactInfoFunction.createOrUpdate({}, req.body);
        break;
      }

      default: {
        contactInfo = await ContactInfoFunction.getOne({});
        break;
      }
    }

    return res.status(200).json({ success: true, data: contactInfo });
  } catch (error) {
    switch (req.method) {
      case "POST": {
        return res
          .status(200)
          .json({ success: false, error: CONTACT_INFO_EDIT_FAIL });
      }
      default: {
        return res
          .status(200)
          .json({ success: false, error: CONTACT_INFO_GET_FAIL });
      }
    }
  }
}
