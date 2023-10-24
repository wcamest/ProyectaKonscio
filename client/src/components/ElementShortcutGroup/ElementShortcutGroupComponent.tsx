import { RootState } from "@/redux/store/store";
import React, { PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";
import CaretDownFillIcon from "../Icons/CaretDownFillIcon";
import CaretRightFillIcon from "../Icons/CaretRightFillIcon";
import { setExpandedElementShortcutGroup } from "@/redux/features/editor/editorSlice";

type Props = {
  title: string;
  id: string;
};

const ElementShortcutGroupComponent = (props: PropsWithChildren<Props>) => {
  const { title, children, id } = props;
  const dispatch = useDispatch();
  const { expandedElementShortcutGroup } = useSelector(
    (state: RootState) => state.editor
  );
  const expanded = expandedElementShortcutGroup === id;

  const Functions = {
    ExpandCollapse() {
      const newExpandValue: string | undefined = expanded ? undefined : id;
      dispatch(setExpandedElementShortcutGroup(newExpandValue));
    },
  };

  const Renderer = {
    ExpandCollapseButton() {
      return (
        <div
          className="p-1 w-fit h-fit aspect-square rounded-full bg-black bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30"
        >
          {expanded ? <CaretDownFillIcon /> : <CaretRightFillIcon />}
        </div>
      );
    },
  };

  return (
    <div className="w-full h-fit flex flex-col rounded-md shadow-md border border-solid border-blue-300">
      <div className="flex gap-1 p-1 bg-blue-100 text-blue-950 rounded-t-md cursor-pointer" onClick={Functions.ExpandCollapse}>
        {Renderer.ExpandCollapseButton()}
        <span className="select-none">{title}</span>
      </div>
      {expanded && (
        <div className="p-2 bg-white rounded-b-md flex flex-wrap gap-1">
          {children}
        </div>
      )}
    </div>
  );
};

export default ElementShortcutGroupComponent;
