import WHTMLElement from "@/types/WHTMLElement";
import { EditorState } from "../editorSlice";

const UpdateElement = (
  state: EditorState,
  action: { payload: any; type: string }
) => {
  state.elements = state.elements.map((element: WHTMLElement) => {
    if (element.id === action.payload.id) return action.payload;

    return element;
  });
};

export default UpdateElement;