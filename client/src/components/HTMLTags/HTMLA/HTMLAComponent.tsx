import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLAComponent = (props: PropsWithChildren<Props>) => {
return <a>{props.children}</a>;
};
export default HTMLAComponent;
