import CSSStylesComponent from "@/components/CSSStyles/CSSStylesComponent";
import PageViewerComponent from "@/components/PageViewer/PageViewerComponent";
import React from "react";

type Props = {
  params: {
    page: string;
  };
};

export async function generateMetadata(props: Props) {
  const { page } = props.params;

  const inputMetadata = await fetch(
    `http://localhost:${process.env.PORT}/api/content/metadata/${page}`,
    {
      cache: "no-store",
    }
  ).then((response: Response) => response.json());

  return {
    title: inputMetadata.title,
  }
}

const GetContent = async (page: string) => {
  const response = await fetch(
    `http://localhost:${process.env.PORT}/api/content/permalink/${page}`,
    {
      cache: "no-store",
    }
  ).then((response: Response) => response.json());

  return response;
};

const page = async (props: Props) => {
  const data: any = await GetContent(props.params.page);

  return [
    <PageViewerComponent key={"page"} page={data} />,
    <CSSStylesComponent key={"styles"} styles={data.styles} />,
  ];
};

export default page;
