import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import { VisualEditorState } from "../visualEditorSlice";

export default function MoveRowUp(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const rowIdToMove: string = action.payload;
  const rowIndex = state.currentDocument.nodes.findIndex(
    (row: PageDocumentRow) => row.id === rowIdToMove
  );

  if (rowIndex === 0) return state;

  const updatedRowList: PageDocumentRow[] = [
    ...state.currentDocument.nodes,
  ];
  const row = updatedRowList.splice(rowIndex, 1)[0];
  updatedRowList.splice(rowIndex - 1, 0, row);

  state.currentDocument.nodes = updatedRowList;
}
