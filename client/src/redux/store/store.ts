import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "../features/editor/editorSlice";
import visualEditorReducer from "../features/visual-editor/visualEditorSlice";
import modalsReducer from "../features/modals/modalsSlice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    visualEditor: visualEditorReducer,
    modals: modalsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
