import { hideModal } from "@/redux/features/modals/modalsSlice";
import { RootState } from "@/redux/store/store";
import React, { PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  id: string;
  title: string;
  buttons: React.JSX.Element[];
  onHideModal?: Function;
  fitWidth?: boolean;
  fitHeight?: boolean;
  maxWidth?: string;
};

const ModalComponent = (props: PropsWithChildren<Props>) => {
  const { id, title, buttons, fitWidth, fitHeight, maxWidth, onHideModal } =
    props;
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
    <div className="fixed lg:p-10 w-screen h-screen left-0 top-0 flex justify-center items-center z-50">
      <div
        className="absolute w-full h-full left-0 top-0 bg-black bg-opacity-25"
        onClick={() => {
          Functions.HideModal();
        }}
      ></div>
      <div
        className={`relative ${fitWidth ? "w-fit" : "w-full"} ${
          fitHeight ? "h-fit" : "h-full"
        } ${maxWidth ? maxWidth : ""} bg-white flex flex-col justify-between shadow-md`}
      >
        <div className="p-2 bg-blue-800 text-blue-50">
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
