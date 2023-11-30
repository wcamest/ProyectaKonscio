import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
} from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import ModalComponent from "@/components/Modal/ModalComponent";
import ColumnButtonComponent from "../column-button/ColumnButtonComponent";
import TrashIcon from "@/components/Icons/TrashIcon";

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
  const dispatch = useDispatch();

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

      console.log(nodes);

      return nodes.length === 1;
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
  };

  return (
    <div
      id={`column-${data.id}`}
      className={`${
        state.mouseOver ? `outline outline-blue-400 ` : ""
      }relative h-fit flex`}
      onMouseEnter={() => {
        Functions.SetMouseOver(true);
      }}
      onMouseLeave={() => {
        Functions.SetMouseOver(false);
      }}
    >
      {Renderer.EmptyColumnDefaultContent()}
      {state.mouseOver && (
        <div className="absolute w-full h-full bg-black bg-opacity-30 flex justify-center items-center flex-wrap gap-2">
          <ColumnButtonComponent>
            <PlusCircleFillIcon />
          </ColumnButtonComponent>
          {!Functions.ItsTheOnlyColumn() && <ColumnButtonComponent
            onClick={() => {
              Functions.DeleteNode();
            }}
          >
            <TrashIcon />
          </ColumnButtonComponent>}
        </div>
      )}
      {state.mouseOver && (
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
      {state.mouseOver && (
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
