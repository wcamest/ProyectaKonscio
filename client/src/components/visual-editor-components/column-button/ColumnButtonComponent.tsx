import React, { MouseEventHandler, PropsWithChildren } from "react";

type Props = {
  onClick?: MouseEventHandler;
};

const ColumnButtonComponent = (props: PropsWithChildren<Props>) => {
  const { onClick, children } = props;

  return (
    <button className="p-1 rounded-full text-blue-500 hover:text-blue-50 active:text-blue-50 hover:bg-blue-500 active:bg-blue-800" onClick={onClick}>
      {children}
    </button>
  );
};

export default ColumnButtonComponent;
