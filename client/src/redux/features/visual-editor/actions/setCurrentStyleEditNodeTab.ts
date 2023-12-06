import { VisualEditorState } from "../visualEditorSlice";

export default function SetCurrentStyleEditNodeTab(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
    state.currentStyleEditNodeTab = action.payload;
}
