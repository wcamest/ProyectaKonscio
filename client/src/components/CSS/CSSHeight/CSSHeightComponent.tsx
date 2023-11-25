import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import { WCSSSizeType } from "@/types/WCSSSizeType";
import CSSPercentHeightComponent from "../CSSPercentHeight/CSSPercentHeightComponent";
import CSSFixedHeightComponent from "../CSSFixedHeight/CSSFixedHeightComponent";

type Props = {};

const heightResetValues: any = {
  undefined: undefined,
  fixed: "css-h-0",
  auto: "css-h-auto",
  percent: "css-h-full",
  min: "css-h-min",
  max: "css-h-max",
  screen: "css-h-screen",
  fit: "css-h-fit",
};

const CSSHeightComponent = (props: Props) => {
  const { selected, elements, currentScreen } = useSelector(
    (state: RootState) => state.editor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetSelectedElement() {
      return elements.find((element: WHTMLElement) => element.id === selected);
    },
    GetHeightType() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return WCSSSizeType.undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].height.type;
    },
    UpdateHeightType(value: string) {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      const updatedSelectedElement: WHTMLElement = {
        ...selectedElement,
        classes: {
          ...selectedElement.classes,
          [_currentScreen]: {
            ...selectedElement.classes[_currentScreen],
            height: {
              ...selectedElement.classes[_currentScreen].height,
              type: value as WCSSSizeType,
              className: heightResetValues[value],
              percentDivisionsIndex: 4,
              percentValueIndex: 6,
            },
          },
        },
      };

      dispatch(updateElement(updatedSelectedElement));
    },
  };

  const Renderer = {
    FixedHeightController() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      if (
        selectedElement.classes[_currentScreen].height.type ===
        WCSSSizeType.fixed
      )
        return <CSSFixedHeightComponent />;
    },
    PercentHeightController() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      if (
        selectedElement.classes[_currentScreen].height.type ===
        WCSSSizeType.percent
      )
        return <CSSPercentHeightComponent />;
    },
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <span className="font-bold">Alto</span>
      <div className="flex gap-1 items-center">
        <span>tipo:</span>
        <select
          className="w-full p-1 border border-solid border-blue-300 rounded-md outline-none"
          value={Functions.GetHeightType()}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            Functions.UpdateHeightType(e.target.value);
          }}
        >
          <option value={"undefined"}>{"Indefinido"}</option>
          <option value={"fixed"}>{"Alto fijo (px)"}</option>
          <option value={"percent"}>{"Porcentaje"}</option>
          <option value={"auto"}>{"Alto automático"}</option>
          <option value={"min"}>{"Alto mínimo"}</option>
          <option value={"max"}>{"Alto máximo"}</option>
          <option value={"fit"}>{"Alto ajustado a contenido"}</option>
          <option value={"screen"}>{"Alto ajustado a pantalla"}</option>
        </select>
      </div>
      {Renderer.FixedHeightController()}
      {Renderer.PercentHeightController()}
    </div>
  );
};

export default CSSHeightComponent;
