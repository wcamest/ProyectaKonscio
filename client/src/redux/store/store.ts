import { configureStore } from "@reduxjs/toolkit";
import visualEditorReducer from "../features/visual-editor/visualEditorSlice";
import modalsReducer from "../features/modals/modalsSlice";
import sitesReducer from "../features/sites/sitesSlice";

export const store = configureStore({
  reducer: {
    visualEditor: visualEditorReducer,
    modals: modalsReducer,
    sites: sitesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
