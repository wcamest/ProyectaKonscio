import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLSupComponent = (props: PropsWithChildren<Props>) => {
return <sup>{props.children}</sup>;
};
export default HTMLSupComponent;
