import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLBlockquoteComponent = (props: PropsWithChildren<Props>) => {
return <blockquote>{props.children}</blockquote>;
};
export default HTMLBlockquoteComponent;
