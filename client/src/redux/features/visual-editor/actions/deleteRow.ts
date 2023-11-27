import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import { VisualEditorState } from "../visualEditorSlice";

export default function DeleteRow(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  state.currentDocument.rows = state.currentDocument.rows.filter(
    (row: PageDocumentRow) => {
      return row.id !== action.payload;
    }
  );
}
