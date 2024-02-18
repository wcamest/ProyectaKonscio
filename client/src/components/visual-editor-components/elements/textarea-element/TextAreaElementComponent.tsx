import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import Rectangle from "@/types/Rectangle";
import React, { useEffect, useRef } from "react";
import ClassGenerator, {
  ClassGeneratorResult,
} from "../class-generator/ClassGenerator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import PageDocumentTextAreaElement from "@/types/page-document/PageDocumentTextAreaElement";
import PageDocument from "@/types/page-document/PageDocument";

type Props = {
  data: PageDocumentTextAreaElement;
  document: PageDocument;
};

const TextAreaElementComponent = (props: Props) => {
  const { data, document } = props;
  const { currentScreen, currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const Functions = {
    GetContainerClasses() {
      const classes = ClassGenerator.Generate(data, currentScreen);

      const containerClasses: string[] = [
        "width",
        "textAlign",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "letterSpacing",
        "lineHeight",
        "textColor",
        "textDecoration",
        "textDecorationColor",
        "textDecorationStyle",
        "textDecorationThickness",
        "textUnderlineOffset",
        "textTransform",
        "textOverflow",
        "whiteSpace",
      ];

      let inputClasses = classes.map((classResult: ClassGeneratorResult) => {
        if (!containerClasses.includes(classResult.property)) return undefined;

        return classResult.className;
      });

      inputClasses = inputClasses.filter(
        (className: string | undefined) => className !== undefined
      );

      return inputClasses.join(" ");
    },
    GetTextAreaClasses() {
      const classes = ClassGenerator.Generate(data, currentScreen);

      const containerClasses: string[] = [
        "width",
        "textAlign",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "letterSpacing",
        "lineHeight",
        "textColor",
        "textDecoration",
        "textDecorationColor",
        "textDecorationStyle",
        "textDecorationThickness",
        "textUnderlineOffset",
        "textTransform",
        "textOverflow",
        "whiteSpace",
      ];

      let inputClasses = classes.map((classResult: ClassGeneratorResult) => {
        if (containerClasses.includes(classResult.property)) return undefined;

        return classResult.className;
      });

      inputClasses = inputClasses.filter(
        (className: string | undefined) => className !== undefined
      );

      return inputClasses.join(" ");
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

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return (
    <div
      id={`textarea-container-${data.id}`}
      ref={ref}
      className={`flex flex-col gap-2 ${Functions.GetContainerClasses()}`}
    >
      {data.textAreaLabel.length > 0 && (
        <label htmlFor={`textarea-${data.id}`}>{data.textAreaLabel}</label>
      )}
      <textarea
        id={`textarea-${data.id}`}
        placeholder={data.textAreaPlaceholder}
        name={data.textAreaName}
        value={data.textAreaValue}
        className={`w-full ${Functions.GetTextAreaClasses()}`}
      />
    </div>
  );
};

export default TextAreaElementComponent;
