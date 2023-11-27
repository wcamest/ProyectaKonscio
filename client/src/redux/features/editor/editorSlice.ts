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
import CreateCSSClasses from "./utils/createCSSClasses";
import SetScreen from "./actions/setScreen";

export interface EditorState {
  selected: string;
  elements: WHTMLElement[];
  elementToCopy: string | undefined;
  elementToCut: string | undefined;
  expandedElementShortcutGroup: string | undefined;
  currentScreen: Screen;
}

export enum Screen {
  base = "base",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xl2 = "2xl",
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
      cutMode: false,
      properties: [],
      classes: {
        base: CreateCSSClasses(),
        sm: CreateCSSClasses(),
        md: CreateCSSClasses(),
        lg: CreateCSSClasses(),
        xl: CreateCSSClasses(),
        xl2: CreateCSSClasses(),
      },
    },
  ],
  expandedElementShortcutGroup: "rows",
  currentScreen: Screen.base,
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
    setScreen: SetScreen,
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
  setScreen,
} = editorSlice.actions;

export default editorSlice.reducer;
