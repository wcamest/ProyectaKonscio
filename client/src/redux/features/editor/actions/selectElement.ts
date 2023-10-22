import { EditorState } from "../editorSlice";

const SelectElement = (
  state: EditorState,
  action: { payload: any; type: string }
) => {
  state.selected = action.payload;
};

export default SelectElement;