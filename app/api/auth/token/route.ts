import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

//get json data web token from cookie
export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  return NextResponse.json(token);
}
