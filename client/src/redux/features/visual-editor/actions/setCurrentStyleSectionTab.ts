import { VisualEditorState } from "../visualEditorSlice";

export default function SetCurrentStyleSectionTab(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  state.currentStylesSectionTab = action.payload;
}
