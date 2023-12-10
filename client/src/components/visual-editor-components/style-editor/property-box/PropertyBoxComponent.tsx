import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
};

const PropertyBoxComponent = (props: PropsWithChildren<Props>) => {
  const { title, children } = props;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-blue-400">{title}</span>
      {children}
    </div>
  );
};

export default PropertyBoxComponent;
