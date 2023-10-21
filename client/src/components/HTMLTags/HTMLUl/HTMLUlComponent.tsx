import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLUlComponent = (props: PropsWithChildren<Props>) => {
return <ul>{props.children}</ul>;
};
export default HTMLUlComponent;
