import { hideModal } from "@/redux/features/modals/modalsSlice";
import { RootState } from "@/redux/store/store";
import React, { PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  id: string;
  title: string;
  buttons: React.JSX.Element[];
  onHideModal?: Function;
};

const ModalComponent = (props: PropsWithChildren<Props>) => {
  const { id, title, buttons, onHideModal } = props;
  const { modalIds } = useSelector((state: RootState) => state.modals);
  const dispatch = useDispatch();

  if (!modalIds.includes(id)) return undefined;

  const Functions = {
    HideModal() {
      dispatch(hideModal(id));

      if (onHideModal) onHideModal();
    },
  };

  return (
    <div className="fixed lg:p-10 w-screen h-screen left-0 top-0 z-50">
      <div
        className="absolute w-full h-full left-0 top-0 bg-black bg-opacity-25"
        onClick={() => {
          Functions.HideModal();
        }}
      ></div>
      <div className="relative w-full h-full bg-white flex flex-col justify-between">
        <div className="p-2">
          <span>{title}</span>
        </div>
        <div className="w-full h-full overflow-hidden">
          <div className="w-full h-full overflow-auto">{props.children}</div>
        </div>
        <div className="p-2 flex justify-end gap-2">
          <span>{buttons}</span>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
