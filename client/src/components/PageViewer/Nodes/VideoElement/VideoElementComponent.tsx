import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React, { useEffect } from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const VideoElementComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  const Functions = {
    Key() {
      const children = node.Children().map((node: PageNode | undefined) => {
        return JSON.stringify(node?.data);
      });

      return children.join(" ");
    },
  };

  return (
    <video
      key={Functions.Key()}
      className={node.ClassName(breakpoint)}
      src={node.PropertyValue("src")}
      controls={node.PropertyValue("controls")}
      autoPlay={node.PropertyValue("autoplay")}
      loop={node.PropertyValue("loop")}
      muted={node.PropertyValue("muted")}
      poster={node.PropertyValue("poster")}
      preload={node.PropertyValue("preload")}
    >
      {node.RenderChildren(breakpoint, undefined, undefined, selectedNodeId)}
    </video>
  );
};

export default VideoElementComponent;
