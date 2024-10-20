import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Alice Doe" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json(); // // Converts the request body to JSON // parsing
  if (!body.name)
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 }); // sending
}