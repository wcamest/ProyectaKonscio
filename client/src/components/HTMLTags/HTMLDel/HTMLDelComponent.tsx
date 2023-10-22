import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLDelComponent = (props: PropsWithChildren<Props>) => {
return <del>{props.children}</del>;
};
export default HTMLDelComponent;
