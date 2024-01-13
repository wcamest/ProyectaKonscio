import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import Rectangle from "@/types/Rectangle";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentRichTextElement from "@/types/page-document/PageDocumentRichTextElement";
import React, { useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import ClassGenerator, { ClassGeneratorResult } from "../class-generator/ClassGenerator";

type Props = {
  data: PageDocumentRichTextElement;
  document: PageDocument;
};

const RichTextElementComponent = (props: Props) => {
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

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return (
    <div ref={ref} className={`ql-snow ${Functions.GetClasses()}`}>
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: data.rawHTML }}
      ></div>
    </div>
  );
};

export default RichTextElementComponent;
