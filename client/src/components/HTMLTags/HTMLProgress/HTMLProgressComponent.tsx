import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLProgressComponent = (props: PropsWithChildren<Props>) => {
return <progress>{props.children}</progress>;
};
export default HTMLProgressComponent;
