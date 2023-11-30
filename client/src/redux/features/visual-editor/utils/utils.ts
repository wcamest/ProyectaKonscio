import PageDocumentNode from "@/types/page-document/PageDocumentNode";

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
