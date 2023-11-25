import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "../features/editor/editorSlice";
import visualEditorReducer from "../features/visual-editor/visualEditorSlice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    visualEditor: visualEditorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
