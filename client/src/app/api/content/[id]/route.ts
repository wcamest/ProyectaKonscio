import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const { id } = params;

  const response = await fetch(
    `http://localhost:${process.env.BACKEND_PORT}/content/${id}`,
    {
      cache: "no-store",
    }
  );

  return new NextResponse(response.body);
}
