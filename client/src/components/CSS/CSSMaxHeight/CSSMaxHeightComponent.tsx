import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import { WCSSMaxWidthType } from "@/types/WCSSMaxWidthType";
import { WCSSMinWidthType } from "@/types/WCSSMinWidthType";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import CSSFixedMaxWidthComponent from "../CSSFixedMaxWidth/CSSFixedMaxWidthComponent";
import { WCSSMaxHeightType } from "@/types/WCSSMaxHeightType";

type Props = {};

const maxHeightResetValues: any = {
  undefined: undefined,
  fixed: "css-max-h-xs",
  zero: "css-max-h-0",
  none: "css-max-h-none",
  full: "css-max-h-full",
  screen: "css-max-h-screen",
  min: "css-max-h-min",
  max: "css-max-h-max",
  fit: "css-max-h-fit",
};

const CSSMaxHeightComponent = (props: Props) => {
  const { selected, elements, currentScreen } = useSelector(
    (state: RootState) => state.editor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetSelectedElement() {
      return elements.find((element: WHTMLElement) => element.id === selected);
    },
    GetMaxHeightType() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return WCSSMinWidthType.undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].maxHeight.type;
    },
    UpdateMaxHeightType(value: string) {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      const updatedSelectedElement: WHTMLElement = {
        ...selectedElement,
        classes: {
          ...selectedElement.classes,
          [_currentScreen]: {
            ...selectedElement.classes[_currentScreen],
            maxHeight: {
              ...selectedElement.classes[_currentScreen].maxHeight,
              type: value as WCSSMaxHeightType,
              className: maxHeightResetValues[value],
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
      <span className="font-bold">Alto máximo</span>
      <div className="flex gap-1 items-center">
        <span>tipo:</span>
        <select
          className="w-full p-1 border border-solid border-blue-300 rounded-md outline-none"
          value={Functions.GetMaxHeightType()}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            Functions.UpdateMaxHeightType(e.target.value);
          }}
        >
          <option value={"undefined"}>{"Indefinido"}</option>
          <option value={"fixed"}>{"Alto fijo"}</option>
          <option value={"none"}>{"Alto ninguno"}</option>
          <option value={"full"}>{"Alto al 100%"}</option>
          <option value={"min"}>{"Alto mínimo de contenido"}</option>
          <option value={"max"}>{"Alto máximo de contenido"}</option>
          <option value={"fit"}>{"Alto ajustado a contenido"}</option>
          <option value={"fit"}>{"Alto ajustado a la pantalla"}</option>
        </select>
      </div>
      {Renderer.FixedMaxWidthController()}
    </div>
  );
};

export default CSSMaxHeightComponent;