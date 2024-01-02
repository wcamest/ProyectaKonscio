import { _duplicateNodeData, _getDescendants } from "../utils/utils";
import { VisualEditorState } from "../visualEditorSlice";

export default function SetDataToCopy(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return undefined;

  if (!action.payload) {
    state.dataToCopy = undefined;
    return state;
  }

  const toCopyId: string = action.payload;

  let dataToString: string = _duplicateNodeData(
    toCopyId,
    state.currentDocument.nodes
  );

  state.dataToCopy = dataToString;
}
