import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React, { useEffect, useState } from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

type AccordionComponentState = {
  expandedItem: string | undefined;
};

const AccordionComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;
  const [state, setState] = useState<AccordionComponentState>({
    expandedItem: undefined,
  });

  const Functions = {
    ClearExpandedItem() {
      if (!selectedNodeId) return;
      if (selectedNodeId === node.Id() || !node.IsDescendant(selectedNodeId))
        setState({ expandedItem: undefined });
    },
    ExpandOrCollapse(itemId: string) {
      let expandedItem: string | undefined;

      if (state.expandedItem === itemId) expandedItem = undefined;
      else expandedItem = itemId;

      if (!selectedNodeId)
        setState({
          expandedItem,
        });
    },
    Expand(itemId: string) {
      setState({
        expandedItem: itemId,
      });
    },
  };

  useEffect(() => {
    Functions.ClearExpandedItem();
  }, [selectedNodeId]);

  return (
    <div className={node.ClassName(breakpoint)}>
      {node.RenderChildren(
        breakpoint,
        state,
        {
          expandOrCollapse: Functions.ExpandOrCollapse,
          expand: Functions.Expand,
        },
        selectedNodeId
      )}
    </div>
  );
};

export default AccordionComponent;
