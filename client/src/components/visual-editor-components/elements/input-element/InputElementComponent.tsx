import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import Rectangle from "@/types/Rectangle";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentInputElement, {
  PageDocumentInputElementType,
} from "@/types/page-document/PageDocumentInputElement";
import React, { useEffect, useRef } from "react";
import ClassGenerator, {
  ClassGeneratorResult,
} from "../class-generator/ClassGenerator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

type Props = {
  data: PageDocumentInputElement;
  document: PageDocument;
};

const InputElementComponent = (props: Props) => {
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
    GetInputClasses() {
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
    IsCheckboxOrRadioInput() {
      return (
        data.inputType === PageDocumentInputElementType.Checkbox ||
        data.inputType === PageDocumentInputElementType.Radio
      );
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  if (!Functions.IsCheckboxOrRadioInput())
    return (
      <div
        id={`input-container-${data.id}`}
        ref={ref}
        className={`flex flex-col gap-2 ${Functions.GetContainerClasses()}`}
      >
        {data.inputLabel.length > 0 && (
          <label htmlFor={`input-${data.id}`}>{data.inputLabel}</label>
        )}
        <input
          id={`input-${data.id}`}
          type={data.inputType}
          placeholder={data.inputPlaceholder}
          name={data.inputName}
          value={data.inputValue}
          className={`w-full ${Functions.GetInputClasses()}`}
        />
      </div>
    );

  return (
    <div
      id={`input-container-${data.id}`}
      ref={ref}
      className={`flex gap-2 ${Functions.GetContainerClasses()}`}
    >
      <input
        id={`input-${data.id}`}
        type={data.inputType}
        placeholder={data.inputPlaceholder}
        name={data.inputName}
        value={data.inputValue}
        className={`${Functions.GetInputClasses()}`}
        checked={data.inputChecked}
      />
      {data.inputLabel.length > 0 && (
        <label htmlFor={`input-${data.id}`}>{data.inputLabel}</label>
      )}
    </div>
  );
};

export default InputElementComponent;
