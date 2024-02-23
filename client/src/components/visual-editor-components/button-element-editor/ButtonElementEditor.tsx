import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentButtonElement from "@/types/page-document/PageDocumentButtonElement";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const ButtonElementEditor = (props: Props) => {
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
    GetButton() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const buttonElement: PageDocumentButtonElement =
        node as PageDocumentButtonElement;

      return buttonElement;
    },
    GetButtonType() {
      const actionElement = Functions.GetButton();
      if (!actionElement) return undefined;

      return actionElement.action;
    },
    UpdateNode(data: any) {
      const inputElement = Functions.GetButton();
      if (!inputElement) return undefined;

      const updatedInputElement: PageDocumentButtonElement = {
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
          value={Functions.GetButtonType()}
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

export default ButtonElementEditor;
