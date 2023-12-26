import { RootState } from "@/redux/store/store";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentSimpleTextElement from "@/types/page-document/PageDocumentSimpleTextElement";
import React from "react";
import { useSelector } from "react-redux";
import ClassGenerator, { ClassGeneratorResult } from "../class-generator/ClassGenerator";

type Props = {
  data: PageDocumentSimpleTextElement;
  document: PageDocument;
};

const SimpleTextElementComponent = (props: Props) => {
  const { data } = props;
  const { currentScreen } = useSelector(
    (state: RootState) => state.visualEditor
  );

  const Functions = {
    GetClasses() {
      const classes = ClassGenerator.Generate(data, currentScreen);

      return classes
        .map((classResult: ClassGeneratorResult) => classResult.className)
        .join(" ");
    },
  };

  if (data.elementType === "span") return <span className={Functions.GetClasses()}>{data.text}</span>;

  if (data.elementType === "p") return <p className={Functions.GetClasses()}>{data.text}</p>;

  if (data.elementType === "h1") return <h1 className={Functions.GetClasses()}>{data.text}</h1>;
  
  if (data.elementType === "h2") return <h2 className={Functions.GetClasses()}>{data.text}</h2>;

  if (data.elementType === "h3") return <h3 className={Functions.GetClasses()}>{data.text}</h3>;

  if (data.elementType === "h4") return <h4 className={Functions.GetClasses()}>{data.text}</h4>;

  if (data.elementType === "h5") return <h5 className={Functions.GetClasses()}>{data.text}</h5>;

  if (data.elementType === "h6") return <h6 className={Functions.GetClasses()}>{data.text}</h6>;

  return <div className={Functions.GetClasses()}>SimpleTextElement</div>;
};

export default SimpleTextElementComponent;