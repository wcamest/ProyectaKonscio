import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLEmbedComponent = (props: PropsWithChildren<Props>) => {
return <embed>{props.children}</embed>;
};
export default HTMLEmbedComponent;
