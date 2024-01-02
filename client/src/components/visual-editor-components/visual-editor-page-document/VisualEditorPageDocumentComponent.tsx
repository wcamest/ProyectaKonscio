"use client";

import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import React, { useEffect, useRef, useState } from "react";
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
import ElementRenderer from "../elements/renderer/renderer";
import SimpleTextEditorComponent from "../simple-text-editor/SimpleTextEditorComponent";
import Rectangle from "@/types/Rectangle";

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

type PageDocumentState = {
  SelectionRectangle: Rectangle;
};

const VisualEditorPageDocumentComponent = (props: Props) => {
  const { data } = props;
  const { currentScreen, selectionRectangle, currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<PageDocumentState>({
    SelectionRectangle: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  });

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
    ShowSelection() {
      if (!ref.current) return;
      if (!selectionRectangle) return;

      const domRect = ref.current.getBoundingClientRect();

      const x = selectionRectangle.x - domRect.x;
      const y = selectionRectangle.y - domRect.y;
      const width = selectionRectangle.width;
      const height = selectionRectangle.height;

      setState({
        SelectionRectangle: {
          x,
          y,
          width,
          height,
        },
      });
    },
  };

  const Renderer = {
    Root() {
      const rootNode = data.nodes.find(
        (node: PageDocumentNode) => node.id === data.root
      );

      if (!rootNode) return undefined;

      return ElementRenderer.Render(rootNode, data);
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [selectionRectangle, currentStyleEditNode, document]);

  return (
    <div className="relative w-full h-fit p-10 flex justify-center">
      <div
        ref={ref}
        style={Functions.GetStyles()}
        className="relative w-full border border-dashed border-blue-200 flex flex-col"
      >
        {Renderer.Root()}
        <div className="absolute w-full h-full top-0 left-0 z-50">
          <div
            style={{
              top: `0px`,
              left: `0px`,
              width: `${state.SelectionRectangle.x}px`,
              height: `100%`,
            }}
            className="absolute bg-black bg-opacity-50"
          ></div>
          <div
            style={{
              top: `0px`,
              left: `${state.SelectionRectangle.x}px`,
              width: `${state.SelectionRectangle.width}px`,
              height: `${state.SelectionRectangle.y}px`,
            }}
            className="absolute bg-black bg-opacity-50"
          ></div>
          <div
            style={{
              top: `0px`,
              left: `${state.SelectionRectangle.width + state.SelectionRectangle.x}px`,
              width: `calc(100% - ${state.SelectionRectangle.width + state.SelectionRectangle.x}px)`,
              height: `100%`,
            }}
            className="absolute bg-black bg-opacity-50"
          ></div>
          <div
            style={{
              top: `${state.SelectionRectangle.height + state.SelectionRectangle.y}px`,
              left: `${state.SelectionRectangle.x}px`,
              width: `${state.SelectionRectangle.width}px`,
              height: `calc(100% - ${state.SelectionRectangle.height + state.SelectionRectangle.y}px)`,
            }}
            className="absolute bg-black bg-opacity-50"
          ></div>
          <div
            style={{
              top: `${state.SelectionRectangle.y}px`,
              left: `${state.SelectionRectangle.x}px`,
              width: `${state.SelectionRectangle.width}px`,
              height: `${state.SelectionRectangle.height}px`,
            }}
            className="absolute outline-8 outline-dashed outline-yellow-600"
          ></div>
        </div>
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
        id="simple-text-element-editor-modal"
        buttons={[]}
        title="Texto simple"
        onHideModal={Functions.HideElementEditor}
      >
        <SimpleTextEditorComponent />
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
