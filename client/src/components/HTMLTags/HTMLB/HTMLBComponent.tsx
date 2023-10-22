import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLBComponent = (props: PropsWithChildren<Props>) => {
return <b>{props.children}</b>;
};
export default HTMLBComponent;
