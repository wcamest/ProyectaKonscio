import React, { ChangeEventHandler } from "react";

type Props = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const TextInputComponent = (props: Props) => {
  const { onChange, value } = props;

  return (
    <input
      value={value}
      onChange={onChange}
      className="p-1 border border-solid border-blue-400 rounded-md outline-none"
    />
  );
};

export default TextInputComponent;
