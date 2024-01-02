import { VisualEditorState } from "../visualEditorSlice";

export default function SetSelectionRectangle(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  state.selectionRectangle = action.payload;
}
