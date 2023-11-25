import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const widthClassNames = [
    "css-max-w-xs",
    "css-max-w-sm",
    "css-max-w-md",
    "css-max-w-lg",
    "css-max-w-xl",
    "css-max-w-2xl",
    "css-max-w-3xl",
    "css-max-w-4xl",
    "css-max-w-5xl",
    "css-max-w-6xl",
    "css-max-w-7xl",
];

const widthValues: any = {
  "css-max-w-xs": "320px",
  "css-max-w-sm": "384px",
  "css-max-w-md": "448px",
  "css-max-w-lg": "512px",
  "css-max-w-xl": "576px",
  "css-max-w-2xl": "672px",
  "css-max-w-3xl": "768px",
  "css-max-w-4xl": "896px",
  "css-max-w-5xl": "1024px",
  "css-max-w-6xl": "1152px",
  "css-max-w-7xl": "1280px",
};

const CSSFixedMaxWidthComponent = (props: Props) => {
  const { selected, elements, currentScreen } = useSelector(
    (state: RootState) => state.editor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetSelectedElement() {
      return elements.find((element: WHTMLElement) => element.id === selected);
    },
    GetMaxWidthClassName() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].maxWidth.className;
    },
    GetMaxWidthValue() {
      const className = Functions.GetMaxWidthClassName();
      if (!className) return undefined;

      return widthValues[className];
    },
    GetMaxWidthClassNameIndex() {
      const className = Functions.GetMaxWidthClassName();

      if (!className) return 0;

      return widthClassNames.indexOf(className);
    },
    UpdateMaxWidth(value: string) {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const index = parseInt(value);

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      const updatedSelectedElement: WHTMLElement = {
        ...selectedElement,
        classes: {
          ...selectedElement.classes,
          [_currentScreen]: {
            ...selectedElement.classes[_currentScreen],
            maxWidth: {
              ...selectedElement.classes[_currentScreen].maxWidth,
              className: widthClassNames[index],
            },
          },
        },
      };

      dispatch(updateElement(updatedSelectedElement));
    },
  };

  return (
    <div className="flex gap-1 items-center">
      <span className="whitespace-nowrap">valor:</span>
      <input
        className="w-full"
        type="range"
        min={0}
        max={widthClassNames.length - 1}
        value={Functions.GetMaxWidthClassNameIndex()}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          Functions.UpdateMaxWidth(e.target.value);
        }}
      />
      <span className="whitespace-nowrap">{Functions.GetMaxWidthValue()}</span>
    </div>
  );
};

export default CSSFixedMaxWidthComponent;
