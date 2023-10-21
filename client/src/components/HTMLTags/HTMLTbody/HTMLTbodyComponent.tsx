import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLTbodyComponent = (props: PropsWithChildren<Props>) => {
return <tbody>{props.children}</tbody>;
};
export default HTMLTbodyComponent;
