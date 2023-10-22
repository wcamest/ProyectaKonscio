import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLHeaderComponent = (props: PropsWithChildren<Props>) => {
return <header>{props.children}</header>;
};
export default HTMLHeaderComponent;
