import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLSampComponent = (props: PropsWithChildren<Props>) => {
return <samp>{props.children}</samp>;
};
export default HTMLSampComponent;
