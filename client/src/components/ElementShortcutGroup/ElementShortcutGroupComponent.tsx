import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
};

const ElementShortcutGroupComponent = (props: PropsWithChildren<Props>) => {
  const { title, children } = props;

  return (
    <div className="w-full h-fit flex flex-col rounded-md shadow-md border border-solid border-blue-300">
      <div className="p-1 bg-blue-100 text-blue-950 rounded-t-md">{title}</div>
      <div className="p-2 bg-white rounded-b-md flex flex-wrap gap-1">
        {children}
      </div>
    </div>
  );
};

export default ElementShortcutGroupComponent;
