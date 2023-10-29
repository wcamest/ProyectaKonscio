import { EditorState } from "../editorSlice";

const SetScreen = (state: EditorState, action: {payload: any, type: string}) => {
    state.currentScreen = action.payload;
}

export default SetScreen;