import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
};

const ElementSelectorSectionComponent = (props: PropsWithChildren<Props>) => {
  const { title, children } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="w-fit text-xl text-gray-500">{title}</span>
        <div className="w-full h-0 border-t border-t-gray-200"></div>
      </div>
      <div className="w-full flex gap-4 flex-wrap">{children}</div>
    </div>
  );
};

export default ElementSelectorSectionComponent;
