import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLMarkComponent = (props: PropsWithChildren<Props>) => {
return <mark>{props.children}</mark>;
};
export default HTMLMarkComponent;
