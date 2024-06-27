import CSSStylesComponent from "@/components/CSSStyles/CSSStylesComponent";
import PageViewerComponent from "@/components/PageViewer/PageViewerComponent";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";
import mockData from "./temp/editor/mock.json";

type Props = {};

const mockPage: PageDataObject = mockData;

const page = (props: Props) => {

  return [
    <PageViewerComponent key={"page"} page={mockPage} />,
    <CSSStylesComponent key={"styles"} styles={mockPage.styles} />,
  ];
};

export default page;
