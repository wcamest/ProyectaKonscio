import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { VisualEditorState } from "../visualEditorSlice";
import { _duplicateNodeData, _getDescendants } from "../utils/utils";
import generateId from "@/utils/Utils";

type NewIdKVP = {
  old: string;
  new: string;
};

export default function DuplicateNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const toDuplicateId: string = action.payload;

  const toDuplicate = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => {
      return node.id === toDuplicateId;
    }
  );

  if (!toDuplicate) return state;

  const parentNodeId = toDuplicate.parent;

  if (!parentNodeId) return state;

  const dataToString: string = _duplicateNodeData(
    toDuplicateId,
    state.currentDocument.nodes
  );

  const duplicatedNodesArray: any = JSON.parse(dataToString);
  const duplicatedNode = duplicatedNodesArray[0];
  duplicatedNode.parent = parentNodeId;

  state.currentDocument.nodes = [
    ...state.currentDocument.nodes,
    ...duplicatedNodesArray,
  ];

  state.currentDocument.nodes = state.currentDocument.nodes.map(
    (node: PageDocumentNode) => {
      if (node.id === parentNodeId) {
        return {
          ...node,
          nodes: [...node.nodes, duplicatedNode.id],
        };
      }

      return node;
    }
  );
}
