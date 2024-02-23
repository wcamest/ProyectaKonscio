import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import generateId from "@/utils/Utils";

type NewIdKVP = {
  old: string;
  new: string;
};

/**
 * Función para obtener todos los descendientes de un nodo dado en una lista de nodos.
 * @param id El ID del nodo del cual se desean obtener los descendientes.
 * @param nodes La lista de nodos en la que se buscarán los descendientes.
 * @returns Un array que contiene todos los descendientes del nodo dado.
 */
export const _getDescendants = (id: string, nodes: PageDocumentNode[]) => {
  let _descendants: PageDocumentNode[] = [];

  // Encuentra el nodo base con el ID proporcionado.
  const base: PageDocumentNode | undefined = nodes.find(
    (node: PageDocumentNode) => node.id === id
  );

  // Si no se encuentra el nodo base, devuelve un array vacío.
  if (!base) return _descendants;

  // Agrega el nodo base al array de descendientes.
  _descendants.push(base);

  // Itera sobre los nodos hijos del nodo base para obtener sus descendientes.
  for (let _it_ = 0; _it_ < base.nodes.length; _it_++) {
    const childNodeId = base.nodes[_it_];
    const childrenDescendants: PageDocumentNode[] = _getDescendants(
      childNodeId,
      nodes
    );

    // Agrega los descendientes de los nodos hijos al array de descendientes.
    _descendants = [..._descendants, ...childrenDescendants];
  }

  // Devuelve el array de descendientes.
  return _descendants;
};

/**
 * Función para duplicar los datos de un nodo y sus descendientes.
 * @param id El ID del nodo que se desea duplicar.
 * @param nodes La lista de nodos que contiene el nodo y sus descendientes.
 * @returns Una cadena de texto JSON que representa los datos duplicados del nodo y sus descendientes.
 */
export const _duplicateNodeData = (id: string, nodes: PageDocumentNode[]) => {
  // Obtiene todos los descendientes del nodo con el ID proporcionado.
  const descendants = _getDescendants(id, nodes);

  // Genera nuevos ID para los descendientes duplicados.
  const newDescendantsIds: NewIdKVP[] = descendants.map(
    (node: PageDocumentNode) => {
      return {
        old: node.id,
        new: generateId(),
      };
    }
  );

  // Convierte los datos de los descendientes a una cadena de texto JSON.
  let dataToString: string = JSON.stringify(descendants);

  // Reemplaza los antiguos ID con los nuevos ID generados.
  for (let it = 0; it < newDescendantsIds.length; it++) {
    const kvp = newDescendantsIds[it];
    dataToString = dataToString.replaceAll(kvp.old, kvp.new);
  }

  // Devuelve la cadena de texto JSON con los datos duplicados del nodo y sus descendientes.
  return dataToString;
};
