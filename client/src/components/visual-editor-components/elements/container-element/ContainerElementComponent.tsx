import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentContainerElement from "@/types/page-document/PageDocumentContainerElement";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import ElementRenderer from "../renderer/renderer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import ClassGenerator, {
  ClassGeneratorResult,
} from "../class-generator/ClassGenerator";
import { useEffect, useRef } from "react";
import Rectangle from "@/types/Rectangle";
import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";

type Props = {
  data: PageDocumentContainerElement;
  document: PageDocument;
};

const ContainerElementComponent = (props: Props) => {
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
  }, [document.selectedNode, currentStyleEditNode]);

  return (
    <div
      ref={ref}
      id={`container-${data.id}`}
      className={Functions.GetClasses()}
    >
      {Renderer.Nodes()}
    </div>
  );
};

export default ContainerElementComponent;
