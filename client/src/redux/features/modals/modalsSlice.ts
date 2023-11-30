import { createSlice } from "@reduxjs/toolkit";
import ShowModal from "./actions/showModal";
import HideModal from "./actions/hideModal";

export interface ModalsState {
  modalIds: string[];
}

const initialState: ModalsState = {
  modalIds: [
    
  ],
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showModal: ShowModal,
    hideModal: HideModal,
  },
});

export const { showModal, hideModal } = modalsSlice.actions;

export default modalsSlice.reducer;
