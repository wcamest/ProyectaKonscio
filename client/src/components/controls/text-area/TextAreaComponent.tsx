import React, { ChangeEventHandler } from "react";

type Props = {
  value?: string;
  onChange?: ChangeEventHandler;
};

const TextAreaComponent = (props: Props) => {
  const { value, onChange } = props;

  return (
    <textarea
      className="p-2 border border-solid border-blue-400 resize-y rounded-md outline-none"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextAreaComponent;
