import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = { node: PageNode; page: PageDataObject; breakpoint?: string };

const TextElementComponent = (props: Props) => {
  const { node, page, breakpoint } = props;
  return node.PropertyValue("text");
};

export default TextElementComponent;
