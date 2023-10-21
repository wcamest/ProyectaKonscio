import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLDialogComponent = (props: PropsWithChildren<Props>) => {
return <dialog>{props.children}</dialog>;
};
export default HTMLDialogComponent;
