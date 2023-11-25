import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import { WCSSMinWidthType } from "@/types/WCSSMinWidthType";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const minWidthResetValues: any = {
  undefined: undefined,
  zero: "css-min-w-0",
  full: "css-min-w-full",
  min: "css-min-w-min",
  max: "css-min-w-max",
  fit: "css-min-w-fit",
};

const CSSMinWidthComponent = (props: Props) => {
    const { selected, elements, currentScreen } = useSelector(
    (state: RootState) => state.editor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetSelectedElement() {
      return elements.find((element: WHTMLElement) => element.id === selected);
    },
    GetMinWidthType() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return WCSSMinWidthType.undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].minWidth.type;
    },
    UpdateMinWidthType(value: string) {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      const updatedSelectedElement: WHTMLElement = {
        ...selectedElement,
        classes: {
          ...selectedElement.classes,
          [_currentScreen]: {
            ...selectedElement.classes[_currentScreen],
            minWidth: {
              ...selectedElement.classes[_currentScreen].minWidth,
              type: value as WCSSMinWidthType,
              className: minWidthResetValues[value],
            },
          },
        },
      };

      dispatch(updateElement(updatedSelectedElement));
    },
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <span className="font-bold">Ancho mínimo</span>
      <div className="flex gap-1 items-center">
        <span>tipo:</span>
        <select
          className="w-full p-1 border border-solid border-blue-300 rounded-md outline-none"
          value={Functions.GetMinWidthType()}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            Functions.UpdateMinWidthType(e.target.value);
          }}
        >
          <option value={"undefined"}>{"Indefinido"}</option>
          <option value={"zero"}>{"Ancho cero"}</option>
          <option value={"full"}>{"Ancho al 100%"}</option>
          <option value={"min"}>{"Ancho mínimo de contenido"}</option>
          <option value={"max"}>{"Ancho máximo de contenido"}</option>
          <option value={"fit"}>{"Ancho ajustado a contenido"}</option>
        </select>
      </div>
    </div>
  );
};

export default CSSMinWidthComponent;
