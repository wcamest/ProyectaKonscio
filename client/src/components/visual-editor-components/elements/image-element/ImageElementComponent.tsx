import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentImageElement from "@/types/page-document/PageDocumentImageElement";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassGenerator, {
  ClassGeneratorResult,
} from "../class-generator/ClassGenerator";
import Rectangle from "@/types/Rectangle";
import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import Image from "next/image";

type Props = {
  data: PageDocumentImageElement;
  document: PageDocument;
};

const ImageElementComponent = (props: Props) => {
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
    Main() {
      if (!data.url || !data.description) return undefined;

      if (!data.fill && data.width && data.height)
        return (
          <Image
            ref={ref}
            className={Functions.GetClasses()}
            src={data.url}
            width={Math.round(data.width)}
            height={Math.round(data.height)}
            alt={data.description}
          />
        );

      return (
        <div ref={ref} className={Functions.GetClasses()}>
          <Image
            src={data.url}
            fill={true}
            alt={data.description}
            className="object-contain"
          />
        </div>
      );
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [
    document.selectedNode,
    data,
    currentStyleEditNode,
    document,
    currentScreen,
  ]);

  return Renderer.Main();
};

export default ImageElementComponent;
