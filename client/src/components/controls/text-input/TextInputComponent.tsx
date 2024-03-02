import React, { ChangeEventHandler } from "react";

type Props = {
  value?: string | number;
  min?: number,
  max?: number,
  type?: React.HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

const TextInputComponent = (props: Props) => {
  const { onChange, value, type, min, max, className } = props;

  return (
    <input
      type={type}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className={`${className} p-1 border border-solid border-blue-400 rounded-md outline-none`}
    />
  );
};

export default TextInputComponent;
