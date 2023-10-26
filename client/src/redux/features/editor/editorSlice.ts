import WHTMLElement from "@/types/WHTMLElement";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import SelectElement from "./actions/selectElement";
import UpdateElement from "./actions/updateElement";
import CreateElement from "./actions/createElement";
import SetExpandedElementShortcutGroup from "./actions/setExpandedElementShortcutGroup";
import DeleteElement from "./actions/deleteElement";
import MoveElement from "./actions/moveElement";
import CopyElement from "./actions/copyElement";
import PasteElement from "./actions/pasteElement";
import CutElement from "./actions/cutElement";

export interface EditorState {
  selected: string;
  elements: WHTMLElement[];
  elementToCopy: string | undefined;
  elementToCut: string | undefined;
  expandedElementShortcutGroup: string | undefined;
}

const initialState: EditorState = {
  selected: "root",
  elementToCopy: undefined,
  elementToCut: undefined,
  elements: [
    {
      id: "root",
      parentId: undefined,
      tagName: "HTMLDiv",
      children: [],
      treeItemExpanded: true,
      treeItemTagLabel: "div",
      treeItemTitle: "Contenedor principal",
      cutMode: false
    },
  ],
  expandedElementShortcutGroup: "sections",
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    selectElement: SelectElement,
    updateElement: UpdateElement,
    createElement: CreateElement,
    deleteElement: DeleteElement,
    moveElement: MoveElement,
    copyElement: CopyElement,
    cutElement: CutElement,
    pasteElement: PasteElement,
    setExpandedElementShortcutGroup: SetExpandedElementShortcutGroup,
  },
});

// Action creators are generated for each case reducer function
export const {
  selectElement,
  updateElement,
  createElement,
  deleteElement,
  moveElement,
  copyElement,
  cutElement,
  pasteElement,
  setExpandedElementShortcutGroup,
} = editorSlice.actions;

export default editorSlice.reducer;
