import PageNode from '@/types/Classes/PageNode';
import PageDataObject from '@/types/DataObjects/PageDataObject';
import React from 'react'

type Props = {
    node: PageNode;
    page: PageDataObject;
    breakpoint?: string;
    selectedNodeId?: string;
  };

const StrongElementComponent = (props: Props) => {
    const { node, page, breakpoint, selectedNodeId } = props;

  return (
    <strong className={node.ClassName(breakpoint)}>{node.RenderChildren(breakpoint, undefined, undefined, selectedNodeId)}</strong>
  )
}

export default StrongElementComponent