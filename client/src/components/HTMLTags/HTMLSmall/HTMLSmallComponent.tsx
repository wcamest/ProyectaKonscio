import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLSmallComponent = (props: PropsWithChildren<Props>) => {
return <small>{props.children}</small>;
};
export default HTMLSmallComponent;
