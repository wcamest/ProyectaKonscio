import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const MobileNavigationBodyComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  return (
    <div className={node.ClassName(breakpoint)}>
      {node.RenderChildren(breakpoint, undefined, undefined, selectedNodeId)}
    </div>
  );
};

export default MobileNavigationBodyComponent;
