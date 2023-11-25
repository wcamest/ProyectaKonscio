import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import { WCSSMinHeightType } from "@/types/WCSSMinHeightType";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const minHeightResetValues: any = {
  undefined: undefined,
  zero: "css-min-h-0",
  full: "css-min-h-full",
  screen: "css-min-h-screen",
  min: "css-min-h-min",
  max: "css-min-h-max",
  fit: "css-min-h-fit",
};

const CSSMinHeightComponent = (props: Props) => {
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

      if (!selectedElement) return WCSSMinHeightType.undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].minHeight.type;
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
            minHeight: {
              ...selectedElement.classes[_currentScreen].minHeight,
              type: value as WCSSMinHeightType,
              className: minHeightResetValues[value],
            },
          },
        },
      };

      dispatch(updateElement(updatedSelectedElement));
    },
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <span className="font-bold">Alto mínimo</span>
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
          <option value={"zero"}>{"Alto cero"}</option>
          <option value={"full"}>{"Alto mínimo al 100%"}</option>
          <option value={"min"}>{"Alto mínimo de contenido"}</option>
          <option value={"max"}>{"Alto máximo de contenido"}</option>
          <option value={"fit"}>{"Alto ajustado a contenido"}</option>
          <option value={"screen"}>{"Alto ajustado a pantalla"}</option>
        </select>
      </div>
    </div>
  );
};

export default CSSMinHeightComponent;
