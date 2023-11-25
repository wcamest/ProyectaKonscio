import PageDocument from "@/types/page-document/PageDocument";
import { createSlice } from "@reduxjs/toolkit";
import SetCurrentPageDocument from "./actions/setCurrentPageDocument";
import InsertSectionBefore from "./actions/insertSectionBefore";
import InsertSectionAfter from "./actions/insertSectionAfter";
import MoveSectionUp from "./actions/moveSectionUp";
import MoveSectionDown from "./actions/moveSectionDown";
import DeleteSection from "./actions/deleteSection";

export interface VisualEditorState {
  currentDocument?: PageDocument;
}

const initialState: VisualEditorState = {};

export const visualEditorSlice = createSlice({
  name: "visualEditor",
  initialState,
  reducers: {
    setCurrentPageDocument: SetCurrentPageDocument,
    insertSectionBefore: InsertSectionBefore,
    insertSectionAfter: InsertSectionAfter,
    moveSectionUp: MoveSectionUp,
    moveSectionDown: MoveSectionDown,
    deleteSection: DeleteSection
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentPageDocument,
  insertSectionBefore,
  insertSectionAfter,
  moveSectionUp,
  moveSectionDown,
  deleteSection
} = visualEditorSlice.actions;

export default visualEditorSlice.reducer;
