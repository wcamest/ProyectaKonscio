import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const RootComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  return node.RenderChildren(breakpoint, undefined, undefined, selectedNodeId);
};

export default RootComponent;
