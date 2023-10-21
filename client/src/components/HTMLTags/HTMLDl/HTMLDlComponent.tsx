import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLDlComponent = (props: PropsWithChildren<Props>) => {
return <dl>{props.children}</dl>;
};
export default HTMLDlComponent;
