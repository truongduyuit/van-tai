import { ServiceFuntions } from "./../../../database/functions/service.functions";
import { ResponseValue } from "./../../../contants/index";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SERVICE_CREATE_FAIL } from "../../../contants/error";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseValue>
) {
  try {
    const { name, description, path } = req.body;

    const service = await ServiceFuntions.create({ name, description, path });
    return res.status(200).json({ success: true, data: service });
  } catch (error) {
    return res.status(200).json({ success: false, error: SERVICE_CREATE_FAIL });
  }
}
