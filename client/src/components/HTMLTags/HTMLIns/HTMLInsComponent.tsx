import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLInsComponent = (props: PropsWithChildren<Props>) => {
return <ins>{props.children}</ins>;
};
export default HTMLInsComponent;
