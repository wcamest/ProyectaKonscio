import { updateElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import WHTMLElement from "@/types/WHTMLElement";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const heightDivisions = [2, 3, 4, 5, 6];

const CSSPercentHeightComponent = (props: Props) => {
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
    GetHeightPercentDivisionIndex() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return 0;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].height
        .percentDivisionsIndex;
    },
    GetHeightPercentDivision() {
      const index = Functions.GetHeightPercentDivisionIndex();

      return heightDivisions[index];
    },
    GetHeightPercentValueIndex() {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return 0;

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      return selectedElement.classes[_currentScreen].height.percentValueIndex;
    },
    GetHeightPercentValue() {
      const divisions = Functions.GetHeightPercentDivision();
      const valueIndex = Functions.GetHeightPercentValueIndex();

      return `${((valueIndex / divisions) * 100).toFixed(1)}%`;
    },
    UpdateHeightPercentDivisionIndex(value: string) {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const division = parseInt(value);

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      let percentValueIndex =
        selectedElement.classes[_currentScreen].height.percentValueIndex;
      percentValueIndex =
        heightDivisions[division] > percentValueIndex
          ? percentValueIndex
          : heightDivisions[division];

      const className = Functions.BuildClassName(division, percentValueIndex);

      const updatedSelectedElement: WHTMLElement = {
        ...selectedElement,
        classes: {
          ...selectedElement.classes,
          [_currentScreen]: {
            ...selectedElement.classes[_currentScreen],
            height: {
              ...selectedElement.classes[_currentScreen].height,
              percentDivisionsIndex: division,
              percentValueIndex,
              className,
            },
          },
        },
      };

      dispatch(updateElement(updatedSelectedElement));
    },
    UpdateHeightPercentValueIndex(value: string) {
      const selectedElement = Functions.GetSelectedElement();

      if (!selectedElement) return undefined;

      const percentValueIndex = parseInt(value);

      const _currentScreen = currentScreen as keyof WCSSClassCollection;

      const className = Functions.BuildClassName(
        selectedElement.classes[_currentScreen].height.percentDivisionsIndex,
        percentValueIndex
      );

      const updatedSelectedElement: WHTMLElement = {
        ...selectedElement,
        classes: {
          ...selectedElement.classes,
          [_currentScreen]: {
            ...selectedElement.classes[_currentScreen],
            height: {
              ...selectedElement.classes[_currentScreen].height,
              percentValueIndex,
              className,
            },
          },
        },
      };

      dispatch(updateElement(updatedSelectedElement));
    },
    BuildClassName(divisionIndex: number, percentIndex: number) {
      if (heightDivisions[divisionIndex] === percentIndex) return `css-h-full`;

      return `css-h-${percentIndex}/${heightDivisions[divisionIndex]}`;
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
          max={heightDivisions.length - 1}
          value={Functions.GetHeightPercentDivisionIndex()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateHeightPercentDivisionIndex(e.target.value);
          }}
        />
        <span>{Functions.GetHeightPercentDivision()}</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="whitespace-nowrap">porcentaje:</span>
        <input
          className="w-full"
          type="range"
          min={1}
          max={Functions.GetHeightPercentDivision()}
          value={Functions.GetHeightPercentValueIndex()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateHeightPercentValueIndex(e.target.value);
          }}
        />
        <span>{Functions.GetHeightPercentValue()}</span>
      </div>
    </div>
  );
};

export default CSSPercentHeightComponent;
