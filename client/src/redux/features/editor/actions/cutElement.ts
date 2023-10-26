import WHTMLElement from "@/types/WHTMLElement";
import { EditorState } from "../editorSlice";

const CutElement = (
  state: EditorState,
  action: { payload: any; type: string }
) => {
  state.elementToCut = state.selected;

  state.elements = state.elements.map((element: WHTMLElement) => {
    if (element.id === state.selected) {
      return {
        ...element,
        cutMode: true,
      };
    }
    return element;
  });
};

export default CutElement;