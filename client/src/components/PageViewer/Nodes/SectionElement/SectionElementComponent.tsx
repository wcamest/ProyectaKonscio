import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import PageNodeDataObject from "@/types/DataObjects/PageNodeDataObject";
import React, { useEffect } from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const SectionElementComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  useEffect(() => {}, [node]);

  return (
    <section className={node.ClassName(breakpoint)}>
      {node.RenderChildren(breakpoint, undefined, undefined, selectedNodeId)}
    </section>
  );
};

export default SectionElementComponent;
