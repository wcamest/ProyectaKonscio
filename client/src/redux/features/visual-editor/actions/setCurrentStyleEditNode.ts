import { VisualEditorState } from "../visualEditorSlice";

export default function SetCurrentStyleEditNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  state.currentStyleEditNode = action.payload;
}
