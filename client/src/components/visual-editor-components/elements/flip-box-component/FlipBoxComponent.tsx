import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import Rectangle from "@/types/Rectangle";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentFlipBoxComponent from "@/types/page-document/PageDocumentFlipBoxComponent";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ElementRenderer from "../renderer/renderer";
import ClassGenerator, { ClassGeneratorResult } from "../class-generator/ClassGenerator";

type Props = {
  data: PageDocumentFlipBoxComponent;
  document: PageDocument;
};

const FlipBoxComponent = (props: Props) => {
  const { data, document } = props;
  const { currentScreen, currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const Functions = {
    GetClasses() {
      const classes = ClassGenerator.Generate(data, currentScreen);

      return classes
        .map((classResult: ClassGeneratorResult) => classResult.className)
        .join(" ");
    },
    ShowSelection() {
      if (!ref.current) return;
      if (data.id !== document.selectedNode) return;

      const domRect = ref.current.getBoundingClientRect();
      const rectangle: Rectangle = {
        x: domRect.x,
        y: domRect.y,
        width: domRect.width,
        height: domRect.height,
      };

      dispatch(setSelectionRectangle(rectangle));
    },
    GetCurrentSideId() {
      if (!data.nodes.length) return undefined;

      if (data.nodes.includes(document.selectedNode))
        return document.selectedNode;

      let parentNode: string | undefined = document.selectedNode;

      while (parentNode) {
        if (data.nodes.includes(parentNode)) return parentNode;

        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === parentNode
        );

        parentNode = node?.parent;
      }

      return data.nodes[0];
    },
  };

  const Renderer = {
    SelectedPage() {
      if (!data.nodes.length) return undefined;

      let currentPageId = Functions.GetCurrentSideId();
      let currentPage = document.nodes.find(
        (node: PageDocumentNode) => node.id === currentPageId
      );

      if (!currentPage) return undefined;

      return ElementRenderer.Render(currentPage, document);
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return (
    <div ref={ref} id={`flip-box-${data.id}`} className={Functions.GetClasses()}>
      {Renderer.SelectedPage()}
    </div>
  );
};

export default FlipBoxComponent;
