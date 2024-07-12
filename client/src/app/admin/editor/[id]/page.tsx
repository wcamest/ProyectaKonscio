import React from "react";
import Editor from "../Editor";

type Props = {
  params: {
    id: string;
  };
};

const GetContent = async (id: string) => {
  const response = await fetch(`http://localhost:${process.env.PORT}/api/content/${id}`, {
    cache: "no-store",
  }).then((response: Response) => response.json());

  return response;
};

const Page = async (props: Props) => {
  const data: any = await GetContent(props.params.id);

  return <Editor pageData={data} />;
};

export default Page;
