import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLVarComponent = (props: PropsWithChildren<Props>) => {
return <var>{props.children}</var>;
};
export default HTMLVarComponent;
