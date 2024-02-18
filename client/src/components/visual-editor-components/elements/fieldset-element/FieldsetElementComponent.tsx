import React, { useEffect, useRef } from "react";
import ElementRenderer from "../renderer/renderer";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import Rectangle from "@/types/Rectangle";
import ClassGenerator, {
  ClassGeneratorResult,
} from "../class-generator/ClassGenerator";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentFieldsetElement from "@/types/page-document/PageDocumentFieldsetElement";

type Props = {
  data: PageDocumentFieldsetElement;
  document: PageDocument;
};

const FieldsetElementComponent = (props: Props) => {
  const { data, document } = props;
  const { currentScreen, currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();
  const ref = useRef<HTMLFieldSetElement>(null);

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

        return ElementRenderer.Render(node, document, key);
      });
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return (
    <fieldset
      ref={ref}
      id={`fieldset-${data.id}`}
      className={Functions.GetClasses()}
    >
      <legend>{data.label}</legend>
      {Renderer.Nodes()}
    </fieldset>
  );
};

export default FieldsetElementComponent;
