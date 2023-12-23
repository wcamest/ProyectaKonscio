import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { VisualEditorState } from "../visualEditorSlice";

export default function AddNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;
  const currentDocument = state.currentDocument;

  for (let _it_ = 0; _it_ < action.payload.length; _it_++) {
    const newNode: PageDocumentNode = action.payload[_it_];
    if (newNode.parent) {
      currentDocument.nodes.push(newNode);
    } else {
      const updatedNode: PageDocumentNode = {
        ...newNode,
        parent: currentDocument.selectedNode,
      };

      const parentNode = currentDocument.nodes.find(
        (node: PageDocumentNode) => node.id === currentDocument.selectedNode
      );

      if (!parentNode) return state;

      const updatedParentNode: PageDocumentNode = {
        ...parentNode,
        nodes: [...parentNode.nodes, updatedNode.id],
      };

      currentDocument.nodes = currentDocument.nodes.map(
        (node: PageDocumentNode) => {
          if (node.id === parentNode.id) return updatedParentNode;

          return node;
        }
      );
      currentDocument.nodes.push(updatedNode);
    }
  }
}
