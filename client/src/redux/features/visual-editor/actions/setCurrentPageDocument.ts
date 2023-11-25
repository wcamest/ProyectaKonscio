import { VisualEditorState } from "../visualEditorSlice";

export default function SetCurrentPageDocument(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
    state.currentDocument = action.payload;
}
