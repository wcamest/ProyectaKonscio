import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLLegendComponent = (props: PropsWithChildren<Props>) => {
return <legend>{props.children}</legend>;
};
export default HTMLLegendComponent;
