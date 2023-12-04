import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideButtonComponent from "../side-button/SideButtonComponent";
import PlusCircleFillIcon from "@/components/Icons/PlusCircleFillIcon";
import CaretUpFillIcon from "@/components/Icons/CaretUpFillIcon";
import CaretLeftFillIcon from "@/components/Icons/CaretLeftFillIcon";
import CaretRightFillIcon from "@/components/Icons/CaretRightFillIcon";
import {
  deleteNode,
  insertColumnAfter,
  insertColumnBefore,
  moveColumnLeft,
  moveColumnRight,
  setCurrentEditNode,
  setCurrentSectionLevel,
  setSelectedToAddNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import ModalComponent from "@/components/Modal/ModalComponent";
import ColumnButtonComponent from "../column-button/ColumnButtonComponent";
import TrashIcon from "@/components/Icons/TrashIcon";
import { showModal } from "@/redux/features/modals/modalsSlice";
import RichTextElementComponent from "../rich-text-element/RichTextElementComponent";
import PencilFillIcon from "@/components/Icons/PencilFillIcon";
import ImageElementComponent from "../image-element/ImageElementComponent";
import PaletteFillIcon from "@/components/Icons/PaletteFillIcon";
import VisualEditorPageDocumentRowComponent from "../visual-editor-page-document-row/VisualEditorPageDocumentRowComponent";
import BoxArrowInDownRightIcon from "@/components/Icons/BoxArrowInDownRightIcon";
import { RootState } from "@/redux/store/store";
import BoxArrowUpLeftIcon from "@/components/Icons/BoxArrowUpLeftIcon";

type Props = {
  data: PageDocumentColumn;
  row: PageDocumentRow;
  document: PageDocument;
};

const VisualEditorPageDocumentColumnComponent = (props: Props) => {
  const { data, row, document } = props;
  const [state, setState] = useState({
    mouseOver: false,
  });
  const { currentSectionLevel } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();

  const components: any = {
    PageDocumentRow: VisualEditorPageDocumentRowComponent,
    PageDocumentRichTextElement: RichTextElementComponent,
    PageDocumentImageElement: ImageElementComponent,
  };

  const modals: any = {
    PageDocumentRichTextElement: "rich-text-element-editor-modal",
    PageDocumentImageElement: "image-element-editor-modal",
  };

  const Functions = {
    SetMouseOver(value: boolean) {
      setState({
        ...state,
        mouseOver: value,
      });
    },
    InsertColumnBefore() {
      dispatch(insertColumnBefore({ rowId: row.id, columnId: data.id }));
    },
    InsertColumnAfter() {
      dispatch(insertColumnAfter({ rowId: row.id, columnId: data.id }));
    },
    MoveColumnLeft() {
      dispatch(moveColumnLeft({ rowId: row.id, columnId: data.id }));
    },
    MoveColumnRight() {
      dispatch(moveColumnRight({ rowId: row.id, columnId: data.id }));
    },
    DeleteNode() {
      dispatch(deleteNode(data.id));
    },
    IsEmptyColumn() {
      return data.nodes.length === 0;
    },
    ItsTheOnlyColumn() {
      let nodes: PageDocumentNode[] = [];
      const parentNode: PageDocumentNode | undefined = document.nodes.find(
        (node: PageDocumentNode) => node.id === data.parent
      );

      if (parentNode) {
        nodes = document.nodes.filter((node: PageDocumentNode) => {
          return parentNode.nodes.includes(node.id);
        });
      } else {
        nodes = document.nodes.filter((node: PageDocumentNode) => {
          return node.type === "PageDocumentRow";
        });
      }

      return nodes.length === 1;
    },
    BeginAddNode() {
      dispatch(setSelectedToAddNode(data.id));
      dispatch(showModal("add-element-modal"));
    },
    BeginEditNode() {
      const nodeToEditId = data.nodes[0];
      const nodeToEdit = document.nodes.find(
        (node: PageDocumentNode) => node.id === nodeToEditId
      );

      if (!nodeToEdit) return null;

      if (!modals[nodeToEdit.type]) return null;

      dispatch(setCurrentEditNode(nodeToEditId));
      dispatch(showModal(modals[nodeToEdit.type]));
    },
    ItHasARowInside() {
      const someRow = data.nodes.some((nodeId: string) => {
        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === nodeId
        );

        if (!node) return false;

        return node.type === "PageDocumentRow";
      });

      return someRow;
    },
    IsHasARowAbove() {
      return currentSectionLevel !== undefined;
    },
    SectionLevelHandlersVisible() {
      return row.parent === currentSectionLevel;
    },
    GoToTheInsideSection() {
      dispatch(setCurrentSectionLevel(data.id));
    },
    GoToTheAboveSection() {
      const currentSectionColumn = document.nodes.find(
        (node: PageDocumentNode) => node.id === currentSectionLevel
      );

      if (!currentSectionColumn) return;

      const currentSectionRow = document.nodes.find(
        (node: PageDocumentNode) => node.id === currentSectionColumn.parent
      );

      if (!currentSectionRow) return;

      dispatch(setCurrentSectionLevel(currentSectionRow.parent));
    },
  };

  const Renderer = {
    EmptyColumnDefaultContent() {
      if (data.nodes.length) return undefined;

      return (
        <div className="relative w-full h-28 flex justify-center items-center">
          Columna vacía
        </div>
      );
    },
    Content() {
      if (!data.nodes.length) return undefined;

      return data.nodes.map((nodeId: string, key: number) => {
        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === nodeId
        );

        if (!node) return undefined;

        if (components[node.type]) {
          const Component = components[node.type];
          return <Component data={node} document={document} key={key} />;
        }

        return undefined;
      });
    },
  };

  return (
    <div
      id={`column-${data.id}`}
      className={`${
        state.mouseOver && Functions.SectionLevelHandlersVisible()
          ? `outline outline-blue-400 `
          : ""
      }relative h-fit flex flex-col`}
      onMouseEnter={() => {
        Functions.SetMouseOver(true);
      }}
      onMouseLeave={() => {
        Functions.SetMouseOver(false);
      }}
    >
      {Renderer.EmptyColumnDefaultContent()}
      {Renderer.Content()}
      {state.mouseOver && Functions.SectionLevelHandlersVisible() && (
        <div className="absolute w-full h-full bg-black bg-opacity-30 flex justify-center items-center flex-wrap gap-2">
          {Functions.IsEmptyColumn() && (
            <ColumnButtonComponent
              onClick={() => {
                Functions.BeginAddNode();
              }}
            >
              <PlusCircleFillIcon />
            </ColumnButtonComponent>
          )}
          {!Functions.IsEmptyColumn() && !Functions.ItHasARowInside() && (
            <ColumnButtonComponent
              onClick={() => {
                Functions.BeginEditNode();
              }}
            >
              <PencilFillIcon />
            </ColumnButtonComponent>
          )}
          <ColumnButtonComponent>
            <PaletteFillIcon />
          </ColumnButtonComponent>
          {Functions.ItHasARowInside() && (
            <ColumnButtonComponent
              onClick={() => {
                Functions.GoToTheInsideSection();
              }}
            >
              <BoxArrowInDownRightIcon />
            </ColumnButtonComponent>
          )}
          {Functions.IsHasARowAbove() && (
            <ColumnButtonComponent onClick={() => {
              Functions.GoToTheAboveSection()
            }}>
              <BoxArrowUpLeftIcon />
            </ColumnButtonComponent>
          )}
          {!Functions.ItsTheOnlyColumn() && (
            <ColumnButtonComponent
              onClick={() => {
                Functions.DeleteNode();
              }}
            >
              <TrashIcon />
            </ColumnButtonComponent>
          )}
        </div>
      )}
      {state.mouseOver && Functions.SectionLevelHandlersVisible() && (
        <div className="absolute w-0 h-full left-0 top-0 flex items-center">
          <div className="absolute flex flex-col w-fit h-fit right-0 z-50">
            <SideButtonComponent
              onClick={() => {
                Functions.InsertColumnBefore();
              }}
            >
              <PlusCircleFillIcon />
            </SideButtonComponent>
            <SideButtonComponent
              onClick={() => {
                Functions.MoveColumnLeft();
              }}
            >
              <CaretLeftFillIcon />
            </SideButtonComponent>
          </div>
        </div>
      )}
      {state.mouseOver && Functions.SectionLevelHandlersVisible() && (
        <div className="absolute w-0 h-full right-0 top-0 flex items-center">
          <div className="absolute flex flex-col w-fit h-fit left-0 z-50">
            <SideButtonComponent
              onClick={() => {
                Functions.InsertColumnAfter();
              }}
            >
              <PlusCircleFillIcon />
            </SideButtonComponent>
            <SideButtonComponent
              onClick={() => {
                Functions.MoveColumnRight();
              }}
            >
              <CaretRightFillIcon />
            </SideButtonComponent>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualEditorPageDocumentColumnComponent;
