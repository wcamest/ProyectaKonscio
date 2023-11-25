import PageDocumentSection from "@/types/page-document/PageDocumentSection";
import { VisualEditorState } from "../visualEditorSlice";

export default function DeleteSection(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  state.currentDocument.sections = state.currentDocument.sections.filter(
    (section: PageDocumentSection) => {
      return section.id !== action.payload;
    }
  );
}
