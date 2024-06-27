import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import PageNodeDataObject from "@/types/DataObjects/PageNodeDataObject";
import React from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
};

const SourceElementComponent = (props: Props) => {
  const { node, page } = props;

  return (
    <source
      src={node.PropertyValue("src")}
      type={node.PropertyValue("type")}
      media={node.PropertyValue("media")}
    />
  );
};

export default SourceElementComponent;
