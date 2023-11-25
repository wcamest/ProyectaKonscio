import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const widthDivisions = [2, 3, 4, 5, 6, 12];

const CSSPercentWidthComponent = (props: Props) => {
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
    GetWidthPercentDivisionIndex() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return 0;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].width
        .percentDivisionsIndex;
    },
    GetWidthPercentDivision() {
      const index = Functions.GetWidthPercentDivisionIndex();

      return widthDivisions[index];
    },
    GetWidthPercentValueIndex() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return 0;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].width.percentValueIndex;
    },
    GetWidthPercentValue() {
      const divisions = Functions.GetWidthPercentDivision();
      const valueIndex = Functions.GetWidthPercentValueIndex();

      return `${((valueIndex / divisions) * 100).toFixed(1)}%`;
    },
    UpdateWidthPercentDivisionIndex(value: string) {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const division = parseInt(value);

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      let percentValueIndex =
        selectedElement.classes[_currentScreen].width.percentValueIndex;
      percentValueIndex =
        widthDivisions[division] > percentValueIndex
          ? percentValueIndex
          : widthDivisions[division];

      const className = Functions.BuildClassName(division, percentValueIndex);

      const updatedSelectedElement: WHTMLElement = {
        ...selectedElement,
        classes: {
          ...selectedElement.classes,
          [_currentScreen]: {
            ...selectedElement.classes[_currentScreen],
            width: {
              ...selectedElement.classes[_currentScreen].width,
              percentDivisionsIndex: division,
              percentValueIndex,
              className,
            },
          },
        },
      };

      dispatch(updateElement(updatedSelectedElement));
    },
    UpdateWidthPercentValueIndex(value: string) {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const percentValueIndex = parseInt(value);

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      const className = Functions.BuildClassName(
        selectedElement.classes[_currentScreen].width.percentDivisionsIndex,
        percentValueIndex
      );

      const updatedSelectedElement: WHTMLElement = {
        ...selectedElement,
        classes: {
          ...selectedElement.classes,
          [_currentScreen]: {
            ...selectedElement.classes[_currentScreen],
            width: {
              ...selectedElement.classes[_currentScreen].width,
              percentValueIndex,
              className,
            },
          },
        },
      };

      dispatch(updateElement(updatedSelectedElement));
    },
    BuildClassName(divisionIndex: number, percentIndex: number) {
      if (widthDivisions[divisionIndex] === percentIndex) return `css-w-full`;

      return `css-w-${percentIndex}/${widthDivisions[divisionIndex]}`;
    },
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1 items-center">
        <span className="whitespace-nowrap">divisiones:</span>
        <input
          className="w-full"
          type="range"
          min={0}
          max={widthDivisions.length - 1}
          value={Functions.GetWidthPercentDivisionIndex()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateWidthPercentDivisionIndex(e.target.value);
          }}
        />
        <span>{Functions.GetWidthPercentDivision()}</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="whitespace-nowrap">porcentaje:</span>
        <input
          className="w-full"
          type="range"
          min={1}
          max={Functions.GetWidthPercentDivision()}
          value={Functions.GetWidthPercentValueIndex()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateWidthPercentValueIndex(e.target.value);
          }}
        />
        <span>{Functions.GetWidthPercentValue()}</span>
      </div>
    </div>
  );
};

export default CSSPercentWidthComponent;
