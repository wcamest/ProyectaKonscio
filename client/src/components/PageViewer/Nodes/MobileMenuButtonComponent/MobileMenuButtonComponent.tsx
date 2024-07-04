import React from "react";
import ListIcon from "../../icons/ListIcon";
import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  inputPayload?: any;
  outputPayload?: any;
  selectedNodeId?: string;
};

const MobileMenuButtonComponent = (props: Props) => {
  const {
    node,
    page,
    breakpoint,
    inputPayload,
    outputPayload,
    selectedNodeId,
  } = props;

  const Functions = {
    ExpandOrCollapse() {
      if (!inputPayload.expandOrCollapse) return;

      inputPayload.expandOrCollapse();
    },
  };

  return (
    <button
      style={{
        width: "40px",
        height: "40px",
      }}
      onClick={() => Functions.ExpandOrCollapse()}
    >
      <div>
        <ListIcon />
      </div>
    </button>
  );
};

export default MobileMenuButtonComponent;
