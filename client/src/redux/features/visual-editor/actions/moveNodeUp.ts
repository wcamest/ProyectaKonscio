import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { VisualEditorState } from "../visualEditorSlice";

/**
 * Función para mover un nodo hacia arriba dentro de un documento visual en un editor.
 * @param state El estado actual del editor visual.
 * @param action La acción que contiene la carga útil (payload) y el tipo de acción.
 * @returns El nuevo estado del editor visual después de mover el nodo hacia arriba.
 */
export default function MoveNodeUp(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  // Si no hay un documento actual, devuelve el estado sin cambios.
  if (!state.currentDocument) return state;

  // Identifica el ID del nodo que se va a mover hacia arriba.
  const nodeIdToMove: string = action.payload;

  // Busca el nodo que se va a mover en la lista de nodos del documento actual.
  const nodeToMove = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === nodeIdToMove
  );

  // Si no se encuentra el nodo, devuelve el estado sin cambios.
  if (!nodeToMove) return state;

  // Encuentra el nodo padre del nodo que se va a mover.
  const parentNodeToMove = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === nodeToMove.parent
  );

  // Si no se encuentra el nodo padre, devuelve el estado sin cambios.
  if (!parentNodeToMove) return state;

  // Encuentra el índice del nodo que se va a mover dentro de los nodos del nodo padre.
  const nodeIndex = parentNodeToMove.nodes.findIndex(
    (nodeId: string) => nodeId === nodeIdToMove
  );

  // Si el nodo que se va a mover ya está en la parte superior, devuelve el estado sin cambios.
  if (nodeIndex === 0) return state;

  // Crea una copia de la lista de nodos del nodo padre y reorganiza los nodos para mover el nodo hacia arriba.
  const updatedParentNodesList: string[] = [...parentNodeToMove.nodes];
  const rowId = updatedParentNodesList.splice(nodeIndex, 1)[0];
  updatedParentNodesList.splice(nodeIndex - 1, 0, rowId);

  // Actualiza la lista de nodos del nodo padre en el estado.
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

  // Devuelve el nuevo estado del editor visual.
  return state;
}
