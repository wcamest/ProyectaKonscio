import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import { WCSSWidthType } from "@/types/WCSSWidthProperty";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import CSSFixedWidthComponent from "../CSSFixedWidth/CSSFixedWidthComponent";
import CSSPercentWidthComponent from "../CSSPercentWidth/CSSPercentWidthComponent";
import WCSSClassCollection from "@/types/WCSSClassCollection";

type Props = {};

const widthResetValues: any = {
  none: "",
  fixed: "css-w-0",
  auto: "css-w-auto",
  percent: "css-w-full",
  min: "css-w-min",
  max: "css-w-max",
  screen: "css-w-screen",
  fit: "css-w-fit",
};

const CSSWidthComponent = (props: Props) => {
  const { selected, elements, currentScreen } = useSelector(
    (state: RootState) => state.editor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetSelectedElement() {
      return elements.find((element: WHTMLElement) => element.id === selected);
    },
    GetWidthType() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return WCSSWidthType.none;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].width.type;
    },
    UpdateWidthType(value: string) {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      const updatedSelectedElement: WHTMLElement = {
        ...selectedElement,
        classes: {
          ...selectedElement.classes,
          [_currentScreen]: {
            ...selectedElement.classes[_currentScreen],
            width: {
              ...selectedElement.classes[_currentScreen].width,
              type: value as WCSSWidthType,
              className: widthResetValues[value],
              percentDivisionsIndex: 5,
              percentValueIndex: 12,
            },
          },
        },
      };

      dispatch(updateElement(updatedSelectedElement));
    },
  };

  const Renderer = {
    FixedWidthController() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      if (
        selectedElement.classes[_currentScreen].width.type ===
        WCSSWidthType.fixed
      )
        return <CSSFixedWidthComponent />;
    },
    PercentWidthController() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      if (
        selectedElement.classes[_currentScreen].width.type ===
        WCSSWidthType.percent
      )
        return <CSSPercentWidthComponent />;
    },
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <span className="font-bold">Ancho</span>
      <div className="flex gap-1 items-center">
        <span>tipo:</span>
        <select
          className="w-full p-1 border border-solid border-blue-300 rounded-md outline-none"
          value={Functions.GetWidthType()}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            Functions.UpdateWidthType(e.target.value);
          }}
        >
          <option value={"none"}>{"Ninguno"}</option>
          <option value={"fixed"}>{"Ancho fijo (px)"}</option>
          <option value={"percent"}>{"Porcentaje"}</option>
          <option value={"auto"}>{"Ancho automático"}</option>
          <option value={"min"}>{"Ancho mínimo"}</option>
          <option value={"max"}>{"Ancho máximo"}</option>
          <option value={"fit"}>{"Ancho ajustado a contenido"}</option>
          <option value={"screen"}>{"Ancho ajustado a pantalla"}</option>
        </select>
      </div>
      {Renderer.FixedWidthController()}
      {Renderer.PercentWidthController()}
    </div>
  );
};

export default CSSWidthComponent;
