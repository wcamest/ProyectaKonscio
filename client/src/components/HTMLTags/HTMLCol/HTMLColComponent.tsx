import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLColComponent = (props: PropsWithChildren<Props>) => {
return <col>{props.children}</col>;
};
export default HTMLColComponent;
