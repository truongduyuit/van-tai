import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../../../services";

export async function middleware(req: NextRequest) {
  const accessToken = req.headers.get("authorization");

  if (accessToken) {
    const decoded = verifyToken(accessToken);
    console.log("decoded: ", decoded);
  }

  return NextResponse.next();
}
