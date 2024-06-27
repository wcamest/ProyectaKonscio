import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = { node: PageNode; page: PageDataObject; breakpoint?: string; selectedNodeId?: string };

const H5ElementComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  return (
    <h5 className={node.ClassName(breakpoint)}>{node.RenderChildren(breakpoint, undefined, undefined, selectedNodeId)}</h5>
  );
};

export default H5ElementComponent;
