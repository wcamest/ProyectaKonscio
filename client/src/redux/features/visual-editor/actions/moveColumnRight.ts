import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import { VisualEditorState } from "../visualEditorSlice";

export default function MoveColumnRight(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const rowId: string = action.payload.rowId;
  const columnToMove: string = action.payload.columnId;

  const row: PageDocumentRow | undefined = state.currentDocument.nodes.find(
    (row: PageDocumentRow) => row.id === rowId
  );

  if (!row) return state;

  const columnIndex = row.nodes.indexOf(columnToMove);

  if (columnIndex === row.nodes.length - 1) return state;

  const updatedColumnList: string[] = [...row.nodes];
  updatedColumnList.splice(columnIndex, 1)[0];
  updatedColumnList.splice(columnIndex + 1, 0, columnToMove);

  state.currentDocument.nodes = state.currentDocument.nodes.map(
    (_row: PageDocumentRow) => {
      if (_row.id === rowId) {
        return {
          ..._row,
          nodes: updatedColumnList,
        };
      }
      return _row;
    }
  );  
}