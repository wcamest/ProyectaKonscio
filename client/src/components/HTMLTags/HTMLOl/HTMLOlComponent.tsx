import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLOlComponent = (props: PropsWithChildren<Props>) => {
return <ol>{props.children}</ol>;
};
export default HTMLOlComponent;
