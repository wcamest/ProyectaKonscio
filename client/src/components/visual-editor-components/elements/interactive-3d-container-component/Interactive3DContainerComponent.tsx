import PageDocument from "@/types/page-document/PageDocument";
import PageDocument3DContainerComponent from "@/types/page-document/PageDocument3DContainerComponent";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React from "react";
import ElementRenderer from "../renderer/renderer";

type Props = {
  data: PageDocument3DContainerComponent;
  document: PageDocument;
};

const Interactive3DContainerComponent = (props: Props) => {
  const { data, document } = props;

  const Renderer = {
    Nodes() {
      return data.nodes.map((nodeId: string, key: number) => {
        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === nodeId
        );

        if (!node) return undefined;

        const element = ElementRenderer.Render(node, document, key);
        return element;
      });
    },
  };

  return <group>
    {Renderer.Nodes()}
  </group>;
};

export default Interactive3DContainerComponent;
