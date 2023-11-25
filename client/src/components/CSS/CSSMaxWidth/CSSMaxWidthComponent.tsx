import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import { WCSSMaxWidthType } from "@/types/WCSSMaxWidthType";
import { WCSSMinWidthType } from "@/types/WCSSMinWidthType";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import CSSFixedMaxWidthComponent from "../CSSFixedMaxWidth/CSSFixedMaxWidthComponent";

type Props = {};

const maxWidthResetValues: any = {
  undefined: undefined,
  fixed: "css-max-w-xs",
  zero: "css-max-w-0",
  none: "css-max-w-none",
  full: "css-max-w-full",
  min: "css-max-w-min",
  max: "css-max-w-max",
  fit: "css-max-w-fit",
};

const CSSMaxWidthComponent = (props: Props) => {
  const { selected, elements, currentScreen } = useSelector(
    (state: RootState) => state.editor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetSelectedElement() {
      return elements.find((element: WHTMLElement) => element.id === selected);
    },
    GetMaxWidthType() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return WCSSMinWidthType.undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].maxWidth.type;
    },
    UpdateMaxWidthType(value: string) {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      const updatedSelectedElement: WHTMLElement = {
        ...selectedElement,
        classes: {
          ...selectedElement.classes,
          [_currentScreen]: {
            ...selectedElement.classes[_currentScreen],
            maxWidth: {
              ...selectedElement.classes[_currentScreen].maxWidth,
              type: value as WCSSMaxWidthType,
              className: maxWidthResetValues[value],
            },
          },
        },
      };

      dispatch(updateElement(updatedSelectedElement));
    },
  };

  const Renderer = {
    FixedMaxWidthController() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      if (
        selectedElement.classes[_currentScreen].maxWidth.type ===
        WCSSMaxWidthType.fixed
      )
        return <CSSFixedMaxWidthComponent />;
    },
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <span className="font-bold">Ancho máximo</span>
      <div className="flex gap-1 items-center">
        <span>tipo:</span>
        <select
          className="w-full p-1 border border-solid border-blue-300 rounded-md outline-none"
          value={Functions.GetMaxWidthType()}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            Functions.UpdateMaxWidthType(e.target.value);
          }}
        >
          <option value={"undefined"}>{"Indefinido"}</option>
          <option value={"zero"}>{"Ancho cero"}</option>
          <option value={"fixed"}>{"Ancho fijo"}</option>
          <option value={"none"}>{"Ancho ninguno"}</option>
          <option value={"full"}>{"Ancho al 100%"}</option>
          <option value={"min"}>{"Ancho mínimo de contenido"}</option>
          <option value={"max"}>{"Ancho máximo de contenido"}</option>
          <option value={"fit"}>{"Ancho ajustado a contenido"}</option>
        </select>
      </div>
      {Renderer.FixedMaxWidthController()}
    </div>
  );
};

export default CSSMaxWidthComponent;
