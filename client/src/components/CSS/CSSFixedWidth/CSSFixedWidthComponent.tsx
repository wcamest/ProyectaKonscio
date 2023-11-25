import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const widthClassNames = [
  "css-w-0",
  "css-w-px",
  "css-w-0.5",
  "css-w-1",
  "css-w-1.5",
  "css-w-2",
  "css-w-2.5",
  "css-w-3",
  "css-w-3.5",
  "css-w-4",
  "css-w-5",
  "css-w-6",
  "css-w-7",
  "css-w-8",
  "css-w-9",
  "css-w-10",
  "css-w-11",
  "css-w-12",
  "css-w-14",
  "css-w-16",
  "css-w-20",
  "css-w-24",
  "css-w-28",
  "css-w-32",
  "css-w-36",
  "css-w-40",
  "css-w-44",
  "css-w-48",
  "css-w-52",
  "css-w-56",
  "css-w-60",
  "css-w-64",
  "css-w-72",
  "css-w-80",
  "css-w-96",
];

const widthValues: any = {
  "css-w-0": "0px",
  "css-w-px": "1px",
  "css-w-0.5": "2px",
  "css-w-1": "4px",
  "css-w-1.5": "6px",
  "css-w-2": "8px",
  "css-w-2.5": "10px",
  "css-w-3": "12px",
  "css-w-3.5": "14px",
  "css-w-4": "16px",
  "css-w-5": "20px",
  "css-w-6": "24px",
  "css-w-7": "28px",
  "css-w-8": "32px",
  "css-w-9": "36px",
  "css-w-10": "40px",
  "css-w-11": "44px",
  "css-w-12": "48px",
  "css-w-14": "56px",
  "css-w-16": "64px",
  "css-w-20": "80px",
  "css-w-24": "96px",
  "css-w-28": "112px",
  "css-w-32": "128px",
  "css-w-36": "144px",
  "css-w-40": "160px",
  "css-w-44": "176px",
  "css-w-48": "192px",
  "css-w-52": "208px",
  "css-w-56": "224px",
  "css-w-60": "240px",
  "css-w-64": "256px",
  "css-w-72": "288px",
  "css-w-80": "320px",
  "css-w-96": "384px",
};

const CSSFixedWidthComponent = (props: Props) => {
  const { selected, elements, currentScreen } = useSelector(
    (state: RootState) => state.editor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetSelectedElement() {
      return elements.find((element: WHTMLElement) => element.id === selected);
    },
    GetWidthClassName() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].width.className;
    },
    GetWidthValue() {
      const className = Functions.GetWidthClassName();
      if (!className) return undefined;

      return widthValues[className];
    },
    GetWidthClassNameIndex() {
      const className = Functions.GetWidthClassName();

      if (!className) return 0;

      return widthClassNames.indexOf(className);
    },
    UpdateWidth(value: string) {
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
            width: {
              ...selectedElement.classes[_currentScreen].width,
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
        value={Functions.GetWidthClassNameIndex()}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          Functions.UpdateWidth(e.target.value);
        }}
      />
      <span className="whitespace-nowrap">{Functions.GetWidthValue()}</span>
    </div>
  );
};

export default CSSFixedWidthComponent;
