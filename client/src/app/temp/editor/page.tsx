import React from "react";
import Editor from "./Editor";

type Props = {};

const GetContent = async () => {
  const response = await fetch(
    `http://localhost:3000/api/content/permalink/home`,
    {
      cache: "no-store",
    }
  ).then((response: Response) => response.json());

  return response;
};

const Page = async (props: Props) => {
  const data: any = await GetContent();

  return <Editor pageData={data} />;
};

export default Page;
