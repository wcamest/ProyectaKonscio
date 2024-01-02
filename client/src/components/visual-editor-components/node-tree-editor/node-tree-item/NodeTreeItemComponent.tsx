import {
  setCurrentPageDocument,
  setCurrentStyleEditNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentSimpleTextElement from "@/types/page-document/PageDocumentSimpleTextElement";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  node: PageDocumentNode;
  document: PageDocument;
};

const nodeTypeLabels: any = {
  PageDocumentContainerElement: "Contenedor",
  PageDocumentRichTextElement: "Texto Enriquecido",
  PageDocumentImageElement: "Imagen",
  PageDocumentSimpleTextElement: "Texto Simple",
};

const icons: any = {
  PageDocumentContainerElement: "/icons/layers-half.svg",
  PageDocumentSimpleTextElement: "/icons/type.svg",
};

const NodeTreeItemComponent = (props: Props) => {
  const { node, document } = props;
  const { currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();

  const Functions = {
    SelectThis() {
      dispatch(
        setCurrentPageDocument({
          ...document,
          selectedNode: node.id,
        })
      );

      if (currentStyleEditNode) dispatch(setCurrentStyleEditNode(node.id));
    },
  };

  const Renderer = {
    Children() {
      if (!node.nodes.length) return undefined;

      return (
        <div className="w-fit pl-4 flex flex-col gap-1">
          {node.nodes.map((nodeId: string, key: number) => {
            const node = document.nodes.find(
              (node: PageDocumentNode) => node.id === nodeId
            );

            if (!node) return undefined;

            return (
              <NodeTreeItemComponent
                key={key}
                document={document}
                node={node}
              />
            );
          })}
        </div>
      );
    },
    ContentPreview() {
      if (node.type === "PageDocumentSimpleTextElement")
        return (
          <div className="flex flex-col gap-1">
            <div className="mt-2 w-full h-0 border-t border-t-current opacity-20"></div>
            <span className="max-w-80 truncate">
              {(node as PageDocumentSimpleTextElement).text}
            </span>
          </div>
        );
    },
    Icon() {
      const icon = icons[node.type];

      if (icon)
        return (
          <div className="p-2 bg-white rounded-full">
            <Image src={icon} width={30} height={30} alt="icon" className="min-w-5 min-h-5 max-w-5 max-h-5" />
          </div>
        );
    },
    Header() {
      if (document.selectedNode === node.id)
        return (
          <div className="px-2 py-1 w-fit flex gap-2 bg-blue-800 text-blue-50 rounded-md border border-solid border-blue-800 select-none cursor-pointer shadow-md">
            <div>{Renderer.Icon()}</div>
            <div className="flex flex-col">
              <span className="font-bold">{node.name}</span>
              <span className="text-xs opacity-50">
                {nodeTypeLabels[node.type]}
              </span>
              {Renderer.ContentPreview()}
            </div>
          </div>
        );

      return (
        <div
          className="px-2 py-1 w-fit flex gap-2 hover:bg-blue-300 text-blue-900 rounded-md border border-solid border-blue-300 select-none cursor-pointer shadow-md"
          onClick={() => {
            Functions.SelectThis();
          }}
        >
          <div>{Renderer.Icon()}</div>
          <div className="flex flex-col">
            <span className="font-bold">{node.name}</span>
            <span className="text-xs opacity-50">
              {nodeTypeLabels[node.type]}
            </span>
            {Renderer.ContentPreview()}
          </div>
        </div>
      );
    },
  };

  return (
    <div className="w-fit flex flex-col gap-1">
      {Renderer.Header()}
      {Renderer.Children()}
    </div>
  );
};

export default NodeTreeItemComponent;
