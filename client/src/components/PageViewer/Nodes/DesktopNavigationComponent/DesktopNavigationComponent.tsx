import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const DesktopNavigationComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;
  return (
    <nav className={node.ClassName(breakpoint)}>
      {node.RenderChildren(
        breakpoint,
        {
          navigation: "desktop",
          level: 0
        },
        undefined,
        selectedNodeId
      )}
    </nav>
  );
};

export default DesktopNavigationComponent;
