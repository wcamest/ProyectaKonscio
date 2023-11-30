import Image from "next/image";
import React, { MouseEventHandler } from "react";

type Props = {
  icon?: string;
  text: string;
  onClick?: MouseEventHandler
};

const ElementSelectorItemComponent = (props: Props) => {
  const { icon, text, onClick } = props;

  return (
    <div className="p-2 flex items-center gap-3 hover:bg-gray-100 border border-solid border-gray-300 active:bg-blue-800 active:text-blue-50 rounded-md shadow-md select-none cursor-pointer" onClick={onClick}>
      {icon && <div className="p-2 bg-white rounded-full"><Image src={icon} width={30} height={30} alt="icon" /></div>}
      <span>{text}</span>
    </div>
  );
};

export default ElementSelectorItemComponent;
