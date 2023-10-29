import generateId from "@/utils/Utils";
import { EditorState } from "../editorSlice";
import WHTMLElement from "@/types/WHTMLElement";
import CreateCSSClasses from "../utils/createCSSClasses";

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
    properties: [],
    treeItemExpanded: false,
    treeItemTagLabel,
    treeItemTitle,
    cutMode: false,
    classes: {
      base: CreateCSSClasses(),
      sm: CreateCSSClasses(),
      md: CreateCSSClasses(),
      lg: CreateCSSClasses(),
      xl: CreateCSSClasses(),
      xl2: CreateCSSClasses(),
    }
  };

  selectedElement.children.push(newElementId);
  state.elements.push(element);
};

export default CreateElement;