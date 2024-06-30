import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const MobileNavigationComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  const header = node.GetChildByType("MobileNavigationHeaderComponent");
  const body = node.GetChildByType("MobileNavigationBodyComponent");

  return (
    <nav className={node.ClassName(breakpoint)}>
      {header && header.Render(breakpoint)}
      {body && body.Render(breakpoint)}
    </nav>
  );
};

export default MobileNavigationComponent;
