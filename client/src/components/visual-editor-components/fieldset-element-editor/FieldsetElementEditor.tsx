import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentFieldsetElement from "@/types/page-document/PageDocumentFieldsetElement";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const FieldsetElementEditor = (props: Props) => {
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
    GetFieldset() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const fieldsetElement: PageDocumentFieldsetElement =
        node as PageDocumentFieldsetElement;

      return fieldsetElement;
    },
    GetFieldsetLabel() {
      const fieldsetElement = Functions.GetFieldset();
      if (!fieldsetElement) return "";
      if (!fieldsetElement.label) return "";

      return fieldsetElement.label;
    },
    UpdateNode(data: any) {
      const fieldsetElement = Functions.GetFieldset();
      if (!fieldsetElement) return undefined;

      const updatedInputElement: PageDocumentFieldsetElement = {
        ...fieldsetElement,
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
          value={Functions.GetFieldsetLabel()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              label: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default FieldsetElementEditor;
