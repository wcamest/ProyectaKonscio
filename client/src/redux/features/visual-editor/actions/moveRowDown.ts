import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import { VisualEditorState } from "../visualEditorSlice";

export default function MoveRowDown(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const rowIdToMove: string = action.payload;
  const rowIndex = state.currentDocument.nodes.findIndex(
    (row: PageDocumentRow) => row.id === rowIdToMove
  );

  if (rowIndex === state.currentDocument.nodes.length - 1) return state;

  const updatedRowList: PageDocumentRow[] = [
    ...state.currentDocument.nodes,
  ];
  const row = updatedRowList.splice(rowIndex, 1)[0];
  updatedRowList.splice(rowIndex + 1, 0, row);

  state.currentDocument.nodes = updatedRowList;
}
