import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLImgComponent = (props: PropsWithChildren<Props>) => {
  return <img>{props.children}</img>;
};
export default HTMLImgComponent;
