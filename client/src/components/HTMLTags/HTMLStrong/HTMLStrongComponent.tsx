import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLStrongComponent = (props: PropsWithChildren<Props>) => {
return <strong>{props.children}</strong>;
};
export default HTMLStrongComponent;
