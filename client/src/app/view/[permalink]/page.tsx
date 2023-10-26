import HTMLRenderer from "@/HTMLRenderer/HTMLRenderer";
import WHTMLElement from "@/types/WHTMLElement";
import React from "react";
import View from "./View";

type Props = {};

const elementsMockData: WHTMLElement[] = [
  {
    id: "root",
    tagName: "HTMLDiv",
    children: [],
    treeItemExpanded: true,
    treeItemTagLabel: "div",
    treeItemTitle: "Contenedor principal",
    cutMode: false,
    parentId: undefined
  },
];

const page = (props: Props) => {
  const Functions = {
    GetRoot() {
      const rootElement = elementsMockData.find(
        (element: WHTMLElement) => element.id === "root"
      );

      return rootElement;
    },
  };

  return <View elements={elementsMockData} root={Functions.GetRoot()} />;
};

export default page;
