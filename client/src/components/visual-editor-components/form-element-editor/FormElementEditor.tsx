import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentFormElement from "@/types/page-document/PageDocumentFormElement";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const FormElementEditor = (props: Props) => {
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
    GetForm() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const formElement: PageDocumentFormElement =
        node as PageDocumentFormElement;

      return formElement;
    },
    GetInputType() {
      const formElement = Functions.GetForm();
      if (!formElement) return undefined;

      return formElement.action;
    },
    UpdateNode(data: any) {
      const inputElement = Functions.GetForm();
      if (!inputElement) return undefined;

      const updatedInputElement: PageDocumentFormElement = {
        ...inputElement,
        ...data,
      };

      dispatch(updateNode(updatedInputElement));
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Acción:</span>
        <select
          value={Functions.GetInputType()}
          className="p-1 bg-white border border-solid border-blue-400 rounded-md"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            Functions.UpdateNode({
              action: e.target.selectedOptions[0].value,
            });
          }}
        >
          <option value="none">Ninguno</option>
          <option value="send_to_email">Enviar a correo electrónico</option>
        </select>
      </div>
    </div>
  );
};

export default FormElementEditor;
