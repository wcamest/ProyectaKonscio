import { RootState } from "@/redux/store/store";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentSimpleTextElement from "@/types/page-document/PageDocumentSimpleTextElement";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassGenerator, {
  ClassGeneratorResult,
} from "../class-generator/ClassGenerator";
import Rectangle from "@/types/Rectangle";
import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";

type Props = {
  data: PageDocumentSimpleTextElement;
  document: PageDocument;
};

const SimpleTextElementComponent = (props: Props) => {
  const { data, document } = props;
  const { currentScreen, currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();
  const ref = useRef<any>(null);

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

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  if (data.elementType === "span")
    return (
      <span ref={ref} className={Functions.GetClasses()}>
        {data.text}
      </span>
    );

  if (data.elementType === "p")
    return (
      <p ref={ref} className={Functions.GetClasses()}>
        {data.text}
      </p>
    );

  if (data.elementType === "h1")
    return (
      <h1 ref={ref} className={Functions.GetClasses()}>
        {data.text}
      </h1>
    );

  if (data.elementType === "h2")
    return (
      <h2 ref={ref} className={Functions.GetClasses()}>
        {data.text}
      </h2>
    );

  if (data.elementType === "h3")
    return (
      <h3 ref={ref} className={Functions.GetClasses()}>
        {data.text}
      </h3>
    );

  if (data.elementType === "h4")
    return (
      <h4 ref={ref} className={Functions.GetClasses()}>
        {data.text}
      </h4>
    );

  if (data.elementType === "h5")
    return (
      <h5 ref={ref} className={Functions.GetClasses()}>
        {data.text}
      </h5>
    );

  if (data.elementType === "h6")
    return (
      <h6 ref={ref} className={Functions.GetClasses()}>
        {data.text}
      </h6>
    );

  return (
    <div ref={ref} className={Functions.GetClasses()}>
      SimpleTextElement
    </div>
  );
};

export default SimpleTextElementComponent;
