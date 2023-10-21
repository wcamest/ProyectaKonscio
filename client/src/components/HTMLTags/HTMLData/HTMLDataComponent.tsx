import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLDataComponent = (props: PropsWithChildren<Props>) => {
return <data>{props.children}</data>;
};
export default HTMLDataComponent;
