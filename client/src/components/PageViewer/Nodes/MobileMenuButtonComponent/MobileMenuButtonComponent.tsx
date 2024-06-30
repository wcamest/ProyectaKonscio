import React from "react";
import ListIcon from "../../icons/ListIcon";
import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const MobileMenuButtonComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  return (
    <button
    style={{
      width: "40px",
      height: "40px"
    }}
    >
      <div>
        <ListIcon />
      </div>
    </button>
  );
};

export default MobileMenuButtonComponent;
