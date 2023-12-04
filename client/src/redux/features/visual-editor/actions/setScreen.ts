import { VisualEditorState } from "../visualEditorSlice";

export default function SetScreen(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  state.currentScreen = action.payload;
}
