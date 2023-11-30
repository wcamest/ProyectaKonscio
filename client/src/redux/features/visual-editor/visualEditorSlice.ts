import PageDocument from "@/types/page-document/PageDocument";
import { createSlice } from "@reduxjs/toolkit";
import SetCurrentPageDocument from "./actions/setCurrentPageDocument";
import InsertRowBefore from "./actions/insertRowBefore";
import InsertRowAfter from "./actions/insertRowAfter";
import MoveRowUp from "./actions/moveRowUp";
import MoveRowDown from "./actions/moveRowDown";
import DeleteNode from "./actions/deleteNode";
import InsertColumnBefore from "./actions/insertColumnBefore";
import InsertColumnAfter from "./actions/insertColumnAfter";
import MoveColumnLeft from "./actions/moveColumnLeft";
import MoveColumnRight from "./actions/moveColumnRight";
import SetSelectedToAddNode from "./actions/setSelectedToAddNode";
import AddNode from "./actions/addNode";
import SetCurrentEditNode from "./actions/setCurrentEditNode";
import UpdateNode from "./actions/updateNode";

export interface VisualEditorState {
  currentDocument?: PageDocument;
  selectedToAddNode?: string;
  currentEditNode?: string;
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
    insertColumnBefore: InsertColumnBefore,
    insertColumnAfter: InsertColumnAfter,
    moveColumnLeft: MoveColumnLeft,
    moveColumnRight: MoveColumnRight,
    deleteNode: DeleteNode,
    setSelectedToAddNode: SetSelectedToAddNode,
    addNode: AddNode,
    setCurrentEditNode: SetCurrentEditNode,
    updateNode: UpdateNode
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentPageDocument,
  insertRowBefore,
  insertRowAfter,
  moveRowUp,
  moveRowDown,
  insertColumnBefore,
  insertColumnAfter,
  moveColumnLeft,
  moveColumnRight,
  deleteNode,
  setSelectedToAddNode,
  addNode,
  setCurrentEditNode,
  updateNode
} = visualEditorSlice.actions;

export default visualEditorSlice.reducer;
