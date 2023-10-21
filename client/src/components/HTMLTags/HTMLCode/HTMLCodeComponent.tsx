import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLCodeComponent = (props: PropsWithChildren<Props>) => {
return <code>{props.children}</code>;
};
export default HTMLCodeComponent;
