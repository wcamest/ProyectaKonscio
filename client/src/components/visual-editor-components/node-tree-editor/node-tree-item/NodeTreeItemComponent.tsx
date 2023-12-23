import { setCurrentPageDocument } from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
  node: PageDocumentNode;
  document: PageDocument;
};

const nodeTypeLabels: any = {
  PageDocumentContainerElement: "Contenedor",
  PageDocumentRichTextElement: "Texto Enriquecido",
  PageDocumentImageElement: "Imagen"
};

const NodeTreeItemComponent = (props: Props) => {
  const { node, document } = props;
  const dispatch = useDispatch();

  const Functions = {
    SelectThis() {
      dispatch(
        setCurrentPageDocument({
          ...document,
          selectedNode: node.id,
        })
      );
    },
  };

  const Renderer = {
    Children() {
      if (!node.nodes.length) return undefined;

      return (
        <div className="pl-4 flex flex-col gap-1">
          {node.nodes.map((nodeId: string, key:number) => {
            const node = document.nodes.find(
              (node: PageDocumentNode) => node.id === nodeId
            );

            if (!node) return undefined;

            return <NodeTreeItemComponent key={key} document={document} node={node} />;
          })}
        </div>
      );
    },
    Header() {
      if (document.selectedNode === node.id)
        return (
          <div className="px-2 py-1 w-fit bg-blue-800 text-blue-50 rounded-md border border-solid border-blue-800 select-none cursor-pointer shadow-md">
            <div className="flex flex-col">
              <span>{node.name}</span>
              <span className="text-xs opacity-50">
                {nodeTypeLabels[node.type]}
              </span>
            </div>
          </div>
        );

      return (
        <div className="px-2 py-1 w-fit hover:bg-blue-300 text-blue-900 rounded-md border border-solid border-blue-300 select-none cursor-pointer shadow-md" onClick={() => {
          Functions.SelectThis();
        }}>
          <div className="flex flex-col">
            <span>{node.name}</span>
            <span className="text-xs opacity-50">
              {nodeTypeLabels[node.type]}
            </span>
          </div>
        </div>
      );
    },
  };

  return (
    <div className="flex flex-col gap-1">
      {Renderer.Header()}
      {Renderer.Children()}
    </div>
  );
};

export default NodeTreeItemComponent;
