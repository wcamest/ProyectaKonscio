import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { VisualEditorState } from "../visualEditorSlice";

export default function AddNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;
  if (!state.selectedToAddNode) return state;

  const newNode: PageDocumentNode = action.payload;
  const updatedNode: PageDocumentNode = {
    ...newNode,
    parent: state.selectedToAddNode,
  };

  const parentNode = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === state.selectedToAddNode
  );

  if (!parentNode) return state;

  const updatedParentNode: PageDocumentNode = {
    ...parentNode,
    nodes: [...parentNode.nodes, updatedNode.id],
  };

  state.currentDocument.nodes = state.currentDocument.nodes.map(
    (node: PageDocumentNode) => {
      if (node.id === parentNode.id) return updatedParentNode;

      return node;
    }
  );
  state.currentDocument.nodes.push(updatedNode);
}
