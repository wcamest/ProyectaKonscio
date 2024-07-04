import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const { filename } = params;

  const response = await fetch(`http://localhost:${process.env.BACKEND_PORT}/video/${filename}`, {
    cache: "no-store",
  });

  const headers = new Headers(response.headers);
  const contentType = headers.get("content-type") || "application/octet-stream";

  const videoResponse = new NextResponse(response.body, {
    headers: {
      "Content-Type": contentType,
    },
  });

  return videoResponse;
}
