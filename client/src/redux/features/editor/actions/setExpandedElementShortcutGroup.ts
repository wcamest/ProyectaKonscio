import { EditorState } from "../editorSlice";

const SetExpandedElementShortcutGroup = (
  state: EditorState,
  action: { payload: any; type: string }
) => {
  state.expandedElementShortcutGroup = action.payload;
};

export default SetExpandedElementShortcutGroup;
