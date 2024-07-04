import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import PageNodeDataObject from "@/types/DataObjects/PageNodeDataObject";
import React from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  inputPayload?: any;
  outputPayload?: any;
  selectedNodeId?: string;
};

const DivElementComponent = (props: Props) => {
  const {
    node,
    page,
    breakpoint,
    inputPayload,
    outputPayload,
    selectedNodeId,
  } = props;

  return (
    <div className={node.ClassName(breakpoint)}>
      {node.RenderChildren(breakpoint, inputPayload, outputPayload, selectedNodeId)}
    </div>
  );
};

export default DivElementComponent;
