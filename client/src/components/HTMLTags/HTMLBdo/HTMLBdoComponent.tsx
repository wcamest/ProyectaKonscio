import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLBdoComponent = (props: PropsWithChildren<Props>) => {
return <bdo>{props.children}</bdo>;
};
export default HTMLBdoComponent;
