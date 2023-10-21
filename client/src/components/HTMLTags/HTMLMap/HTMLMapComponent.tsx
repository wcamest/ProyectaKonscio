import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLMapComponent = (props: PropsWithChildren<Props>) => {
return <map>{props.children}</map>;
};
export default HTMLMapComponent;
