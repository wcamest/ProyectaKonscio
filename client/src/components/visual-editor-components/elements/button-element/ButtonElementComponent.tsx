import React, { PropsWithChildren } from "react";

type Props = {};

const ButtonElementComponent = (props: PropsWithChildren<Props>) => {
  return (
    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-800 active:bg-blue-950">
      {props.children}
    </button>
  );
};

export default ButtonElementComponent;
