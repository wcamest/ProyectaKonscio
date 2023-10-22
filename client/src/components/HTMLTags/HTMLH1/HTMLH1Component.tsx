import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLH1Component = (props: PropsWithChildren<Props>) => {
return <h1>{props.children}</h1>;
};
export default HTMLH1Component;
