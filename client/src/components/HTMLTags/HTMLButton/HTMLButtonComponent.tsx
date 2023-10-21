import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLButtonComponent = (props: PropsWithChildren<Props>) => {
return <button>{props.children}</button>;
};
export default HTMLButtonComponent;
