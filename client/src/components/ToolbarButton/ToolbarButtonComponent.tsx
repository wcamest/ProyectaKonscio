import React, { MouseEventHandler, PropsWithChildren } from "react";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ToolbarButtonComponent = (props: PropsWithChildren<Props>) => {
  const { onClick } = props;

  return (
    <button
      className="p-1 bg-blue-50 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40 rounded-md"
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default ToolbarButtonComponent;
