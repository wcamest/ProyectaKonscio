import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLTimeComponent = (props: PropsWithChildren<Props>) => {
return <time>{props.children}</time>;
};
export default HTMLTimeComponent;
