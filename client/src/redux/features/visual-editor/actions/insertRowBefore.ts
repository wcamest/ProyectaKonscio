import generateId from "@/utils/Utils";
import { VisualEditorState } from "../visualEditorSlice";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";

export default function InsertRowBefore(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const beforeId: string = action.payload;
  const newRowId: string = generateId();
  const newEmptyColumnId: string = generateId();
  const updatedRowList: PageDocumentRow[] = [];

  const newRow: PageDocumentRow = {
    id: newRowId,
    type: "PageDocumentRow",
    nodes: [newEmptyColumnId],
  };

  const newEmptyColumn: PageDocumentColumn = {
    id: newEmptyColumnId,
    type: "PageDocumentColumn",
    nodes: []
  };

  for (let it = 0; it < state.currentDocument.nodes.length; it++) {
    const row = state.currentDocument.nodes[it];

    if (row.id === beforeId) {
      updatedRowList.push(newRow);
    }

    updatedRowList.push(row);
  }

  state.currentDocument.nodes = updatedRowList;
  state.currentDocument.nodes = [
    ...state.currentDocument.nodes,
    newEmptyColumn,
  ];
}
