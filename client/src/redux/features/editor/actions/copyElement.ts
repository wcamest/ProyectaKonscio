import { EditorState } from "../editorSlice";

const CopyElement = (state: EditorState, action: {payload: any, type:string}) => {
    state.elementToCopy = state.selected;
}

export default CopyElement;