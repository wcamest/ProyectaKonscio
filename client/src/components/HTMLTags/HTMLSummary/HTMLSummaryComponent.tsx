import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLSummaryComponent = (props: PropsWithChildren<Props>) => {
return <summary>{props.children}</summary>;
};
export default HTMLSummaryComponent;
