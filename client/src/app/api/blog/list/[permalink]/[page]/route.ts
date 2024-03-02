import proyectos from "@/app/api/blog/mock/proyectos.json";

const mockData: any = {
  proyectos,
};

export async function GET(
  request: Request,
  { params }: { params: { permalink: string; page: number } }
) {
  if (!mockData[params.permalink]) return Response.json([]);

  const permalink: string = params.permalink;
  const page: number = params.page;
  const totalPages: number = Math.ceil(mockData[params.permalink].length / 9);
  const startIndex = page * 9;
  const endIndex = startIndex + 8;

  const posts: any[] = mockData[params.permalink].slice(startIndex, endIndex);

  return Response.json({
    totalPages,
    posts
  });
}
