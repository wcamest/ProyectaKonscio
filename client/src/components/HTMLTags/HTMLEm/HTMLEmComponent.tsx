import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLEmComponent = (props: PropsWithChildren<Props>) => {
return <em>{props.children}</em>;
};
export default HTMLEmComponent;
