import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLSComponent = (props: PropsWithChildren<Props>) => {
return <s>{props.children}</s>;
};
export default HTMLSComponent;
