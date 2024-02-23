import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import { VisualEditorState } from "../visualEditorSlice";
import { _getDescendants } from "../utils/utils";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";

/**
 * Función para eliminar un nodo y sus descendientes de un documento visual en un editor.
 * @param state El estado actual del editor visual.
 * @param action La acción que contiene la carga útil (payload) y el tipo de acción.
 * @returns El nuevo estado del editor visual después de eliminar el nodo y sus descendientes.
 */
export default function DeleteNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  // Si no hay un documento actual, devuelve el estado sin cambios.
  if (!state.currentDocument) return state;

  // Identifica el ID del nodo que se va a eliminar.
  const toDeleteId: string = action.payload;

  // Busca el nodo que se va a eliminar en la lista de nodos del documento actual.
  const toDelete = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === toDeleteId
  );

  // Si no se encuentra el nodo, devuelve el estado sin cambios.
  if (!toDelete) return state;

  // Busca el nodo padre del nodo que se va a eliminar.
  const parentOfNodeToDelete = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === toDelete.parent
  );

  // Obtiene los ID de los descendientes del nodo que se va a eliminar.
  const _descendantsIds = _getDescendants(
    toDeleteId,
    state.currentDocument.nodes
  ).map((node: PageDocumentNode) => node.id);

  // Filtra los nodos del documento para eliminar el nodo y sus descendientes.
  state.currentDocument.nodes = state.currentDocument.nodes.filter(
    (node: PageDocumentNode) => {
      return !_descendantsIds.includes(node.id);
    }
  );

  // Filtra las filas del documento para eliminar las filas asociadas al nodo y sus descendientes.
  state.currentDocument.rows = state.currentDocument.rows.filter(
    (rowId: string) => {
      return !_descendantsIds.includes(rowId);
    }
  );

  // Si no hay nodo padre del nodo que se va a eliminar, devuelve el estado sin cambios.
  if (!parentOfNodeToDelete) return state;

  // Encuentra el índice del nodo que se va a eliminar dentro de los nodos del nodo padre.
  const elementIndex = parentOfNodeToDelete.nodes.indexOf(toDeleteId);
  const previousElementIndex = elementIndex - 1;

  // Crea una copia actualizada del nodo padre del nodo que se va a eliminar, eliminando el nodo.
  const updatedParentOfNodeToDelete: PageDocumentNode = {
    ...parentOfNodeToDelete,
    nodes: parentOfNodeToDelete.nodes.filter(
      (nodeId: string) => nodeId !== toDeleteId
    ),
  };

  // Variable para almacenar el ID del nuevo nodo seleccionado después de eliminar el nodo actual.
  let newSelectedElementId: string = "";

  // Obtiene el elemento anterior y el siguiente al nodo que se va a eliminar.
  const previousElementId =
    updatedParentOfNodeToDelete.nodes[previousElementIndex];
  const nextElementId = updatedParentOfNodeToDelete.nodes[elementIndex];

  // Determina el ID del nuevo nodo seleccionado después de eliminar el nodo actual.
  if (nextElementId) newSelectedElementId = nextElementId;
  else if (previousElementId) newSelectedElementId = previousElementId;
  else newSelectedElementId = updatedParentOfNodeToDelete.id;

  // Actualiza la lista de nodos del documento con el nodo padre actualizado.
  state.currentDocument.nodes = state.currentDocument.nodes.map(
    (node: PageDocumentNode) => {
      if (node.id === parentOfNodeToDelete.id)
        return updatedParentOfNodeToDelete;

      return node;
    }
  );

  // Establece el nuevo nodo seleccionado en el estado del editor visual.
  state.currentDocument.selectedNode = newSelectedElementId;

  // Devuelve el nuevo estado del editor visual.
  return state;
}
