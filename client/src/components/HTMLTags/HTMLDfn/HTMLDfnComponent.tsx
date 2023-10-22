import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLDfnComponent = (props: PropsWithChildren<Props>) => {
return <dfn>{props.children}</dfn>;
};
export default HTMLDfnComponent;
