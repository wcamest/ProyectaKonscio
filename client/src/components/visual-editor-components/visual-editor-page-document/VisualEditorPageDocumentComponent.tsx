"use client";

import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import React from "react";
import VisualEditorPageDocumentRowComponent from "../visual-editor-page-document-row/VisualEditorPageDocumentRowComponent";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import ModalComponent from "@/components/Modal/ModalComponent";
import ElementSelectorSectionComponent from "../element-selector-section/ElementSelectorSectionComponent";
import ElementSelectorComponent from "../element-selector/ElementSelectorComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  Screen,
  setCurrentEditNode,
  setSelectedToAddNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import RichTextEditorComponent from "@/components/RichTextEditor/RichTextEditorComponent";
import RichTextElementEditorComponent from "../rich-text-element-editor/RichTextElementEditorComponent";
import ImageElementEditor from "../image-element-editor/ImageElementEditor";
import { RootState } from "@/redux/store/store";

type Props = {
  data: PageDocument;
};

const screenMinSizes: any = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const VisualEditorPageDocumentComponent = (props: Props) => {
  const { data } = props;
  const { currentScreen } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();

  const Functions = {
    HideElementEditor() {
      dispatch(setSelectedToAddNode(undefined));
      dispatch(setCurrentEditNode(undefined));
    },
    GetStyles() {
      if (currentScreen === Screen.base) return undefined;

      return {
        maxWidth: `${screenMinSizes[currentScreen]}px`,
      };
    },
  };

  const Renderer = {
    Rows() {
      const rows = data.rows.map((rowId: string, key: number) => {
        const row = data.nodes.find(
          (node: PageDocumentNode) => node.id === rowId
        );

        return row;
      });

      return rows.map((Row: PageDocumentRow | undefined, key: number) => {
        if (!Row) return undefined;

        return (
          <VisualEditorPageDocumentRowComponent
            key={key}
            data={Row}
            document={data}
          />
        );
      });
    },
  };

  return (
    <div className="relative w-full h-fit p-10 flex justify-center">
      <div
        style={Functions.GetStyles()}
        className="w-full border border-dashed border-blue-200 flex flex-col"
      >
        {Renderer.Rows()}
      </div>
      <ModalComponent
        id="add-element-modal"
        buttons={[<button key={0}>Hola</button>]}
        title="Añadir Elemento"
        onHideModal={() => {
          dispatch(setSelectedToAddNode(undefined));
        }}
      >
        <ElementSelectorComponent />
      </ModalComponent>
      <ModalComponent
        id="rich-text-element-editor-modal"
        buttons={[]}
        title="Texto enriquecido"
        onHideModal={Functions.HideElementEditor}
      >
        <RichTextElementEditorComponent />
      </ModalComponent>
      <ModalComponent
        id="image-element-editor-modal"
        buttons={[]}
        title="Imagen"
        onHideModal={Functions.HideElementEditor}
      >
        <ImageElementEditor />
      </ModalComponent>
    </div>
  );
};

export default VisualEditorPageDocumentComponent;
