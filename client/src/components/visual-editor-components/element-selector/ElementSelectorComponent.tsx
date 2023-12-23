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
import PageDocumentContainerElement from "@/types/page-document/PageDocumentContainerElement";

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
        name: "Texto enriquecido",
        canEdit: true,
        canAddChild: false,
        canDelete: true,
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
        name: "Imagen",
        canEdit: true,
        canAddChild: false,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([imageElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(imageElement.id));
      dispatch(showModal("image-element-editor-modal"));
    },
    AddContainer() {
      const containerId = generateId();

      const containerElement: PageDocumentContainerElement = {
        id: containerId,
        nodes: [],
        type: "PageDocumentContainerElement",
        name: "Contenedor",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([containerElement]));

      Functions.HideAddElementModal();
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <ElementSelectorSectionComponent title="Contenedores">
        <ElementSelectorItemComponent
          icon="/icons/layers-half.svg"
          text="Contenedor"
          onClick={() => {
            Functions.AddContainer();
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
