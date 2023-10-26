import generateId from "@/utils/Utils";
import { EditorState } from "../editorSlice";
import WHTMLElement from "@/types/WHTMLElement";

const CreateElement = (
  state: EditorState,
  action: { payload: any; type: string }
) => {
  const {tagName, treeItemTagLabel, treeItemTitle} = action.payload;

  const selectedElement = state.elements.find(
    (element: WHTMLElement) => element.id === state.selected
  );

  if(!selectedElement) return state;

  const newElementId: string = generateId();

  const element: WHTMLElement = {
    id: newElementId,
    parentId: selectedElement.id,
    tagName,
    children: [],
    treeItemExpanded: false,
    treeItemTagLabel,
    treeItemTitle,
    cutMode: false
  };

  selectedElement.children.push(newElementId);
  state.elements.push(element);
};

export default CreateElement;