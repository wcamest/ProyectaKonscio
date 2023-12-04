import { VisualEditorState } from "../visualEditorSlice";

export default function SetCurrentSectionLevel(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  state.currentSectionLevel = action.payload;
}
