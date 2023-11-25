import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const heightClassNames = [
  "css-h-0",
  "css-h-px",
  "css-h-0.5",
  "css-h-1",
  "css-h-1.5",
  "css-h-2",
  "css-h-2.5",
  "css-h-3",
  "css-h-3.5",
  "css-h-4",
  "css-h-5",
  "css-h-6",
  "css-h-7",
  "css-h-8",
  "css-h-9",
  "css-h-10",
  "css-h-11",
  "css-h-12",
  "css-h-14",
  "css-h-16",
  "css-h-20",
  "css-h-24",
  "css-h-28",
  "css-h-32",
  "css-h-36",
  "css-h-40",
  "css-h-44",
  "css-h-48",
  "css-h-52",
  "css-h-56",
  "css-h-60",
  "css-h-64",
  "css-h-72",
  "css-h-80",
  "css-h-96",
];

const heightValues: any = {
  "css-h-0": "0px",
  "css-h-px": "1px",
  "css-h-0.5": "2px",
  "css-h-1": "4px",
  "css-h-1.5": "6px",
  "css-h-2": "8px",
  "css-h-2.5": "10px",
  "css-h-3": "12px",
  "css-h-3.5": "14px",
  "css-h-4": "16px",
  "css-h-5": "20px",
  "css-h-6": "24px",
  "css-h-7": "28px",
  "css-h-8": "32px",
  "css-h-9": "36px",
  "css-h-10": "40px",
  "css-h-11": "44px",
  "css-h-12": "48px",
  "css-h-14": "56px",
  "css-h-16": "64px",
  "css-h-20": "80px",
  "css-h-24": "96px",
  "css-h-28": "112px",
  "css-h-32": "128px",
  "css-h-36": "144px",
  "css-h-40": "160px",
  "css-h-44": "176px",
  "css-h-48": "192px",
  "css-h-52": "208px",
  "css-h-56": "224px",
  "css-h-60": "240px",
  "css-h-64": "256px",
  "css-h-72": "288px",
  "css-h-80": "320px",
  "css-h-96": "384px",
};

const CSSFixedHeightComponent = (props: Props) => {
  const { selected, elements, currentScreen } = useSelector(
    (state: RootState) => state.editor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetSelectedElement() {
      return elements.find((element: WHTMLElement) => element.id === selected);
    },
    GetHeightClassName() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].height.className;
    },
    GetHeightValue() {
      const className = Functions.GetHeightClassName();
      if (!className) return undefined;

      return heightValues[className];
    },
    GetHeightClassNameIndex() {
      const className = Functions.GetHeightClassName();

      if (!className) return 0;

      return heightClassNames.indexOf(className);
    },
    UpdateHeight(value: string) {
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
            height: {
              ...selectedElement.classes[_currentScreen].height,
              className: heightClassNames[index],
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
        max={heightClassNames.length - 1}
        value={Functions.GetHeightClassNameIndex()}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          Functions.UpdateHeight(e.target.value);
        }}
      />
      <span className="whitespace-nowrap">{Functions.GetHeightValue()}</span>
    </div>
  );
};

export default CSSFixedHeightComponent;
