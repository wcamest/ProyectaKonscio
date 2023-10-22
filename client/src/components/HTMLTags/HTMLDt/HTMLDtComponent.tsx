import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLDtComponent = (props: PropsWithChildren<Props>) => {
return <dt>{props.children}</dt>;
};
export default HTMLDtComponent;
