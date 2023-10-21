import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLPreComponent = (props: PropsWithChildren<Props>) => {
return <pre>{props.children}</pre>;
};
export default HTMLPreComponent;
