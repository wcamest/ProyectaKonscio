"use client";

import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import React from "react";
import VisualEditorPageDocumentRowComponent from "../visual-editor-page-document-row/VisualEditorPageDocumentRowComponent";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import ModalComponent from "@/components/Modal/ModalComponent";
import ElementSelectorSectionComponent from "../element-selector-section/ElementSelectorSectionComponent";
import ElementSelectorComponent from "../element-selector/ElementSelectorComponent";
import { useDispatch } from "react-redux";
import { setSelectedToAddNode } from "@/redux/features/visual-editor/visualEditorSlice";

type Props = {
  data: PageDocument;
};

const VisualEditorPageDocumentComponent = (props: Props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const Renderer = {
    Rows() {
      const rows = data.nodes.filter((node: PageDocumentNode) => {
        return node.type === "PageDocumentRow";
      });

      return rows.map((Row: PageDocumentRow, key: number) => {
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
    <div className="relative w-full h-fit p-10">
      <div className="border border-dashed border-blue-200 flex flex-col">
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
    </div>
  );
};

export default VisualEditorPageDocumentComponent;
