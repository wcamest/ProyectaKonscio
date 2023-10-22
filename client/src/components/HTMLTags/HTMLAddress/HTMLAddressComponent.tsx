import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLAddressComponent = (props: PropsWithChildren<Props>) => {
return <address>{props.children}</address>;
};
export default HTMLAddressComponent;
