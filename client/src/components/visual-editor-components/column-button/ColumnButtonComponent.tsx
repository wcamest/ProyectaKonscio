import React, { MouseEventHandler, PropsWithChildren } from "react";

type Props = {
  onClick?: MouseEventHandler;
};

const ColumnButtonComponent = (props: PropsWithChildren<Props>) => {
  const { onClick, children } = props;

  return (
    <button className="p-1 rounded-full bg-blue-800 hover:bg-blue-50 active:bg-blue-950 text-blue-50 hover:text-blue-800 active:text-blue-50 border border-solid border-blue-50" onClick={onClick}>
      {children}
    </button>
  );
};

export default ColumnButtonComponent;
