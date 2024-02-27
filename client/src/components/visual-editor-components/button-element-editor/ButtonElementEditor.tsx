import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentButtonElement, {
  PageDocumentButtonElementAction,
} from "@/types/page-document/PageDocumentButtonElement";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentUserModalComponent from "@/types/page-document/PageDocumentUserModalComponent";
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
    GetButtonAction() {
      const buttonElement = Functions.GetButton();
      if (!buttonElement) return undefined;

      return buttonElement.action;
    },
    GetUserModalId() {
      const buttonElement = Functions.GetButton();
      if (!buttonElement) return "";
      if (!buttonElement.userModalId) return "";

      return buttonElement.userModalId;
    },
    GetURLToOpen() {
      const buttonElement = Functions.GetButton();
      if (!buttonElement) return "";
      if (!buttonElement.urlToOpen) return "";

      return buttonElement.urlToOpen;
    },
    ListModalIds() {
      if (!currentDocument) return [];

      const modalElements = currentDocument.nodes.filter(
        (node: PageDocumentNode) => {
          return node.type === "PageDocumentUserModalComponent";
        }
      );

      return modalElements.map((node: PageDocumentNode) => {
        return (node as PageDocumentUserModalComponent).userModalId;
      });
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

  const Renderer = {
    UserModalIds() {
      const userModalIds = Functions.ListModalIds();

      return userModalIds.map((id: string, key: number) => {
        return (
          <option key={key} value={id}>
            {id}
          </option>
        );
      });
    },
  };

  const buttonType = Functions.GetButtonAction();

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Acción:</span>
        <select
          value={Functions.GetButtonAction()}
          className="p-1 bg-white border border-solid border-blue-400 rounded-md"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            Functions.UpdateNode({
              action: e.target.selectedOptions[0].value,
            });
          }}
        >
          <option value="none">Ninguno</option>
          <option value="send_form">Enviar formulario</option>
          <option value="show_user_modal">Mostrar ventana flotante</option>
          <option value="open_url">Abrir enlace</option>
        </select>
      </div>
      {buttonType === PageDocumentButtonElementAction.ShowUserModal && (
        <div className="flex flex-col gap-2">
          <span className="text-xs text-gray-500">Identificador de Modal:</span>
          <select
            value={Functions.GetUserModalId()}
            className="p-1 bg-white border border-solid border-blue-400 rounded-md"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              Functions.UpdateNode({
                userModalId: e.target.selectedOptions[0].value,
              });
            }}
          >
            <option value={""}>Ninguno</option>
            {Renderer.UserModalIds()}
          </select>
        </div>
      )}
      {buttonType === PageDocumentButtonElementAction.OpenUrl && (
        <div className="flex flex-col gap-2">
          <span className="text-xs text-gray-500">Enlace:</span>
          <TextInputComponent
            value={Functions.GetURLToOpen()}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              Functions.UpdateNode({
                urlToOpen: e.target.value,
              });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ButtonElementEditor;
