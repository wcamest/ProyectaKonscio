import TextAreaComponent from "@/components/controls/text-area/TextAreaComponent";
import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentSelectElement from "@/types/page-document/PageDocumentSelectElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const SelectElementEditor = (props: Props) => {
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
    GetSelect() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const selectElement: PageDocumentSelectElement =
        node as PageDocumentSelectElement;

      return selectElement;
    },
    GetSelectName() {
      const selectElement = Functions.GetSelect();
      if (!selectElement) return "";

      return selectElement.selectName;
    },
    GetSelectValue() {
      const selectElement = Functions.GetSelect();
      if (!selectElement) return "";

      return selectElement.selectValue;
    },
    GetSelectLabel() {
      const selectElement = Functions.GetSelect();
      if (!selectElement) return "";

      return selectElement.selectLabel;
    },
    GetSelectOptions() {
      const selectElement = Functions.GetSelect();
      if (!selectElement) return "";

      return selectElement.selectOptions.join("\n");
    },
    UpdateNode(data: any) {
      const selectElement = Functions.GetSelect();
      if (!selectElement) return undefined;

      const updatedSelectElement: PageDocumentSelectElement = {
        ...selectElement,
        ...data,
      };

      dispatch(updateNode(updatedSelectElement));
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Nombre:</span>
        <TextInputComponent
          value={Functions.GetSelectName()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              selectName: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Valor:</span>
        <TextInputComponent
          value={Functions.GetSelectValue()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              selectValue: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Etiqueta:</span>
        <TextInputComponent
          value={Functions.GetSelectLabel()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              selectLabel: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Opciones:</span>
        <TextAreaComponent
          value={Functions.GetSelectOptions()}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            Functions.UpdateNode({
              selectOptions: e.target.value.split("\n"),
            });
          }}
        />
      </div>
    </div>
  );
};

export default SelectElementEditor;
