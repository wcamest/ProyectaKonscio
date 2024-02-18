import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentInputElement, {
  PageDocumentInputElementType,
} from "@/types/page-document/PageDocumentInputElement";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const InputElementEditor = (props: Props) => {
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
    GetInput() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const inputElement: PageDocumentInputElement =
        node as PageDocumentInputElement;

      return inputElement;
    },
    GetInputType() {
      const imageElement = Functions.GetInput();
      if (!imageElement) return "";

      return imageElement.inputType;
    },
    GetInputName() {
      const imageElement = Functions.GetInput();
      if (!imageElement) return "";

      return imageElement.inputName;
    },
    GetInputValue() {
      const imageElement = Functions.GetInput();
      if (!imageElement) return "";

      return imageElement.inputValue;
    },
    GetInputPlaceholder() {
      const imageElement = Functions.GetInput();
      if (!imageElement) return "";

      return imageElement.inputPlaceholder;
    },
    GetInputLabel() {
      const imageElement = Functions.GetInput();
      if (!imageElement) return "";

      return imageElement.inputLabel;
    },
    GetInputChecked() {
      const imageElement = Functions.GetInput();
      if (!imageElement) return false;

      return imageElement.inputChecked;
    },
    IsCheckboxOrRadioInput() {
      const inputElement = Functions.GetInput();
      if (!inputElement) return false;

      return (
        inputElement.inputType === PageDocumentInputElementType.Checkbox ||
        inputElement.inputType === PageDocumentInputElementType.Radio
      );
    },
    UpdateNode(data: any) {
      const inputElement = Functions.GetInput();
      if (!inputElement) return undefined;

      const updatedInputElement: PageDocumentInputElement = {
        ...inputElement,
        ...data,
      };

      dispatch(updateNode(updatedInputElement));
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Tipo de entrada de datos:</span>
        <select
          value={Functions.GetInputType()}
          className="p-1 bg-white border border-solid border-blue-400 rounded-md"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            Functions.UpdateNode({
              inputType: e.target.selectedOptions[0].value,
            });
          }}
        >
          <option value="text">Texto</option>
          <option value="tel">Numero telefónico</option>
          <option value="email">Correo electrónico</option>
          <option value="checkbox">Casilla de verificación</option>
          <option value="radio">Casilla de opción</option>
          <option value="number">Numero</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Nombre:</span>
        <TextInputComponent
          value={Functions.GetInputName()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              inputName: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Valor:</span>
        <TextInputComponent
          value={Functions.GetInputValue()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              inputValue: e.target.value,
            });
          }}
        />
      </div>
      {!Functions.IsCheckboxOrRadioInput() && (
        <div className="flex flex-col gap-2">
          <span className="text-xs text-gray-500">Texto provisional:</span>
          <TextInputComponent
            value={Functions.GetInputPlaceholder()}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              Functions.UpdateNode({
                inputPlaceholder: e.target.value,
              });
            }}
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Etiqueta:</span>
        <TextInputComponent
          value={Functions.GetInputLabel()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              inputLabel: e.target.value,
            });
          }}
        />
      </div>
      {Functions.IsCheckboxOrRadioInput() && (
        <div className="flex flex-col gap-2">
          <span className="text-xs text-gray-500">Activado:</span>
          <div className="flex gap-2">
            <input
              id="input-checked-control"
              type="checkbox"
              checked={Functions.GetInputChecked()}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                Functions.UpdateNode({
                  inputChecked: e.target.checked,
                });
              }}
            />
            <label htmlFor="input-checked-control">Activado</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputElementEditor;
