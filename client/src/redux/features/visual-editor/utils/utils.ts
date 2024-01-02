import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import generateId from "@/utils/Utils";

type NewIdKVP = {
  old: string;
  new: string;
};

export const _getDescendants = (id: string, nodes: PageDocumentNode[]) => {
  let _descendants: PageDocumentNode[] = [];

  const base: PageDocumentNode | undefined = nodes.find(
    (node: PageDocumentNode) => node.id === id
  );

  if (!base) return _descendants;

  _descendants.push(base);

  for (let _it_ = 0; _it_ < base.nodes.length; _it_++) {
    const childNodeId = base.nodes[_it_];
    const childrenDescendants: PageDocumentNode[] = _getDescendants(
      childNodeId,
      nodes
    );

    _descendants = [..._descendants, ...childrenDescendants];
  }

  return _descendants;
};

export const _duplicateNodeData = (id: string, nodes: PageDocumentNode[]) => {
  const descendants = _getDescendants(
    id,
    nodes
  );

  const newDescendantsIds: NewIdKVP[] = descendants.map(
    (node: PageDocumentNode) => {
      return {
        old: node.id,
        new: generateId(),
      };
    }
  );

  let dataToString: string = JSON.stringify(descendants);

  for (let it = 0; it < newDescendantsIds.length; it++) {
    const kvp = newDescendantsIds[it];
    dataToString = dataToString.replaceAll(kvp.old, kvp.new);
  }

  return dataToString;
};
