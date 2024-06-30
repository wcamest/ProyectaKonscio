import CSSStylesComponent from "@/components/CSSStyles/CSSStylesComponent";
import PageViewerComponent from "@/components/PageViewer/PageViewerComponent";
import React from "react";

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

const page = async (props: Props) => {
  const data: any = await GetContent();

  return [
    <PageViewerComponent key={"page"} page={data} />,
    <CSSStylesComponent key={"styles"} styles={data.styles} />,
  ];
};

export default page;
