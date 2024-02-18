import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import Rectangle from "@/types/Rectangle";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentSelectElement from "@/types/page-document/PageDocumentSelectElement";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassGenerator, {
  ClassGeneratorResult,
} from "../class-generator/ClassGenerator";

type Props = {
  data: PageDocumentSelectElement;
  document: PageDocument;
};

const SelectElementComponent = (props: Props) => {
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
    GetSelectClasses() {
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
    GetSelectValue() {
      return data.selectValue.toLocaleLowerCase().replaceAll(/[\s]+/g, "-");
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
    Options() {
      return data.selectOptions.map((option: string, key: number) => {
        return (
          <option
            key={key}
            value={option.toLocaleLowerCase().replaceAll(/[\s]+/g, "-")}
          >
            {option}
          </option>
        );
      });
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return (
    <div
      id={`select-container-${data.id}`}
      ref={ref}
      className={`flex flex-col gap-2 ${Functions.GetContainerClasses()}`}
    >
      {data.selectLabel.length > 0 && (
        <label htmlFor={`input-${data.id}`}>{data.selectLabel}</label>
      )}
      <select
        id={`select-${data.id}`}
        value={Functions.GetSelectValue()}
        className={`w-full ${Functions.GetSelectClasses()}`}
      >
        {Renderer.Options()}
      </select>
    </div>
  );
};

export default SelectElementComponent;
