import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const H4ElementComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  return (
    <h4 className={node.ClassName(breakpoint)}>
      {node.RenderChildren(breakpoint, undefined, undefined, selectedNodeId)}
    </h4>
  );
};

export default H4ElementComponent;
