import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLBdiComponent = (props: PropsWithChildren<Props>) => {
return <bdi>{props.children}</bdi>;
};
export default HTMLBdiComponent;
