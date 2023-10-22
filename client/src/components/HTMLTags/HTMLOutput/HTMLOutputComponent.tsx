import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLOutputComponent = (props: PropsWithChildren<Props>) => {
return <output>{props.children}</output>;
};
export default HTMLOutputComponent;
