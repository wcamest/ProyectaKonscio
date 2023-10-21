import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLAsideComponent = (props: PropsWithChildren<Props>) => {
return <aside>{props.children}</aside>;
};
export default HTMLAsideComponent;
