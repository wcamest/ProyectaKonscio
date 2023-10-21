import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLFooterComponent = (props: PropsWithChildren<Props>) => {
return <footer>{props.children}</footer>;
};
export default HTMLFooterComponent;
