import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLColgroupComponent = (props: PropsWithChildren<Props>) => {
return <colgroup>{props.children}</colgroup>;
};
export default HTMLColgroupComponent;
