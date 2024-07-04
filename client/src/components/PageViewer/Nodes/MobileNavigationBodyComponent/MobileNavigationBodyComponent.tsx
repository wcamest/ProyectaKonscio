import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  inputPayload?: any;
  outputPayload?: any;
  selectedNodeId?: string;
};

const MobileNavigationBodyComponent = (props: Props) => {
  const {
    node,
    page,
    breakpoint,
    inputPayload,
    outputPayload,
    selectedNodeId,
  } = props;

  const [state, setState] = useState({
    height: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  const Functions = {
    SetHeight() {
      if (!ref.current) return;
      if (!inputPayload.headerHeight) return;

      const top = inputPayload.headerHeight;
      const screenHeight = window.innerHeight;
      const height = screenHeight - top;

      setState({
        height,
      });
    },
  };

  useEffect(() => {
    Functions.SetHeight();
  }, [inputPayload?.headerHeight]);

  return (
    <div
      ref={ref}
      style={{
        height: `${state.height}px`,
      }}
      className={node.ClassName(breakpoint)}
    >
      {node.RenderChildren(breakpoint, inputPayload, outputPayload, selectedNodeId)}
    </div>
  );
};

export default MobileNavigationBodyComponent;
