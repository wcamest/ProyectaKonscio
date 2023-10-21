import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLDetailsComponent = (props: PropsWithChildren<Props>) => {
return <details>{props.children}</details>;
};
export default HTMLDetailsComponent;
