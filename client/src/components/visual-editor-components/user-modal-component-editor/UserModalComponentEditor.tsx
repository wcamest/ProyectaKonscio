import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentUserModalComponent from "@/types/page-document/PageDocumentUserModalComponent";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const UserModalComponentEditor = (props: Props) => {
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
    GetUserModal() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const buttonElement: PageDocumentUserModalComponent =
        node as PageDocumentUserModalComponent;

      return buttonElement;
    },
    GetUserModalId() {
      const userModalComponent = Functions.GetUserModal();
      if (!userModalComponent) return "";

      return userModalComponent.userModalId;
    },
    GetTitle() {
      const userModalComponent = Functions.GetUserModal();
      if (!userModalComponent) return "";

      return userModalComponent.title;
    },
    GetFitWidthToContent() {
      const userModalComponent = Functions.GetUserModal();
      if (!userModalComponent) return false;

      return userModalComponent.fitWidthToContent;
    },
    GetFitHeightToContent() {
      const userModalComponent = Functions.GetUserModal();
      if (!userModalComponent) return false;

      return userModalComponent.fitHeightToContent;
    },
    UpdateNode(data: any) {
      const userModalComponent = Functions.GetUserModal();
      if (!userModalComponent) return undefined;

      const updatedUserModalComponent: PageDocumentUserModalComponent = {
        ...userModalComponent,
        ...data,
      };

      dispatch(updateNode(updatedUserModalComponent));
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Identificador:</span>
        <TextInputComponent
          value={Functions.GetUserModalId()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              userModalId: e.target.value
                .replaceAll(/[\s\-]+/g, "-")
                .toLocaleLowerCase(),
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Título:</span>
        <TextInputComponent
          value={Functions.GetTitle()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              title: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex gap-2">
        <input
          id="user-modal-fit-width-to-content"
          type="checkbox"
          checked={Functions.GetFitWidthToContent()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              fitWidthToContent: e.target.checked,
            });
          }}
        />
        <label
          className="text-xs text-gray-500"
          htmlFor="user-modal-fit-width-to-content"
        >
          Ajustar ancho al contenido
        </label>
      </div>
      <div className="flex gap-2">
        <input
          id="user-modal-fit-height-to-content"
          type="checkbox"
          checked={Functions.GetFitHeightToContent()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              fitHeightToContent: e.target.checked,
            });
          }}
        />
        <label
          className="text-xs text-gray-500"
          htmlFor="user-modal-fit-height-to-content"
        >
          Ajustar alto al contenido
        </label>
      </div>
    </div>
  );
};

export default UserModalComponentEditor;
