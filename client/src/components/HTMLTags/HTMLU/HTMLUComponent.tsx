import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLUComponent = (props: PropsWithChildren<Props>) => {
return <u>{props.children}</u>;
};
export default HTMLUComponent;
