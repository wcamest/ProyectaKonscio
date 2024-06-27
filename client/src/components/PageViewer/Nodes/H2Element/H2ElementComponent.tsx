import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const H2ElementComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  return (
    <h2 className={node.ClassName(breakpoint)}>
      {node.RenderChildren(breakpoint, undefined, undefined, selectedNodeId)}
    </h2>
  );
};

export default H2ElementComponent;
