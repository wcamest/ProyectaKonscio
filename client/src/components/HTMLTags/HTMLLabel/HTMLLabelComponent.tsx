import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLLabelComponent = (props: PropsWithChildren<Props>) => {
return <label>{props.children}</label>;
};
export default HTMLLabelComponent;
