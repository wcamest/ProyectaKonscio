import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLLiComponent = (props: PropsWithChildren<Props>) => {
return <li>{props.children}</li>;
};
export default HTMLLiComponent;
