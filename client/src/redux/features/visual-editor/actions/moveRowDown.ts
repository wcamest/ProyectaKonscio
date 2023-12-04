import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import { VisualEditorState } from "../visualEditorSlice";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";

export default function MoveRowDown(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const rowIdToMove: string = action.payload;

  const currentSectionLevelElement = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === state.currentSectionLevel
  );
  const previousNodeIdList = currentSectionLevelElement
    ? currentSectionLevelElement.nodes
    : state.currentDocument.rows;

  const rowIndex = previousNodeIdList.findIndex(
    (rowId: string) => rowId === rowIdToMove
  );

  if (rowIndex === previousNodeIdList.length - 1) return state;

  const updatedRowIdList: string[] = [...previousNodeIdList];
  const rowId = updatedRowIdList.splice(rowIndex, 1)[0];
  updatedRowIdList.splice(rowIndex + 1, 0, rowId);

  if (!currentSectionLevelElement) {
    state.currentDocument.rows = updatedRowIdList;
  } else {
    state.currentDocument.nodes = state.currentDocument.nodes.map(
      (node: PageDocumentNode) => {
        if (node.id === currentSectionLevelElement.id)
          return {
            ...node,
            nodes: updatedRowIdList,
          };

        return node;
      }
    );
  }
}
