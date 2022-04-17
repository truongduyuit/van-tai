import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";
import { ResponseValue } from "../../../contants";
import { AccountRoles } from "../../../contants/enum";
import {
  LOGIN_ACCOUNT_NOT_EXIST,
  LOGIN_ACCOUNT_WRONG,
} from "../../../contants/error";
import { AccountFuntions } from "../../../database";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../../services/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseValue>
) {
  const { phone, password } = req.body;

  const adminAccount = await AccountFuntions.getOne({
    phone,
    role: AccountRoles.admin,
  });
  if (!adminAccount) {
    return res.status(200).json({ success: false, ...LOGIN_ACCOUNT_NOT_EXIST });
  }

  const match = await bcrypt.compare(password, adminAccount.password);
  if (!match) {
    return res.status(200).json({ success: false, error: LOGIN_ACCOUNT_WRONG });
  }

  return res.status(200).json({
    success: true,
    data: {
      accessToken: generateAccessToken({
        phone,
        name: adminAccount.name,
        role: AccountRoles.admin,
      }),
      refreshToken: generateRefreshToken({
        phone,
        name: adminAccount.name,
        role: AccountRoles.admin,
      }),
    },
  });
}
