import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import { VisualEditorState } from "../visualEditorSlice";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";
import generateId from "@/utils/Utils";

export default function InsertColumnBefore(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const rowId: string = action.payload.rowId;
  const beforeId: string = action.payload.columnId;
  const newEmptyColumnId: string = generateId();

  const updatedColumnList: string[] = [];

  const row: PageDocumentRow | undefined = state.currentDocument.rows.find(
    (row: PageDocumentRow) => row.id === rowId
  );

  if (!row) return state;

  const newEmptyColumn: PageDocumentColumn = {
    id: newEmptyColumnId,
    type: "PageDocumentColumn",
  };

  for (let it = 0; it < row.columns.length; it++) {
    const columnId = row.columns[it];

    if (columnId === beforeId) {
      updatedColumnList.push(newEmptyColumnId);
    }

    updatedColumnList.push(columnId);
  }

  state.currentDocument.rows = state.currentDocument.rows.map(
    (_row: PageDocumentRow) => {
      if (_row.id === rowId) {
        return {
          ..._row,
          columns: updatedColumnList,
        };
      }
      return _row;
    }
  );
  state.currentDocument.columns = [
    ...state.currentDocument.columns,
    newEmptyColumn,
  ];
}
