import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLIframeComponent = (props: PropsWithChildren<Props>) => {
return <iframe>{props.children}</iframe>;
};
export default HTMLIframeComponent;
