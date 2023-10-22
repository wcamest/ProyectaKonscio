import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLSourceComponent = (props: PropsWithChildren<Props>) => {
return <source>{props.children}</source>;
};
export default HTMLSourceComponent;
