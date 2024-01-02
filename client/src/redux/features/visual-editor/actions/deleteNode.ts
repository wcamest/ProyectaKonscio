import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import { VisualEditorState } from "../visualEditorSlice";
import { _getDescendants } from "../utils/utils";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";

export default function DeleteNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const toDeleteId: string = action.payload;
  const toDelete = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === toDeleteId
  );
  if (!toDelete) return state;

  const parentOfNodeToDelete = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === toDelete.parent
  );

  const _descendantsIds = _getDescendants(
    toDeleteId,
    state.currentDocument.nodes
  ).map((node: PageDocumentNode) => node.id);

  state.currentDocument.nodes = state.currentDocument.nodes.filter(
    (node: PageDocumentNode) => {
      return !_descendantsIds.includes(node.id);
    }
  );

  state.currentDocument.rows = state.currentDocument.rows.filter(
    (rowId: string) => {
      return !_descendantsIds.includes(rowId);
    }
  );

  if (!parentOfNodeToDelete) return state;

  const elementIndex = parentOfNodeToDelete.nodes.indexOf(toDeleteId);
  const previousElementIndex = elementIndex - 1;

  const updatedParentOfNodeToDelete: PageDocumentNode = {
    ...parentOfNodeToDelete,
    nodes: parentOfNodeToDelete.nodes.filter(
      (nodeId: string) => nodeId !== toDeleteId
    ),
  };

  let newSelectedElementId: string = "";

  const previousElement =
    updatedParentOfNodeToDelete.nodes[previousElementIndex];
  const nextElement = updatedParentOfNodeToDelete.nodes[elementIndex];

  if (nextElement) newSelectedElementId = nextElement;
  else if (previousElement) newSelectedElementId = previousElement;
  else newSelectedElementId = updatedParentOfNodeToDelete.id;

  state.currentDocument.nodes = state.currentDocument.nodes.map(
    (node: PageDocumentNode) => {
      if (node.id === parentOfNodeToDelete.id)
        return updatedParentOfNodeToDelete;

      return node;
    }
  );

  state.currentDocument.selectedNode = newSelectedElementId;
}
