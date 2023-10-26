import WHTMLElement from "@/types/WHTMLElement";

export type DeleteElementResult = {
  elements: WHTMLElement[];
  selected: string;
};

export const getDescendants = (id: string, elements: WHTMLElement[]) => {
  let descendants: WHTMLElement[] = [];

  const base: WHTMLElement | undefined = elements.find(
    (element: WHTMLElement) => element.id === id
  );

  if (!base) return descendants;

  descendants.push(base);

  for (let _it_ = 0; _it_ < base.children.length; _it_++) {
    const childElementId = base.children[_it_];
    const childrenDescendants: WHTMLElement[] = getDescendants(
      childElementId,
      elements
    );

    descendants = [...descendants, ...childrenDescendants];
  }

  return descendants;
};

export const _deleteElement = (
  id: string,
  elements: WHTMLElement[]
): DeleteElementResult => {
  const selected = elements.find((element: WHTMLElement) => element.id === id);

  if (!selected)
    return {
      elements,
      selected: id,
    };

  const descendantsIds = getDescendants(id, elements).map(
    (element: WHTMLElement) => element.id
  );

  let updatedElements = elements.filter(
    (element: WHTMLElement) => !descendantsIds.includes(element.id)
  );

  let parentElement = updatedElements.find(
    (element: WHTMLElement) => element.id === selected.parentId
  );

  if (!parentElement)
    return {
      elements,
      selected: id,
    };

  let selectedIndexInParent = parentElement.children.indexOf(selected.id);

  updatedElements = updatedElements.map((element: WHTMLElement) => {
    if (element.id === selected.parentId) {
      const updatedParent: WHTMLElement = {
        ...element,
        children: element.children.filter((childId: string) => childId !== id),
      };

      return updatedParent;
    }

    return element;
  });

  parentElement = updatedElements.find(
    (element: WHTMLElement) => element.id === selected.parentId
  );

  if (!parentElement)
    return {
      elements,
      selected: id,
    };

  if (!parentElement.children.length) {
    return {
      elements: updatedElements,
      selected: parentElement.id,
    };
  }

  if (selectedIndexInParent < parentElement.children.length) {
    return {
      elements: updatedElements,
      selected: parentElement.children[selectedIndexInParent],
    };
  }

  return {
    elements: updatedElements,
    selected: parentElement.children[parentElement.children.length - 1],
  };
};
