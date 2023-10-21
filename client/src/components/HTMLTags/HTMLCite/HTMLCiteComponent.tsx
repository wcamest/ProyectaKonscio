import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLCiteComponent = (props: PropsWithChildren<Props>) => {
return <cite>{props.children}</cite>;
};
export default HTMLCiteComponent;
