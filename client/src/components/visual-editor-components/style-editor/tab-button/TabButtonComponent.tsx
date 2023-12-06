import React, { MouseEventHandler, PropsWithChildren } from "react";

type Props = {
  id: string;
  selectedId: string;
  onClick?: Function;
};

const TabButtonComponent = (props: PropsWithChildren<Props>) => {
  const { id, selectedId, children, onClick } = props;

  if (selectedId === id)
    return <button className="p-2 text-blue-50 bg-blue-800">{children}</button>;

  return (
    <button
      className="p-2 text-blue-800 hover:text-blue-50 active:text-blue-50 hover:bg-blue-300 active:bg-blue-500 "
      onClick={() => {
        if (onClick) onClick(id);
      }}
    >
      {children}
    </button>
  );
};

export default TabButtonComponent;
