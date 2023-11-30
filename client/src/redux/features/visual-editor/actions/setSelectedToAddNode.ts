import { VisualEditorState } from "../visualEditorSlice";

export default function SetSelectedToAddNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  state.selectedToAddNode = action.payload;
}
