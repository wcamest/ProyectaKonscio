import Image from "next/image";
import React, { MouseEventHandler } from "react";

type Props = {
  icon?: string;
  text: string;
  containers?: string[];
  selectedNodeType?: string;
  onClick?: MouseEventHandler;
};

const ElementSelectorItemComponent = (props: Props) => {
  const { icon, text, containers, selectedNodeType, onClick } = props;

  const Renderer = {
    Main() {
      if (containers && selectedNodeType) {
        if (!containers.includes(selectedNodeType)) return undefined;
      }

      return (
        <div
          className="p-2 flex items-center gap-3 hover:bg-gray-100 border border-solid border-gray-300 active:bg-blue-800 active:text-blue-50 rounded-md shadow-md select-none cursor-pointer"
          onClick={onClick}
        >
          {icon && (
            <div className="p-2 bg-white rounded-full">
              <Image src={icon} width={30} height={30} alt="icon" />
            </div>
          )}
          <span>{text}</span>
        </div>
      );
    },
  };

  return Renderer.Main();
};

export default ElementSelectorItemComponent;
