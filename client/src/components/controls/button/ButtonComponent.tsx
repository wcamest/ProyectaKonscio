import React, { MouseEventHandler, PropsWithChildren } from "react";

type Props = {
  onClick?: MouseEventHandler;
};

const ButtonComponent = (props: PropsWithChildren<Props>) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-400 hover:bg-blue-600 active:bg-blue-800 text-blue-50 rounded-md shadow-md`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonComponent;
