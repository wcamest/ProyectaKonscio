import { VisualEditorState } from "../visualEditorSlice";

export default function SetCurrentEditNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  state.currentEditNode = action.payload;
}
