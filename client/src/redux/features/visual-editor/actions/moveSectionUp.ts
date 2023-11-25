import PageDocumentSection from "@/types/page-document/PageDocumentSection";
import { VisualEditorState } from "../visualEditorSlice";

export default function MoveSectionUp(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const sectionIdToMove: string = action.payload;
  const sectionIndex = state.currentDocument.sections.findIndex(
    (section: PageDocumentSection) => section.id === sectionIdToMove
  );

  if (sectionIndex === 0) return state;

  const updatedSectionList: PageDocumentSection[] = [
    ...state.currentDocument.sections,
  ];
  const section = updatedSectionList.splice(sectionIndex, 1)[0];
  updatedSectionList.splice(sectionIndex - 1, 0, section);

  state.currentDocument.sections = updatedSectionList;
}
