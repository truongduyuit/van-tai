import { NextResponse } from "next/server";
import { notAuth } from "../../../contants/error";
import { verifyToken } from "../../../services";

export async function middleware(req: NextResponse) {
  try {
    const accessToken = req.headers.get("authorization");

    if (accessToken) {
      const [bearer, token] = accessToken.split(" ");
      const decoded = await verifyToken(token);

      if (bearer === "Bearer" && decoded.isAccess) {
        return NextResponse.next().cookie("admin_id", decoded._id);
      }
    }

    return notAuth();
  } catch (error) {
    return notAuth();
  }
}
