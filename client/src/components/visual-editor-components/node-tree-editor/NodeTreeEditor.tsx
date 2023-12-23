import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React from "react";
import NodeTreeItemComponent from "./node-tree-item/NodeTreeItemComponent";
import ColumnButtonComponent from "../column-button/ColumnButtonComponent";
import PlusCircleFillIcon from "@/components/Icons/PlusCircleFillIcon";
import { setCurrentStyleEditNode, setCurrentStyleEditNodeTab, setSelectedToAddNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { showModal } from "@/redux/features/modals/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import PaletteFillIcon from "@/components/Icons/PaletteFillIcon";
import { RootState } from "@/redux/store/store";

type Props = {
  document: PageDocument;
};

const NodeTreeEditor = (props: Props) => {
  const { document } = props;
  const dispatch = useDispatch();
  const { currentStyleEditNode } = useSelector(
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
        <ColumnButtonComponent onClick={() => {
          Functions.ShowOrHideStylePanel();
        }}>
          <PaletteFillIcon />
        </ColumnButtonComponent>
      </div>
      <div className="w-full h-full overflow-hidden">
        <div className="p-1 w-full h-full overflow-auto">{Renderer.Root()}</div>
      </div>
    </div>
  );
};

export default NodeTreeEditor;
