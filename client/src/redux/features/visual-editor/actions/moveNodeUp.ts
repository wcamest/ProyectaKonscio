import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { VisualEditorState } from "../visualEditorSlice";

export default function MoveNodeUp(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const nodeIdToMove: string = action.payload;

  const nodeToMove = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === nodeIdToMove
  );

  if (!nodeToMove) return state;

  const parentNodeToMove = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === nodeToMove.parent
  );

  if (!parentNodeToMove) return state;

  const nodeIndex = parentNodeToMove.nodes.findIndex(
    (nodeId: string) => nodeId === nodeIdToMove
  );

  if (nodeIndex === 0) return state;

  const updatedParentNodesList: string[] = [...parentNodeToMove.nodes];
  const rowId = updatedParentNodesList.splice(nodeIndex, 1)[0];
  updatedParentNodesList.splice(nodeIndex - 1, 0, rowId);

  state.currentDocument.nodes = state.currentDocument.nodes.map(
    (node: PageDocumentNode) => {
      if (node.id === parentNodeToMove.id) {
        return {
          ...parentNodeToMove,
          nodes: updatedParentNodesList,
        };
      }
      return node;
    }
  );
}
