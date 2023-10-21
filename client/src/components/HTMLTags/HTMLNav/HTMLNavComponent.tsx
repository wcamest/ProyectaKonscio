import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLNavComponent = (props: PropsWithChildren<Props>) => {
return <nav>{props.children}</nav>;
};
export default HTMLNavComponent;
