import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";
import PageDocumentSection from "@/types/page-document/PageDocumentSection";
import React, { useState } from "react";
import VisualEditorPageDocumentColumnComponent from "../visual-editor-page-document-column/VisualEditorPageDocumentColumnComponent";
import SideButtonComponent from "../side-button/SideButtonComponent";
import PlusCircleFillIcon from "@/components/Icons/PlusCircleFillIcon";
import CaretDownFillIcon from "@/components/Icons/CaretDownFillIcon";
import CaretUpFillIcon from "@/components/Icons/CaretUpFillIcon";
import { useDispatch } from "react-redux";
import {
  deleteSection,
  insertSectionAfter,
  insertSectionBefore,
  moveSectionDown,
  moveSectionUp,
} from "@/redux/features/visual-editor/visualEditorSlice";
import TrashIcon from "@/components/Icons/TrashIcon";

type Props = {
  data: PageDocumentSection;
  document: PageDocument;
};

const VisualEditorPageDocumentSectionComponent = (props: Props) => {
  const { data, document } = props;
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
    InsertSectionBefore() {
      dispatch(insertSectionBefore(data.id));
    },
    InsertSectionAfter() {
      dispatch(insertSectionAfter(data.id));
    },
    MoveSectionUp() {
      dispatch(moveSectionUp(data.id));
    },
    MoveSectionDown() {
      dispatch(moveSectionDown(data.id));
    },
    DeleteSection() {
      dispatch(deleteSection(data.id));
    },
    ItsTheOnlySection() {
      return document.sections.length === 1;
    },
  };

  const Renderer = {
    Columns() {
      return data.columns.map((columnId: string, key: number) => {
        const columnData: PageDocumentColumn | undefined =
          document.columns.find(
            (column: PageDocumentColumn) => column.id === columnId
          );

        if (!columnData) return undefined;

        return (
          <VisualEditorPageDocumentColumnComponent
            key={key}
            data={columnData}
            document={document}
          />
        );
      });
    },
  };

  return (
    <div
      id={`section-${data.id}`}
      className={`${
        state.mouseOver ? `outline outline-blue-400 ` : ""
      }relative w-full flex`}
      onMouseEnter={() => {
        Functions.SetMouseOver(true);
      }}
      onMouseLeave={() => {
        Functions.SetMouseOver(false);
      }}
    >
      <div className="relative w-full h-fit flex">{Renderer.Columns()}</div>
      {state.mouseOver && (
        <div className="absolute w-full h-0 left-0 top-0 flex justify-center">
          <div className="absolute flex w-fit h-fit bottom-0 z-50">
            <SideButtonComponent
              onClick={() => {
                Functions.InsertSectionBefore();
              }}
            >
              <PlusCircleFillIcon />
            </SideButtonComponent>
            <SideButtonComponent
              onClick={() => {
                Functions.MoveSectionUp();
              }}
            >
              <CaretUpFillIcon />
            </SideButtonComponent>
            {!Functions.ItsTheOnlySection() && (
              <SideButtonComponent
                onClick={() => {
                  Functions.DeleteSection();
                }}
              >
                <TrashIcon />
              </SideButtonComponent>
            )}
          </div>
        </div>
      )}
      {state.mouseOver && (
        <div className="absolute w-full h-0 left-0 bottom-0 flex justify-center">
          <div className="absolute flex w-fit h-fit top-0 z-50">
            <SideButtonComponent
              onClick={() => {
                Functions.InsertSectionAfter();
              }}
            >
              <PlusCircleFillIcon />
            </SideButtonComponent>
            <SideButtonComponent
              onClick={() => {
                Functions.MoveSectionDown();
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

export default VisualEditorPageDocumentSectionComponent;
