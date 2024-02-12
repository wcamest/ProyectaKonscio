import CaretLeftFillIcon from "@/components/Icons/CaretLeftFillIcon";
import CaretRightFillIcon from "@/components/Icons/CaretRightFillIcon";
import ButtonComponent from "@/components/controls/button/ButtonComponent";
import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import Rectangle from "@/types/Rectangle";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentCarouselComponent from "@/types/page-document/PageDocumentCarouselComponent";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ElementRenderer from "../renderer/renderer";

type Props = {
  data: PageDocumentCarouselComponent;
  document: PageDocument;
};

const CarouselComponent = (props: Props) => {
  const { data, document } = props;
  const { currentScreen, currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const Functions = {
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
    GetCurrentPageId() {
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

      let currentPageId = Functions.GetCurrentPageId();
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
    <div
      ref={ref}
      id={`carousel-${data.id}`}
      className="relative w-full h-fit flex flex-col gap-5"
    >
      <div className="relative flex justify-between">
        <div className="p-3 w-fit flex justify-center items-center">
          <div className="scale-x-150">
            <CaretLeftFillIcon />
          </div>
        </div>
        <div className="relative w-full h-fit min-h-52 border border-solid border-gray-300 shadow-md">
          {Renderer.SelectedPage()}
        </div>
        <div className="p-3 w-fit flex justify-center items-center">
          <div className="scale-x-150">
            <CaretRightFillIcon />
          </div>
        </div>
      </div>
      <ButtonComponent>Reproducir</ButtonComponent>
    </div>
  );
};

export default CarouselComponent;
