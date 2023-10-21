import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLSpanComponent = (props: PropsWithChildren<Props>) => {
return <span>{props.children}</span>;
};
export default HTMLSpanComponent;
