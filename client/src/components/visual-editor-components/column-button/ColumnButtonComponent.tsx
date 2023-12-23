import React, { MouseEventHandler, PropsWithChildren } from "react";

type Props = {
  onClick?: MouseEventHandler;
};

const ColumnButtonComponent = (props: PropsWithChildren<Props>) => {
  const { onClick, children } = props;

  return (
    <button className="p-1 rounded-md text-blue-500 hover:text-blue-600 active:text-blue-900" onClick={onClick}>
      {children}
    </button>
  );
};

export default ColumnButtonComponent;
