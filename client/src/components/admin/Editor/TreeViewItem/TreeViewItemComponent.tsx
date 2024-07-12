import CaretDownFillIcon from "@/components/admin/Editor/Icons/CaretDownFillIcon";
import CaretRightFillIcon from "@/components/admin/Editor/Icons/CaretRightFillIcon";
import React, { PropsWithChildren, useState } from "react";

type Props = {
  header?: React.JSX.Element;
  onSelect?: Function;
  id: string;
  selectedItemId: string;
};

const TreeViewItemComponent = (props: PropsWithChildren<Props>) => {
  const [state, setState] = useState({
    expanded: false,
  });
  const { children, header, onSelect, id, selectedItemId } = props;

  const Functions = {
    ToggleExpanded() {
      setState({
        expanded: !state.expanded,
      });
    },
    Select() {
      if (!onSelect) return;

      onSelect(id);
    },
  };

  const Renderer = {
    ExpandButton() {
      if (!children) return undefined;
      if ((children as any).length === 0) return undefined;

      return (
        <button
          className="-ml-6 size-4 aspect-square flex justify-center items-center"
          onClick={() => {
            Functions.ToggleExpanded();
          }}
        >
          {state.expanded ? <CaretDownFillIcon /> : <CaretRightFillIcon />}
        </button>
      );
    },
    Header() {
      if (selectedItemId === id)
        return (
          <div className="flex gap-2 items-center">
            {Renderer.ExpandButton()}
            <div className="px-2 py-1 w-fit bg-blue-800 text-blue-50 border border-solid border-blue-800 rounded-md shadow-md select-none cursor-pointer">
              {header}
            </div>
          </div>
        );

      return (
        <div className="flex gap-2 items-center">
          {Renderer.ExpandButton()}
          <div
            className="px-2 py-1 w-fit hover:bg-blue-200 text-blue-800 border border-solid border-blue-800 rounded-md shadow-md select-none cursor-pointer"
            onClick={() => {
              Functions.Select();
            }}
          >
            {header}
          </div>
        </div>
      );
    },
    Children() {
      if (!children) return undefined;

      const hidden = state.expanded ? "" : "hidden ";

      return (
        <div className={`${hidden}pl-8 w-fit h-fit flex flex-col gap-1`}>
          {children}
        </div>
      );
    },
  };

  return (
    <div className="w-fit flex flex-col gap-1 text-nowrap">
      {Renderer.Header()}
      {Renderer.Children()}
    </div>
  );
};

export default TreeViewItemComponent;
