import PageNode from '@/types/Classes/PageNode';
import PageDataObject from '@/types/DataObjects/PageDataObject';
import React from 'react'

type Props = {
    node: PageNode;
    page: PageDataObject;
    breakpoint?: string;
    inputPayload?: any;
    outputPayload?: any;
    selectedNodeId?: string;
  };

const FormElementComponent = (props: Props) => {
    const {
        node,
        page,
        breakpoint,
        inputPayload,
        outputPayload,
        selectedNodeId,
      } = props;

  return (
    <form  className={node.ClassName(breakpoint)}>
        {node.RenderChildren(breakpoint, inputPayload, outputPayload, selectedNodeId)}
    </form>
  )
}

export default FormElementComponent