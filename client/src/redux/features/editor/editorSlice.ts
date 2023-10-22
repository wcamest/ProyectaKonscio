import WHTMLElement from "@/types/WHTMLElement";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import SelectElement from "./actions/selectElement";
import UpdateElement from "./actions/updateElement";
import CreateElement from "./actions/createElement";

export interface EditorState {
  selected: string;
  elements: WHTMLElement[];
}

const initialState: EditorState = {
  selected: "root",
  elements: [
    {
      id: "root",
      tagName: "HTMLDiv",
      children: [],
      treeItemExpanded: true,
      treeItemTagLabel: "div",
      treeItemTitle: "Contenedor principal",
    },
  ],
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    selectElement: SelectElement,
    updateElement: UpdateElement,
    createElement: CreateElement,
  },
});

// Action creators are generated for each case reducer function
export const { selectElement, updateElement, createElement } = editorSlice.actions;

export default editorSlice.reducer;
