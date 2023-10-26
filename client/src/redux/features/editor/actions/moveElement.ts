import WHTMLElement from "@/types/WHTMLElement";
import { EditorState } from "../editorSlice";

const MoveElement = (
  state: EditorState,
  action: { payload: any; type: string }
) => {
  const moveTo: number = action.payload;

  const elementToMove: WHTMLElement | undefined = state.elements.find(
    (element: WHTMLElement) => element.id === state.selected
  );

  if (!elementToMove) return state;

  const parentOfElementToMove: WHTMLElement | undefined = state.elements.find(
    (element: WHTMLElement) => element.id === elementToMove.parentId
  );

  if (!parentOfElementToMove) return state;

  const indexOfElementToMove: number = parentOfElementToMove.children.indexOf(
    state.selected
  );

  const updatedIndexOfElementToMove: number = indexOfElementToMove + moveTo;

  if (
    updatedIndexOfElementToMove < 0 ||
    updatedIndexOfElementToMove >= parentOfElementToMove.children.length
  )
    return state;

  let updatedChildrenArray: string[] = parentOfElementToMove.children.filter(
    (id: string) => id !== state.selected
  );

  updatedChildrenArray.splice(updatedIndexOfElementToMove, 0, state.selected);

  state.elements = state.elements.map((element: WHTMLElement) => {
    if (element.id === parentOfElementToMove.id)
      return {
        ...element,
        children: updatedChildrenArray,
      };

    return element;
  });
};

export default MoveElement;
