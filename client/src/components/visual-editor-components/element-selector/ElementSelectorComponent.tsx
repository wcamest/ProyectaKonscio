import React, { PropsWithChildren } from "react";
import ElementSelectorSectionComponent from "../element-selector-section/ElementSelectorSectionComponent";
import ElementSelectorItemComponent from "../element-selector-item/ElementSelectorItemComponent";
import { useDispatch } from "react-redux";
import { hideModal, showModal } from "@/redux/features/modals/modalsSlice";
import PageDocumentRichTextElement from "@/types/page-document/PageDocumentRichTextElement";
import generateId from "@/utils/Utils";
import { addNode, setCurrentEditNode } from "@/redux/features/visual-editor/visualEditorSlice";

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
      };

      dispatch(addNode(richTextElement));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(richTextElement.id));
      dispatch(showModal("rich-text-element-editor-modal"));
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
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
