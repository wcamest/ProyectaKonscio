import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { VisualEditorState } from "../visualEditorSlice";

/**
 * Función para agregar uno o varios nodos a un documento visual en un editor.
 * @param state El estado actual del editor visual.
 * @param action La acción que contiene la carga útil (payload) y el tipo de acción.
 * @returns El nuevo estado del editor visual después de agregar el nodo o nodos.
 */
export default function AddNode(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  // Si no hay un documento actual, devuelve el estado sin cambios.
  if (!state.currentDocument) return state;

  // Obtiene el documento actual del estado.
  const currentDocument = state.currentDocument;

  // Itera sobre cada nodo en la carga útil (payload) de la acción.
  for (let _it_ = 0; _it_ < action.payload.length; _it_++) {
    // Obtiene el nuevo nodo de la carga útil.
    const newNode: PageDocumentNode = action.payload[_it_];

    // Si el nuevo nodo tiene un nodo padre, se agrega directamente a la lista de nodos del documento.
    if (newNode.parent) {
      currentDocument.nodes.push(newNode);
    } else {
      // Si el nuevo nodo no tiene un nodo padre, se asigna el nodo seleccionado actualmente como su padre.
      const updatedNode: PageDocumentNode = {
        ...newNode,
        parent: currentDocument.selectedNode,
      };

      // Busca el nodo padre en la lista de nodos del documento.
      const parentNode = currentDocument.nodes.find(
        (node: PageDocumentNode) => node.id === currentDocument.selectedNode
      );

      // Si no se encuentra el nodo padre, devuelve el estado sin cambios.
      if (!parentNode) return state;

      // Actualiza el nodo padre con el ID del nuevo nodo como su hijo.
      const updatedParentNode: PageDocumentNode = {
        ...parentNode,
        nodes: [...parentNode.nodes, updatedNode.id],
      };

      // Actualiza la lista de nodos del documento para reflejar el cambio en el nodo padre.
      currentDocument.nodes = currentDocument.nodes.map(
        (node: PageDocumentNode) => {
          if (node.id === parentNode.id) return updatedParentNode;
          return node;
        }
      );

      // Agrega el nuevo nodo a la lista de nodos del documento.
      currentDocument.nodes.push(updatedNode);
    }
  }

  // Devuelve el nuevo estado del editor visual.
  return state;
}
