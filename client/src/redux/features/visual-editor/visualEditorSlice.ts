import PageDocument from "@/types/page-document/PageDocument";
import { createSlice } from "@reduxjs/toolkit";
import SetCurrentPageDocument from "./actions/setCurrentPageDocument";
import DeleteNode from "./actions/deleteNode";
import SetSelectedToAddNode from "./actions/setSelectedToAddNode";
import AddNode from "./actions/addNode";
import SetCurrentEditNode from "./actions/setCurrentEditNode";
import UpdateNode from "./actions/updateNode";
import SetScreen from "./actions/setScreen";
import SetCurrentSectionLevel from "./actions/setCurrentSectionLevel";
import SetCurrentStyleEditNode from "./actions/setCurrentStyleEditNode";
import SetCurrentStyleEditNodeTab from "./actions/setCurrentStyleEditNodeTab";
import SetCurrentStyleSectionTab from "./actions/setCurrentStyleSectionTab";
import MoveNodeDown from "./actions/moveNodeDown";
import MoveNodeUp from "./actions/moveNodeUp";
import DuplicateNode from "./actions/duplicateNode";
import SetDataToCopy from "./actions/setDataToCopy";
import PasteNode from "./actions/pasteNode";

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
  dataToCopy?: string;
}

const initialState: VisualEditorState = {
  currentScreen: Screen.base,
  currentStylesSectionTab: "layout",
};

export const visualEditorSlice = createSlice({
  name: "visualEditor",
  initialState,
  reducers: {
    setCurrentPageDocument: SetCurrentPageDocument,
    deleteNode: DeleteNode,
    setSelectedToAddNode: SetSelectedToAddNode,
    addNode: AddNode,
    setCurrentEditNode: SetCurrentEditNode,
    updateNode: UpdateNode,
    setScreen: SetScreen,
    setCurrentSectionLevel: SetCurrentSectionLevel,
    setCurrentStyleEditNode: SetCurrentStyleEditNode,
    setCurrentStyleEditNodeTab: SetCurrentStyleEditNodeTab,
    setCurrentStyleSectionTab: SetCurrentStyleSectionTab,
    moveNodeDown: MoveNodeDown,
    moveNodeUp: MoveNodeUp,
    duplicateNode: DuplicateNode,
    setDataToCopy: SetDataToCopy,
    pasteNode: PasteNode
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentPageDocument,
  deleteNode,
  setSelectedToAddNode,
  addNode,
  setCurrentEditNode,
  updateNode,
  setScreen,
  setCurrentSectionLevel,
  setCurrentStyleEditNode,
  setCurrentStyleEditNodeTab,
  setCurrentStyleSectionTab,
  moveNodeDown,
  moveNodeUp,
  duplicateNode,
  setDataToCopy,
  pasteNode
} = visualEditorSlice.actions;

export default visualEditorSlice.reducer;
