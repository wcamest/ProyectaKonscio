import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLPComponent = (props: PropsWithChildren<Props>) => {
return <p>{props.children}</p>;
};
export default HTMLPComponent;
