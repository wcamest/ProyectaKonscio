import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { VisualEditorState } from "../visualEditorSlice";

export default function PasteNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;
  if (!state.dataToCopy) return state;
  const currentDocument = state.currentDocument;

  const duplicatedNodesArray: any = JSON.parse(state.dataToCopy);
  const duplicatedNode = duplicatedNodesArray[0];
  duplicatedNode.canDelete = true;
  duplicatedNode.canEdit = true;
  duplicatedNode.parent = currentDocument.selectedNode;

  currentDocument.nodes = [...currentDocument.nodes, ...duplicatedNodesArray];

  currentDocument.nodes = currentDocument.nodes.map(
    (node: PageDocumentNode) => {
      if (node.id === currentDocument.selectedNode) {
        return {
          ...node,
          nodes: [...node.nodes, duplicatedNode.id],
        };
      }

      return node;
    }
  );
}
