import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import Rectangle from "@/types/Rectangle";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentUserModalComponent from "@/types/page-document/PageDocumentUserModalComponent";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ElementRenderer from "../renderer/renderer";
import BlueButtonComponent from "../blue-button-component/BlueButtonComponent";

type Props = {
  data: PageDocumentUserModalComponent;
  document: PageDocument;
};

const UserModalComponent = (props: Props) => {
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

      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

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

        if (node.type === "PageDocumentUserModalComponent") return undefined;

        const element = ElementRenderer.Render(node, document, key);
        return element;
      });
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return (
    <div
      ref={ref}
      className={`${data.fitWidthToContent ? "w-fit" : "w-full"} ${
        data.fitHeightToContent ? "h-fit" : "h-screen"
      } flex flex-col justify-between overflow-hidden`}
    >
      <div className="p-2 bg-blue-800 text-blue-50">{data.title}</div>
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full overflow-auto">{Renderer.Nodes()}</div>
      </div>
      <div className="p-2 flex justify-end">
        <BlueButtonComponent>Aceptar</BlueButtonComponent>
      </div>
    </div>
  );
};

export default UserModalComponent;
