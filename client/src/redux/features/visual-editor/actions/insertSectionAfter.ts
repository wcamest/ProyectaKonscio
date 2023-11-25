import generateId from "@/utils/Utils";
import { VisualEditorState } from "../visualEditorSlice";
import PageDocumentSection from "@/types/page-document/PageDocumentSection";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";

export default function InsertSectionAfter(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const afterId: string = action.payload;
  const newSectionId: string = generateId();
  const newEmptyColumnId: string = generateId();
  const updatedSectionList: PageDocumentSection[] = [];

  const newSection: PageDocumentSection = {
    id: newSectionId,
    type: "PageDocumentSection",
    columns: [newEmptyColumnId],
  };

  const newEmptyColumn: PageDocumentColumn = {
    id: newEmptyColumnId,
    type: "PageDocumentColumn",
  };

  for (let it = 0; it < state.currentDocument.sections.length; it++) {
    const section = state.currentDocument.sections[it];

    updatedSectionList.push(section);

    if (section.id === afterId) {
      updatedSectionList.push(newSection);
    }
  }

  state.currentDocument.sections = updatedSectionList;
  state.currentDocument.columns = [
    ...state.currentDocument.columns,
    newEmptyColumn,
  ];
}
