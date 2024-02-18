import React, { PropsWithChildren } from "react";

type Props = {};

const BlueButtonComponent = (props: PropsWithChildren<Props>) => {
  return (
    <button className="px-4 py-2 text-blue-50 bg-blue-500 rounded-md">
      {props.children}
    </button>
  );
};

export default BlueButtonComponent;
