import { ModalsState } from "../modalsSlice";

export default function ShowModal(
  state: ModalsState,
  action: { payload: string; type: string }
) {
  state.modalIds = [...state.modalIds, action.payload];
}
