import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLObjectComponent = (props: PropsWithChildren<Props>) => {
return <object>{props.children}</object>;
};
export default HTMLObjectComponent;
