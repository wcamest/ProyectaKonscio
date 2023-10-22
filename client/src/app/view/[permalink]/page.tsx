import HTMLRenderer from "@/HTMLRenderer/HTMLRenderer";
import WHTMLElement from "@/types/WHTMLElement";
import React from "react";
import View from "./View";

type Props = {};

const contentMockData: WHTMLElement = {
  tagName: "HTMLDiv",
  children: [],
};

const page = (props: Props) => {
  return <View content={contentMockData} />;
};

export default page;
