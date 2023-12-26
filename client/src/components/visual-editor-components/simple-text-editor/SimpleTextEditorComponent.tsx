import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentSimpleTextElement from "@/types/page-document/PageDocumentSimpleTextElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const SimpleTextEditorComponent = (props: Props) => {
  const { currentEditNode, currentDocument } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetNode() {
      if (!currentDocument) return undefined;
      if (!currentEditNode) return undefined;

      const node = currentDocument.nodes.find(
        (node: PageDocumentNode) => node.id === currentEditNode
      );

      if (!node) return undefined;

      return node;
    },
    GetText() {
      const node = Functions.GetNode();
      if (!node) return "";

      const richTextElement: PageDocumentSimpleTextElement =
        node as PageDocumentSimpleTextElement;

      return richTextElement.text;
    },
    GetElementType() {
      const node = Functions.GetNode();
      if (!node) return "";

      const richTextElement: PageDocumentSimpleTextElement =
        node as PageDocumentSimpleTextElement;

      return richTextElement.elementType;
    },
    UpdateNode(propertyName: string, value: string) {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const richTextElement: any = node;
      const updatedRichTextElement: any = {
        ...richTextElement,
        [propertyName]: value,
      };
      dispatch(updateNode(updatedRichTextElement));
    },
  };

  return (
    <div className="px-4 py-2 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Tipo de texto:</span>
        <select
          value={Functions.GetElementType()}
          className="p-2 bg-white border border-solid border-blue-400 rounded-md"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            Functions.UpdateNode(
              "elementType",
              e.target.options[e.target.selectedIndex].value
            );
          }}
        >
          <option value={"span"}>span</option>
          <option value={"p"}>párrafo</option>
          <option value={"h1"}>Encabezado 1</option>
          <option value={"h2"}>Encabezado 2</option>
          <option value={"h3"}>Encabezado 3</option>
          <option value={"h4"}>Encabezado 4</option>
          <option value={"h5"}>Encabezado 5</option>
          <option value={"h6"}>Encabezado 6</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Texto:</span>
        <textarea
          className="p-2 resize-y min-h-56 bg-white border border-solid border-blue-400 rounded-md outline-none"
          value={Functions.GetText()}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            Functions.UpdateNode("text", e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SimpleTextEditorComponent;
