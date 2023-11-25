import HTMLRenderer from "@/HTMLRenderer/HTMLRenderer";
import WHTMLElement from "@/types/WHTMLElement";
import React from "react";
import View from "./View";
import CreateCSSClasses from "@/redux/features/editor/utils/createCSSClasses";

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
    parentId: undefined,
    properties: [],
    classes: {
      base: CreateCSSClasses(),
      sm: CreateCSSClasses(),
      md: CreateCSSClasses(),
      lg: CreateCSSClasses(),
      xl: CreateCSSClasses(),
      xl2: CreateCSSClasses(),
    }
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
