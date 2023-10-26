import WHTMLElement from "@/types/WHTMLElement";
import { EditorState } from "../editorSlice";
import { DeleteElementResult, _deleteElement } from "../utils/utils";

const DeleteElement = (
  state: EditorState,
  action: { payload: any; type: string }
) => {
  const deleteElementResult:DeleteElementResult = _deleteElement(state.selected, state.elements);
  state.selected = deleteElementResult.selected;
  state.elements = deleteElementResult.elements
};



export default DeleteElement;
