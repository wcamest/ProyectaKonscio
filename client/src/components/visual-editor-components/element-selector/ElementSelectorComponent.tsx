import React, { PropsWithChildren } from "react";
import ElementSelectorSectionComponent from "../element-selector-section/ElementSelectorSectionComponent";
import ElementSelectorItemComponent from "../element-selector-item/ElementSelectorItemComponent";
import { useDispatch } from "react-redux";
import { hideModal, showModal } from "@/redux/features/modals/modalsSlice";
import PageDocumentRichTextElement from "@/types/page-document/PageDocumentRichTextElement";
import generateId from "@/utils/Utils";
import {
  addNode,
  setCurrentEditNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocumentImageElement from "@/types/page-document/PageDocumentImageElement";
import Styles from "../styles/styles";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";

type Props = {};

const ElementSelectorComponent = (props: Props) => {
  const dispatch = useDispatch();

  const Functions = {
    HideAddElementModal() {
      dispatch(hideModal("add-element-modal"));
    },
    AddRichText() {
      const richTextElement: PageDocumentRichTextElement = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentRichTextElement",
        rawHTML: "",
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([richTextElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(richTextElement.id));
      dispatch(showModal("rich-text-element-editor-modal"));
    },
    AddImage() {
      const imageElement: PageDocumentImageElement = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentImageElement",
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([imageElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(imageElement.id));
      dispatch(showModal("image-element-editor-modal"));
    },
    AddRow() {
      const rowId = generateId();
      const columnId = generateId();

      const columnElement: PageDocumentColumn = {
        id: columnId,
        nodes: [],
        type: "PageDocumentColumn",
        styles: Styles.CreateClassListCollection(),
        parent: rowId,
      };

      const rowElement: PageDocumentRow = {
        id: rowId,
        nodes: [columnId],
        type: "PageDocumentRow",
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([rowElement, columnElement]));

      Functions.HideAddElementModal();
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <ElementSelectorSectionComponent title="Contenedores">
        <ElementSelectorItemComponent
          icon="/icons/layers-half.svg"
          text="Sección"
          onClick={() => {
            Functions.AddRow();
          }}
        />
      </ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent title="Textos">
        <ElementSelectorItemComponent
          icon="/icons/body-text.svg"
          text="Texto enriquecido"
          onClick={() => {
            Functions.AddRichText();
          }}
        />
        <ElementSelectorItemComponent
          icon="/icons/type.svg"
          text="Texto simple"
        />
      </ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent title="Media">
        <ElementSelectorItemComponent
          icon="/icons/card-image.svg"
          text="Imagen"
          onClick={() => {
            Functions.AddImage();
          }}
        />
        <ElementSelectorItemComponent icon="/icons/film.svg" text="Video" />
      </ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent title="Tablas"></ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent title="Formularios"></ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent title="Componentes"></ElementSelectorSectionComponent>
    </div>
  );
};

export default ElementSelectorComponent;
