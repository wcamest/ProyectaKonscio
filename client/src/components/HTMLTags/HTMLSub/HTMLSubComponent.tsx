import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLSubComponent = (props: PropsWithChildren<Props>) => {
return <sub>{props.children}</sub>;
};
export default HTMLSubComponent;
