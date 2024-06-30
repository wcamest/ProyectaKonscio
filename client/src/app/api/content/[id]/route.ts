import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const { id } = params;

  const response = await fetch(`http://localhost:3001/content/${id}`, {
    cache: "no-store",
  });

  return new NextResponse(response.body);
}
