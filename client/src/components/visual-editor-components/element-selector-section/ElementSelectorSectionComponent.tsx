import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
  containers?: string[];
  selectedNodeType?: string;
};

const ElementSelectorSectionComponent = (props: PropsWithChildren<Props>) => {
  const { title, children, containers, selectedNodeType } = props;

  const Renderer = {
    Main() {
      if (containers && selectedNodeType) {
        if (!containers.includes(selectedNodeType)) return undefined;
      }

      return (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-fit text-xl text-gray-500">{title}</span>
            <div className="w-full h-0 border-t border-t-gray-200"></div>
          </div>
          <div className="w-full flex gap-4 flex-wrap">{children}</div>
        </div>
      );
    },
  };

  return Renderer.Main();
};

export default ElementSelectorSectionComponent;
