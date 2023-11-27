import generateId from "@/utils/Utils";
import { VisualEditorState } from "../visualEditorSlice";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";

export default function InsertRowAfter(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const afterId: string = action.payload;
  const newRowId: string = generateId();
  const newEmptyColumnId: string = generateId();
  const updatedRowList: PageDocumentRow[] = [];

  const newRow: PageDocumentRow = {
    id: newRowId,
    type: "PageDocumentRow",
    columns: [newEmptyColumnId],
  };

  const newEmptyColumn: PageDocumentColumn = {
    id: newEmptyColumnId,
    type: "PageDocumentColumn",
  };

  for (let it = 0; it < state.currentDocument.rows.length; it++) {
    const row = state.currentDocument.rows[it];

    updatedRowList.push(row);

    if (row.id === afterId) {
      updatedRowList.push(newRow);
    }
  }

  state.currentDocument.rows = updatedRowList;
  state.currentDocument.columns = [
    ...state.currentDocument.columns,
    newEmptyColumn,
  ];
}
