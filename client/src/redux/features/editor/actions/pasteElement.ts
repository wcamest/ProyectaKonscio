import WHTMLElement from "@/types/WHTMLElement";
import { EditorState } from "../editorSlice";
import { DeleteElementResult, _deleteElement, getDescendants } from "../utils/utils";
import generateId from "@/utils/Utils";

type ElementIdsPair = {
  oldId: string;
  newId: string;
};

const PasteElement = (
  state: EditorState,
  action: { payload: any; type: string }
) => {
  const elementIdToPaste: string | undefined = state.elementToCopy
    ? state.elementToCopy
    : state.elementToCut
    ? state.elementToCut
    : undefined;

  if (!elementIdToPaste) return state;

  const descendants: WHTMLElement[] = getDescendants(
    elementIdToPaste,
    state.elements
  );

  const elementsIdsPair: ElementIdsPair[] = descendants.map(
    (element: WHTMLElement) => {
      return {
        oldId: element.id,
        newId: generateId(),
      };
    }
  );

  const descendantsWithNewIds: WHTMLElement[] = descendants.map(
    (element: WHTMLElement) => {
      let id: string = element.id;
      let parentId: string | undefined = undefined;
      let children: string[] = [];

      //parent id reassignment
      if (element.id === elementIdToPaste) {
        parentId = state.selected;
      } else {
        const parentElementIdsPair = elementsIdsPair.find(
          (elementIdPair: ElementIdsPair) =>
            elementIdPair.oldId === element.parentId
        );

        parentId = parentElementIdsPair?.newId;
      }

      //children ids reassignment
      for (let _it_ = 0; _it_ < element.children.length; _it_++) {
        const childId = element.children[_it_];
        const childElementIdsPair = elementsIdsPair.find(
          (elementIdPair: ElementIdsPair) => elementIdPair.oldId === childId
        );

        if (childElementIdsPair) children.push(childElementIdsPair.newId);
      }

      //id reassignment
      const elementIdsPair = elementsIdsPair.find(
        (elementIdPair: ElementIdsPair) => elementIdPair.oldId === element.id
      );

      if (elementIdsPair) id = elementIdsPair.newId;

      return {
        ...element,
        id,
        parentId,
        children,
        cutMode: false,
      };
    }
  );

  const newElementToCopyIdsPair = elementsIdsPair.find(
    (elementIdsPair: ElementIdsPair) =>
      elementIdsPair.oldId === elementIdToPaste
  );

  if (!newElementToCopyIdsPair) return state;

  state.elements = state.elements.map((element: WHTMLElement) => {
    if (element.id === state.selected) {
      return {
        ...element,
        children: [...element.children, newElementToCopyIdsPair.newId],
      };
    }
    return element;
  });

  state.elements = [...state.elements, ...descendantsWithNewIds];

  if (state.elementToCut) {
    const deleteElementResult: DeleteElementResult = _deleteElement(
      state.elementToCut,
      state.elements
    );
    state.selected = deleteElementResult.selected;
    state.elements = deleteElementResult.elements;
  }

  state.elementToCopy = undefined;
  state.elementToCut = undefined;
};

export default PasteElement;
