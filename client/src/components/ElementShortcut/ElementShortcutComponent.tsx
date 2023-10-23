import React from "react";

type Props = {
  tagName: string;
  title: string;
  treeItemTagLabel: string,
  treeItemTitle: string,
  onAddElement: Function;
  icon?: React.JSX.Element;
};

const ElementShortcutComponent = (props: Props) => {
  const { tagName, title, treeItemTagLabel, treeItemTitle, onAddElement, icon } = props;

  return (
    <div
      className="flex flex-col border border-solid border-blue-300 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 p-1 rounded-md shadow-md select-none cursor-pointer"
      onClick={() => {
        onAddElement(tagName, treeItemTagLabel, treeItemTitle);
      }}
    >
      <span className="font-bold text-blue-950 text-xs">{title}</span>
      <div className="flex gap-1 text-xs">
        <span>tag:</span>
        <span className="underline">{treeItemTagLabel}</span>
      </div>
    </div>
  );
};

export default ElementShortcutComponent;
