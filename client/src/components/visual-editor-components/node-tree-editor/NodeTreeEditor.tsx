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
  setCurrentEditNode,
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
import PencilFillIcon from "@/components/Icons/PencilFillIcon";

type Props = {
  document: PageDocument;
};

const elementEditorModalIds: any = {
  PageDocumentImageElement: "image-element-editor-modal",
  PageDocumentRichTextElement: "rich-text-element-editor-modal",
  PageDocumentSimpleTextElement: "simple-text-element-editor-modal",
  PageDocumentInputElement: "input-element-editor-modal",
  PageDocumentTextAreaElement: "textarea-element-editor-modal",
  PageDocumentSelectElement: "select-element-editor-modal",
  PageDocumentButtonElement: "button-element-editor-modal",
  PageDocumentFormElement: "form-element-editor-modal",
  PageDocumentFieldsetElement: "fieldset-element-editor-modal",
  PageDocumentUserModalComponent: "user-modal-editor-modal",
  PageDocumentVideoPlaylistGroupComponent: "video-playlist-group-editor-modal",
  PageDocumentVideoPlaylistItemComponent: "video-playlist-item-editor-modal",
  PageDocument3DCameraComponent: "3d-camera-editor-modal",
  PageDocument3DModelComponent: "3d-model-editor-modal",
  PageDocument3DPointLightComponent: "point-light-editor-modal",
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
    SelectedNodeCanAddChild() {
      const node = document.nodes.find(
        (node: PageDocumentNode) => node.id === document.selectedNode
      );
      if (!node) return false;

      if (!node.canAddChild) return false;

      return true;
    },
    SelectedNodeCanDelete() {
      const node = document.nodes.find(
        (node: PageDocumentNode) => node.id === document.selectedNode
      );
      if (!node) return false;

      if (!node.canDelete) return false;

      return true;
    },
    SelectedNodeHasEditableProperties() {
      const node = document.nodes.find(
        (node: PageDocumentNode) => node.id === document.selectedNode
      );
      if (!node) return false;

      const nodeTypesWithEditableProperties: string[] = [
        "PageDocumentImageElement",
        "PageDocumentRichTextElement",
        "PageDocumentSimpleTextElement",
        "PageDocumentFormElement",
        "PageDocumentFieldsetElement",
        "PageDocumentSelectElement",
        "PageDocumentInputElement",
        "PageDocumentTextAreaElement",
        "PageDocumentButtonElement",
        "PageDocumentUserModalComponent",
        "PageDocumentVideoPlaylistGroupComponent",
        "PageDocumentVideoPlaylistItemComponent",
        "PageDocument3DCameraComponent",
        "PageDocument3DModelComponent",
        "PageDocument3DPointLightComponent",
      ];

      return nodeTypesWithEditableProperties.includes(node.type);
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
    ShowElementEditorModal() {
      const node = document.nodes.find(
        (node: PageDocumentNode) => node.id === document.selectedNode
      );
      if (!node) return;

      dispatch(setCurrentEditNode(node.id));
      dispatch(showModal(elementEditorModalIds[node.type]));
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
        {Functions.SelectedNodeCanAddChild() && (
          <ColumnButtonComponent
            onClick={() => {
              Functions.BeginAddNode();
            }}
          >
            <PlusCircleFillIcon />
          </ColumnButtonComponent>
        )}
        <ColumnButtonComponent
          onClick={() => {
            Functions.ShowOrHideStylePanel();
          }}
        >
          <PaletteFillIcon />
        </ColumnButtonComponent>
        {Functions.SelectedNodeHasEditableProperties() && (
          <ColumnButtonComponent
            onClick={() => {
              Functions.ShowElementEditorModal();
            }}
          >
            <PencilFillIcon />
          </ColumnButtonComponent>
        )}
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
