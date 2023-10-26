import {
  selectElement,
  updateElement,
} from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WHTMLElement from "@/types/WHTMLElement";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CaretDownFillIcon from "../Icons/CaretDownFillIcon";
import CaretRightFillIcon from "../Icons/CaretRightFillIcon";

type Props = {
  elements: WHTMLElement[];
  elementId: string;
};

const HTMLElementTreeItemComponent = (props: Props) => {
  const { elementId, elements } = props;
  const { selected } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();

  const Functions = {
    GetElement() {
      const element = elements.find(
        (element: WHTMLElement) => element.id === elementId
      );

      if (element && element.cutMode) return undefined;

      return element;
    },
    GetChildrenIds() {
      const element = Functions.GetElement();
      if (!element) return [];

      return element.children.filter((childId: string) => {
        const child = elements.find(
          (childElement: WHTMLElement) => childElement.id === childId
        );

        if (!child) return false;
        if (child.cutMode) return false;

        return true;
      });
    },
  };

  const Renderer = {
    Main() {
      const element = Functions.GetElement();
      if (!element) return undefined;

      return (
        <div className="w-fit h-fit flex flex-col gap-2">
          <div
            className={`${
              selected === elementId
                ? "bg-blue-200"
                : "bg-blue-50 hover:bg-blue-100"
            } w-fit flex gap-2 px-2 py-1 border border-solid border-blue-300 text-blue-950 rounded-md shadow-md select-none cursor-pointer`}
            onClick={() => {
              dispatch(selectElement(element.id));
            }}
          >
            {Renderer.ExpandCollapseButton()}
            <div className="flex flex-col">
              <span className="font-bold leading-4 whitespace-nowrap">
                {element.treeItemTitle}
              </span>
              <div className="text-xs flex gap-1">
                <span>tag:</span>
                <span className="underline">{element.treeItemTagLabel}</span>
              </div>
            </div>
          </div>
          {element.treeItemExpanded && element.children.length > 0 && (
            <div className="pl-8 flex flex-col gap-2">
              {Renderer.SubItems()}
            </div>
          )}
        </div>
      );
    },
    SubItems() {
      const element = Functions.GetElement();
      if (!element) return undefined;

      return element.children.map((childId: string, key: number) => {
        return (
          <HTMLElementTreeItemComponent
            key={key}
            elementId={childId}
            elements={elements}
          />
        );
      });
    },
    ExpandCollapseButton() {
      const element = Functions.GetElement();
      const childrenIds = Functions.GetChildrenIds();
      if (!element) return undefined;
      if (!childrenIds.length) return undefined;

      return (
        <div
          className="p-1 w-fit h-fit aspect-square rounded-full bg-black bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30"
          onClick={() => {
            const updatedElement: WHTMLElement = {
              ...element,
              treeItemExpanded: !element.treeItemExpanded,
            };

            dispatch(updateElement(updatedElement));
          }}
        >
          {element.treeItemExpanded ? (
            <CaretDownFillIcon />
          ) : (
            <CaretRightFillIcon />
          )}
        </div>
      );
    },
  };

  return Renderer.Main();
};

export default HTMLElementTreeItemComponent;
