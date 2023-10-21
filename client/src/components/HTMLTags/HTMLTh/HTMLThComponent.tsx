import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLThComponent = (props: PropsWithChildren<Props>) => {
return <th>{props.children}</th>;
};
export default HTMLThComponent;
