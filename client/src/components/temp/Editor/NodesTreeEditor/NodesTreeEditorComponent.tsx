import React, { MouseEventHandler, useEffect, useState } from "react";
import TreeViewComponent from "../TreeView/TreeViewComponent";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import Page from "@/types/Classes/Page";
import TreeViewItemComponent from "../TreeViewItem/TreeViewItemComponent";
import PageNode from "@/types/Classes/PageNode";
import AddElementButtonComponent from "./AddElementButton/AddElementButtonComponent";
import TrashFillIcon from "../Icons/TrashFillIcon";
import CopyIcon from "../Icons/CopyIcon";
import ClipboardFillIcon from "../Icons/ClipboardFillIcon";

type Props = {
  selectedItemId: string;
  pageData: PageDataObject;
  copiedNodeId: string | undefined;
  onSelect?: Function;
  onAdd?: Function;
  onDelete?: Function;
  onCopy?: Function;
  onPaste?: Function;
};

const NodesTreeEditorComponent = (props: Props) => {
  const {
    selectedItemId,
    pageData,
    copiedNodeId,
    onSelect,
    onAdd,
    onDelete,
    onCopy,
    onPaste,
  } = props;
  const page = new Page(pageData);

  const [state, setState] = useState({
    selectedItemId,
  });

  const Renderer = {
    Button(
      content: React.JSX.Element,
      onClick?: MouseEventHandler<HTMLButtonElement>,
      disabled: boolean = false
    ) {
      return (
        <button
          className="px-2 py-1 border border-solid border-gray-800 disabled:border-gray-300 bg-gray-100 hover:bg-gray-300 active:bg-gray-800 disabled:bg-gray-100 active:text-gray-50 disabled:text-gray-300 rounded-md shadow-md"
          onClick={onClick}
          disabled={disabled}
        >
          {content}
        </button>
      );
    },
    TreeItem(pageNode: PageNode, key?: number) {
      return (
        <TreeViewItemComponent
          key={key}
          header={<span>{pageNode.Name()}</span>}
          id={pageNode.Id()}
          selectedItemId={state.selectedItemId}
          onSelect={(id: string) => {
            setState({
              selectedItemId: id,
            });

            if (onSelect) onSelect(id);
          }}
        >
          {pageNode.Type() !== "LayoutComponent" &&
            pageNode
              .Children()
              .map((childNode: PageNode | undefined, key: number) => {
                if (!childNode) return undefined;

                return Renderer.TreeItem(childNode, key);
              })}
        </TreeViewItemComponent>
      );
    },
    RootItem() {
      const root = page.Root();

      if (!root) return undefined;

      return Renderer.TreeItem(root);
    },
  };

  useEffect(() => {
    setState({
      selectedItemId,
    });
  }, [selectedItemId]);

  return (
    <div className="w-full h-full flex flex-col divide-y divide-gray-300 overflow-hidden">
      <div>
        <div className="p-1 w-full flex gap-2 bg-gray-200 overflow-hidden">
          <AddElementButtonComponent onSelect={onAdd} />
          {Renderer.Button(<TrashFillIcon />, () => {
            if (onDelete) onDelete();
          })}
          {Renderer.Button(<CopyIcon />, () => {
            if (onCopy) onCopy();
          })}
          {Renderer.Button(
            <ClipboardFillIcon />,
            () => {
              if (onPaste) onPaste();
            },
            copiedNodeId === undefined
          )}
        </div>
      </div>
      <div className="w-full h-full overflow-hidden">
        <TreeViewComponent>{Renderer.RootItem()}</TreeViewComponent>
      </div>
    </div>
  );
};

export default NodesTreeEditorComponent;
