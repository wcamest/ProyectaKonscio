import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import { VisualEditorState } from "../visualEditorSlice";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";
import generateId from "@/utils/Utils";
import Styles from "@/components/visual-editor-components/styles/styles";

export default function InsertColumnBefore(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const rowId: string = action.payload.rowId;
  const beforeId: string = action.payload.columnId;
  const newEmptyColumnId: string = generateId();

  const updatedColumnList: string[] = [];

  const row: PageDocumentRow | undefined = state.currentDocument.nodes.find(
    (row: PageDocumentRow) => row.id === rowId
  );

  if (!row) return state;

  const newEmptyColumn: PageDocumentColumn = {
    id: newEmptyColumnId,
    type: "PageDocumentColumn",
    nodes: [],
    parent: rowId,
    styles: Styles.CreateClassListCollection()
  };

  for (let it = 0; it < row.nodes.length; it++) {
    const columnId = row.nodes[it];

    if (columnId === beforeId) {
      updatedColumnList.push(newEmptyColumnId);
    }

    updatedColumnList.push(columnId);
  }

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
  state.currentDocument.nodes = [
    ...state.currentDocument.nodes,
    newEmptyColumn,
  ];
}
