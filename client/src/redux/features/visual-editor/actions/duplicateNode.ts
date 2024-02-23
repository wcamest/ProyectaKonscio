import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { VisualEditorState } from "../visualEditorSlice";
import { _duplicateNodeData, _getDescendants } from "../utils/utils";
import generateId from "@/utils/Utils";

/**
 * Función para duplicar un nodo y sus descendientes en un documento visual en un editor.
 * @param state El estado actual del editor visual.
 * @param action La acción que contiene la carga útil (payload) y el tipo de acción.
 * @returns El nuevo estado del editor visual después de duplicar el nodo y sus descendientes.
 */
export default function DuplicateNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  // Si no hay un documento actual, devuelve el estado sin cambios.
  if (!state.currentDocument) return state;

  // Identifica el ID del nodo que se va a duplicar.
  const toDuplicateId: string = action.payload;

  // Busca el nodo que se va a duplicar en la lista de nodos del documento actual.
  const toDuplicate = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => {
      return node.id === toDuplicateId;
    }
  );

  // Si no se encuentra el nodo, devuelve el estado sin cambios.
  if (!toDuplicate) return state;

  // Obtiene el ID del nodo padre del nodo que se va a duplicar.
  const parentNodeId = toDuplicate.parent;

  // Si no hay un nodo padre, devuelve el estado sin cambios.
  if (!parentNodeId) return state;

  // Duplica los datos del nodo y sus descendientes.
  const dataToString: string = _duplicateNodeData(
    toDuplicateId,
    state.currentDocument.nodes
  );

  // Convierte los datos duplicados de cadena JSON a un array de nodos duplicados.
  const duplicatedNodesArray: any = JSON.parse(dataToString);

  // Obtiene el primer nodo duplicado.
  const duplicatedNode = duplicatedNodesArray[0];

  // Establece el nodo padre del nodo duplicado.
  duplicatedNode.parent = parentNodeId;

  // Agrega los nodos duplicados a la lista de nodos del documento.
  state.currentDocument.nodes = [
    ...state.currentDocument.nodes,
    ...duplicatedNodesArray,
  ];

  // Actualiza la lista de nodos del documento y agrega el ID del nodo duplicado al nodo padre.
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

  // Devuelve el nuevo estado del editor visual.
  return state;
}
