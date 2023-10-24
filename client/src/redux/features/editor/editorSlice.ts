import WHTMLElement from "@/types/WHTMLElement";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import SelectElement from "./actions/selectElement";
import UpdateElement from "./actions/updateElement";
import CreateElement from "./actions/createElement";
import SetExpandedElementShortcutGroup from "./actions/setExpandedElementShortcutGroup";

export interface EditorState {
  selected: string;
  elements: WHTMLElement[];
  expandedElementShortcutGroup: string | undefined
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
  expandedElementShortcutGroup: "sections"
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    selectElement: SelectElement,
    updateElement: UpdateElement,
    createElement: CreateElement,
    setExpandedElementShortcutGroup: SetExpandedElementShortcutGroup
  },
});

// Action creators are generated for each case reducer function
export const { selectElement, updateElement, createElement, setExpandedElementShortcutGroup } = editorSlice.actions;

export default editorSlice.reducer;
