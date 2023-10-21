import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLMainComponent = (props: PropsWithChildren<Props>) => {
return <main>{props.children}</main>;
};
export default HTMLMainComponent;
