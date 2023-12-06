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
import SetScreen from "./actions/setScreen";
import SetCurrentSectionLevel from "./actions/setCurrentSectionLevel";
import SetCurrentStyleEditNode from "./actions/setCurrentStyleEditNode";
import SetCurrentStyleEditNodeTab from "./actions/setCurrentStyleEditNodeTab";
import SetCurrentStyleSectionTab from "./actions/setCurrentStyleSectionTab";

export enum Screen {
  base = "base",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xl2 = "2xl",
}

export interface VisualEditorState {
  currentDocument?: PageDocument;
  selectedToAddNode?: string;
  currentEditNode?: string;
  currentStyleEditNode?: string;
  currentStyleEditNodeTab?: string;
  currentStylesSectionTab: string;
  currentSectionLevel?: string;
  currentScreen: Screen;
}

const initialState: VisualEditorState = {
  currentScreen: Screen.base,
  currentStylesSectionTab: "layout"
};

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
    updateNode: UpdateNode,
    setScreen: SetScreen,
    setCurrentSectionLevel: SetCurrentSectionLevel,
    setCurrentStyleEditNode: SetCurrentStyleEditNode,
    setCurrentStyleEditNodeTab: SetCurrentStyleEditNodeTab,
    setCurrentStyleSectionTab: SetCurrentStyleSectionTab
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
  updateNode,
  setScreen,
  setCurrentSectionLevel,
  setCurrentStyleEditNode,
  setCurrentStyleEditNodeTab,
  setCurrentStyleSectionTab
} = visualEditorSlice.actions;

export default visualEditorSlice.reducer;
