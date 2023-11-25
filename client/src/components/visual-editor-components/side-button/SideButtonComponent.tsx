import React, { MouseEventHandler, PropsWithChildren } from "react";

type Props = {
  onClick?: MouseEventHandler;
};

const SideButtonComponent = (props: PropsWithChildren<Props>) => {
  const { onClick, children } = props;

  return (
    <button
      className="p-1 flex justify-center items-center bg-blue-300 hover:bg-blue-400 active:bg-blue-800 border border-solid border-blue-800 text-blue-800 active:text-blue-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SideButtonComponent;
