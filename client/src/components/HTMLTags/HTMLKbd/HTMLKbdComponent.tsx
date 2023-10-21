import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLKbdComponent = (props: PropsWithChildren<Props>) => {
return <kbd>{props.children}</kbd>;
};
export default HTMLKbdComponent;
