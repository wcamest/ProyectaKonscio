import React, { PropsWithChildren } from "react";
type Props = {
  className?: string;
};
const HTMLDivComponent = (props: PropsWithChildren<Props>) => {
  const { className } = props;

  return <div className={className}>{props.children}</div>;
};
export default HTMLDivComponent;
