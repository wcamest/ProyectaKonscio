import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLMeterComponent = (props: PropsWithChildren<Props>) => {
return <meter>{props.children}</meter>;
};
export default HTMLMeterComponent;
