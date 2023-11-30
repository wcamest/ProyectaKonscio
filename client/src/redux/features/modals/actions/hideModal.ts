import { ModalsState } from "../modalsSlice";

export default function HideModal(
  state: ModalsState,
  action: { payload: string; type: string }
) {
  state.modalIds = state.modalIds.filter(
    (modalId: string) => modalId !== action.payload
  );
}
