import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLTdComponent = (props: PropsWithChildren<Props>) => {
return <td>{props.children}</td>;
};
export default HTMLTdComponent;
