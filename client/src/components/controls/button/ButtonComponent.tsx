'use client'

import { ButtonSizeType } from "@/types/ButtonSIzeType";
import React, { MouseEventHandler, PropsWithChildren } from "react";

type Props = {
  onClick?: MouseEventHandler;
  size?: ButtonSizeType;
  rounded?: boolean
};

const ButtonComponent = (props: PropsWithChildren<Props>) => {
  const { size, onClick } = props;

  if (size === ButtonSizeType.small)
    return (
      <button
        className={`px-2 py-1 bg-blue-400 hover:bg-blue-600 active:bg-blue-800 text-blue-50 rounded-md shadow-md`}
        onClick={onClick}
      >
        {props.children}
      </button>
    );

  if (size === ButtonSizeType.medium)
    return (
      <button
        className={`px-3 py-2 bg-blue-400 hover:bg-blue-600 active:bg-blue-800 text-blue-50 rounded-md shadow-md`}
        onClick={onClick}
      >
        {props.children}
      </button>
    );

  return (
    <button
      className={`px-4 py-2 bg-blue-400 hover:bg-blue-600 active:bg-blue-800 text-blue-50 rounded-md shadow-md`}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonComponent;
