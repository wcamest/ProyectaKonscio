import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLDivComponent = (props: PropsWithChildren<Props>) => {
return <div>{props.children}</div>;
};
export default HTMLDivComponent;
