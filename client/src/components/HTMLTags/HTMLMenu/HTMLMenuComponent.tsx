import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLMenuComponent = (props: PropsWithChildren<Props>) => {
return <menu>{props.children}</menu>;
};
export default HTMLMenuComponent;
