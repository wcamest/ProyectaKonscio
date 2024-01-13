import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import Rectangle from "@/types/Rectangle";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentCarouselPageComponent from "@/types/page-document/PageDocumentCarouselPageComponent";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ElementRenderer from "../renderer/renderer";

type Props = {
  data: PageDocumentCarouselPageComponent;
  document: PageDocument;
};

const CarouselPageComponent = (props: Props) => {
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
  };

  const Renderer = {
    Nodes() {
      return data.nodes.map((nodeId: string, key: number) => {
        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === nodeId
        );

        if (!node) return undefined;

        return ElementRenderer.Render(node, document, key);
      });
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return <div ref={ref}>{Renderer.Nodes()}</div>;
};

export default CarouselPageComponent;
