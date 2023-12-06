import React, { PropsWithChildren } from "react";

type Props = {
  id: string;
  currentId: string;
  title: string;
};

const StyleSectionComponent = (props: PropsWithChildren<Props>) => {
  const { id, currentId, title, children } = props;

  if (id !== currentId) return undefined;

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <span className="select-none text-blue-800 font-black whitespace-nowrap">{title}</span>
        <div className="w-full border-t border-t-solid border-t-blue-200"></div>
      </div>
      <div className="w-full flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default StyleSectionComponent;
