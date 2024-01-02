import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React from "react";
import NodeTreeItemComponent from "./node-tree-item/NodeTreeItemComponent";
import ColumnButtonComponent from "../column-button/ColumnButtonComponent";
import PlusCircleFillIcon from "@/components/Icons/PlusCircleFillIcon";
import {
  deleteNode,
  duplicateNode,
  moveNodeDown,
  moveNodeUp,
  pasteNode,
  setCurrentStyleEditNode,
  setCurrentStyleEditNodeTab,
  setDataToCopy,
  setSelectedToAddNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import { showModal } from "@/redux/features/modals/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import PaletteFillIcon from "@/components/Icons/PaletteFillIcon";
import { RootState } from "@/redux/store/store";
import TrashIcon from "@/components/Icons/TrashIcon";
import CaretDownFillIcon from "@/components/Icons/CaretDownFillIcon";
import CaretUpFillIcon from "@/components/Icons/CaretUpFillIcon";
import CopyIcon from "@/components/Icons/CopyIcon";
import Diagram2Icon from "@/components/Icons/Diagram2Icon";
import ScissorsIcon from "@/components/Icons/ScissorsIcon";
import ClipboardFillIcon from "@/components/Icons/ClipboardFillIcon";

type Props = {
  document: PageDocument;
};

const NodeTreeEditor = (props: Props) => {
  const { document } = props;
  const dispatch = useDispatch();
  const { currentStyleEditNode, dataToCopy } = useSelector(
    (state: RootState) => state.visualEditor
  );

  const Functions = {
    GetRoot() {
      const rootNode = document.nodes.find(
        (node: PageDocumentNode) => node.id === document.root
      );

      return rootNode;
    },
    BeginAddNode() {
      dispatch(setSelectedToAddNode(document.selectedNode));
      dispatch(showModal("add-element-modal"));
    },
    ShowOrHideStylePanel() {
      if (currentStyleEditNode === document.selectedNode) {
        dispatch(setCurrentStyleEditNode(undefined));
      } else {
        dispatch(setCurrentStyleEditNode(document.selectedNode));
      }
    },
    DeleteNode() {
      dispatch(deleteNode(document.selectedNode));
    },
    MoveUp() {
      dispatch(moveNodeUp(document.selectedNode));
    },
    MoveDown() {
      dispatch(moveNodeDown(document.selectedNode));
    },
    SelectedNodeCanDelete() {
      const node = document.nodes.find(
        (node: PageDocumentNode) => node.id === document.selectedNode
      );
      if (!node) return false;

      if (!node.canDelete) return false;

      return true;
    },
    DuplicateNode() {
      dispatch(duplicateNode(document.selectedNode));
    },
    CopyNode() {
      dispatch(setDataToCopy(document.selectedNode));
    },
    CutNode() {
      dispatch(setDataToCopy(document.selectedNode));
      dispatch(deleteNode(document.selectedNode));
    },
    PasteNode() {
      dispatch(pasteNode({}));
      dispatch(setDataToCopy(undefined));
    },
  };

  const Renderer = {
    Root() {
      const rootNode = Functions.GetRoot();

      if (!rootNode) return undefined;

      return <NodeTreeItemComponent node={rootNode} document={document} />;
    },
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden border-r border-r-solid border-r-blue-300">
      <div className="p-1 w-full flex gap-1 bg-blue-200">
        <ColumnButtonComponent
          onClick={() => {
            Functions.BeginAddNode();
          }}
        >
          <PlusCircleFillIcon />
        </ColumnButtonComponent>
        <ColumnButtonComponent
          onClick={() => {
            Functions.ShowOrHideStylePanel();
          }}
        >
          <PaletteFillIcon />
        </ColumnButtonComponent>
        {Functions.SelectedNodeCanDelete() && (
          <ColumnButtonComponent
            onClick={() => {
              Functions.DeleteNode();
            }}
          >
            <TrashIcon />
          </ColumnButtonComponent>
        )}
        <div className="w-0 h-full border-l border-l-blue-500"></div>
        <ColumnButtonComponent
          onClick={() => {
            Functions.MoveUp();
          }}
        >
          <CaretUpFillIcon />
        </ColumnButtonComponent>
        <ColumnButtonComponent
          onClick={() => {
            Functions.MoveDown();
          }}
        >
          <CaretDownFillIcon />
        </ColumnButtonComponent>
        <div className="w-0 h-full border-l border-l-blue-500"></div>
        <ColumnButtonComponent
          onClick={() => {
            Functions.DuplicateNode();
          }}
        >
          <Diagram2Icon />
        </ColumnButtonComponent>
        <ColumnButtonComponent
          onClick={() => {
            Functions.CopyNode();
          }}
        >
          <CopyIcon />
        </ColumnButtonComponent>
        {Functions.SelectedNodeCanDelete() && (
          <ColumnButtonComponent
            onClick={() => {
              Functions.CutNode();
            }}
          >
            <ScissorsIcon />
          </ColumnButtonComponent>
        )}
        {dataToCopy && (
          <ColumnButtonComponent
            onClick={() => {
              Functions.PasteNode();
            }}
          >
            <ClipboardFillIcon />
          </ColumnButtonComponent>
        )}
      </div>
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full overflow-auto">
          <div className="p-2 w-fit h-fit">{Renderer.Root()}</div>
        </div>
      </div>
    </div>
  );
};

export default NodeTreeEditor;
