import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLH2Component = (props: PropsWithChildren<Props>) => {
return <h2>{props.children}</h2>;
};
export default HTMLH2Component;
