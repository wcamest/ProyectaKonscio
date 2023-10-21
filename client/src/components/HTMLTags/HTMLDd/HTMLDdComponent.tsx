import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLDdComponent = (props: PropsWithChildren<Props>) => {
return <dd>{props.children}</dd>;
};
export default HTMLDdComponent;
