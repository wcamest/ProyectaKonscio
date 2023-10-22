import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLIComponent = (props: PropsWithChildren<Props>) => {
return <i>{props.children}</i>;
};
export default HTMLIComponent;
