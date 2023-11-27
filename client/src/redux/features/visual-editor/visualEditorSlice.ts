import PageDocument from "@/types/page-document/PageDocument";
import { createSlice } from "@reduxjs/toolkit";
import SetCurrentPageDocument from "./actions/setCurrentPageDocument";
import InsertRowBefore from "./actions/insertRowBefore";
import InsertRowAfter from "./actions/insertRowAfter";
import MoveRowUp from "./actions/moveRowUp";
import MoveRowDown from "./actions/moveRowDown";
import DeleteRow from "./actions/deleteRow";
import InsertColumnBefore from "./actions/insertColumnBefore";
import InsertColumnAfter from "./actions/insertColumnAfter";
import MoveColumnLeft from "./actions/moveColumnLeft";
import MoveColumnRight from "./actions/moveColumnRight";
import DeleteColumn from "./actions/deleteColumn";

export interface VisualEditorState {
  currentDocument?: PageDocument;
}

const initialState: VisualEditorState = {};

export const visualEditorSlice = createSlice({
  name: "visualEditor",
  initialState,
  reducers: {
    setCurrentPageDocument: SetCurrentPageDocument,
    insertRowBefore: InsertRowBefore,
    insertRowAfter: InsertRowAfter,
    moveRowUp: MoveRowUp,
    moveRowDown: MoveRowDown,
    deleteRow: DeleteRow,
    insertColumnBefore: InsertColumnBefore,
    insertColumnAfter: InsertColumnAfter,
    moveColumnLeft: MoveColumnLeft,
    moveColumnRight: MoveColumnRight,
    deleteColumn: DeleteColumn
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentPageDocument,
  insertRowBefore,
  insertRowAfter,
  moveRowUp,
  moveRowDown,
  deleteRow,
  insertColumnBefore,
  insertColumnAfter,
  moveColumnLeft,
  moveColumnRight,
  deleteColumn
} = visualEditorSlice.actions;

export default visualEditorSlice.reducer;
