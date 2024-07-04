import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const { permalink } = params;

  const response = await fetch(
    `http://localhost:${process.env.BACKEND_PORT}/content/metadata/${permalink}`,
    {
      cache: "no-store",
    }
  );

  return new NextResponse(response.body);
}
