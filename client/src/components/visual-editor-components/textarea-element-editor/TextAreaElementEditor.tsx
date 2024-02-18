import TextAreaComponent from "@/components/controls/text-area/TextAreaComponent";
import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentInputElement, {
  PageDocumentInputElementType,
} from "@/types/page-document/PageDocumentInputElement";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentTextAreaElement from "@/types/page-document/PageDocumentTextAreaElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const TextAreaElementEditor = (props: Props) => {
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
    GetTextArea() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const textAreaElement: PageDocumentTextAreaElement =
        node as PageDocumentTextAreaElement;

      return textAreaElement;
    },
    GetTextAreaName() {
      const imageElement = Functions.GetTextArea();
      if (!imageElement) return "";

      return imageElement.textAreaName;
    },
    GetTextAreaValue() {
      const imageElement = Functions.GetTextArea();
      if (!imageElement) return "";

      return imageElement.textAreaValue;
    },
    GetTextAreaPlaceholder() {
      const imageElement = Functions.GetTextArea();
      if (!imageElement) return "";

      return imageElement.textAreaPlaceholder;
    },
    GetTextAreaLabel() {
      const imageElement = Functions.GetTextArea();
      if (!imageElement) return "";

      return imageElement.textAreaLabel;
    },
    UpdateNode(data: any) {
      const textAreaElement = Functions.GetTextArea();
      if (!textAreaElement) return undefined;

      const updatedInputElement: PageDocumentTextAreaElement = {
        ...textAreaElement,
        ...data,
      };

      dispatch(updateNode(updatedInputElement));
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Nombre:</span>
        <TextInputComponent
          value={Functions.GetTextAreaName()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              textAreaName: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Valor:</span>
        <TextAreaComponent
          value={Functions.GetTextAreaValue()}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            Functions.UpdateNode({
              textAreaValue: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Texto provisional:</span>
        <TextInputComponent
          value={Functions.GetTextAreaPlaceholder()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              textAreaPlaceholder: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Etiqueta:</span>
        <TextInputComponent
          value={Functions.GetTextAreaLabel()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              textAreaLabel: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default TextAreaElementEditor;
