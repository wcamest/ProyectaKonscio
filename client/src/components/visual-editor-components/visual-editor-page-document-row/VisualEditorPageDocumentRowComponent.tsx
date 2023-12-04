import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import React, { useState } from "react";
import VisualEditorPageDocumentColumnComponent from "../visual-editor-page-document-column/VisualEditorPageDocumentColumnComponent";
import SideButtonComponent from "../side-button/SideButtonComponent";
import PlusCircleFillIcon from "@/components/Icons/PlusCircleFillIcon";
import CaretDownFillIcon from "@/components/Icons/CaretDownFillIcon";
import CaretUpFillIcon from "@/components/Icons/CaretUpFillIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNode,
  insertRowAfter,
  insertRowBefore,
  moveRowDown,
  moveRowUp,
} from "@/redux/features/visual-editor/visualEditorSlice";
import TrashIcon from "@/components/Icons/TrashIcon";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { RootState } from "@/redux/store/store";

type Props = {
  data: PageDocumentRow;
  document: PageDocument;
};

const VisualEditorPageDocumentRowComponent = (props: Props) => {
  const { data, document } = props;
  const [state, setState] = useState({
    mouseOver: false,
  });
  const { currentSectionLevel } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();

  const Functions = {
    SetMouseOver(value: boolean) {
      setState({
        ...state,
        mouseOver: value,
      });
    },
    InsertRowBefore() {
      dispatch(insertRowBefore(data.id));
    },
    InsertRowAfter() {
      dispatch(insertRowAfter(data.id));
    },
    MoveRowUp() {
      dispatch(moveRowUp(data.id));
    },
    MoveRowDown() {
      dispatch(moveRowDown(data.id));
    },
    DeleteNode() {
      dispatch(deleteNode(data.id));
    },
    ItsTheOnlyRow() {
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
    SectionLevelHandlersVisible() {
      return data.parent === currentSectionLevel;
    },
  };

  const Renderer = {
    Columns() {
      return data.nodes.map((columnId: string, key: number) => {
        const columnData: PageDocumentColumn | undefined = document.nodes.find(
          (column: PageDocumentColumn) => column.id === columnId
        );

        if (!columnData) return undefined;

        return (
          <VisualEditorPageDocumentColumnComponent
            key={key}
            data={columnData}
            row={data}
            document={document}
          />
        );
      });
    },
  };

  return (
    <div
      id={`row-${data.id}`}
      className={`${
        state.mouseOver && Functions.SectionLevelHandlersVisible()
          ? `outline outline-blue-400 `
          : ""
      }relative w-full flex`}
      onMouseEnter={() => {
        Functions.SetMouseOver(true);
      }}
      onMouseLeave={() => {
        Functions.SetMouseOver(false);
      }}
    >
      <div className="relative w-full h-fit flex">{Renderer.Columns()}</div>
      {state.mouseOver && Functions.SectionLevelHandlersVisible() && (
        <div className="absolute w-full h-0 left-0 top-0 flex justify-center">
          <div className="absolute flex w-fit h-fit bottom-0 z-50">
            <SideButtonComponent
              onClick={() => {
                Functions.InsertRowBefore();
              }}
            >
              <PlusCircleFillIcon />
            </SideButtonComponent>
            <SideButtonComponent
              onClick={() => {
                Functions.MoveRowUp();
              }}
            >
              <CaretUpFillIcon />
            </SideButtonComponent>
            {!Functions.ItsTheOnlyRow() && (
              <SideButtonComponent
                onClick={() => {
                  Functions.DeleteNode();
                }}
              >
                <TrashIcon />
              </SideButtonComponent>
            )}
          </div>
        </div>
      )}
      {state.mouseOver && Functions.SectionLevelHandlersVisible() && (
        <div className="absolute w-full h-0 left-0 bottom-0 flex justify-center">
          <div className="absolute flex w-fit h-fit top-0 z-50">
            <SideButtonComponent
              onClick={() => {
                Functions.InsertRowAfter();
              }}
            >
              <PlusCircleFillIcon />
            </SideButtonComponent>
            <SideButtonComponent
              onClick={() => {
                Functions.MoveRowDown();
              }}
            >
              <CaretDownFillIcon />
            </SideButtonComponent>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualEditorPageDocumentRowComponent;
