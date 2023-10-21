import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLTrComponent = (props: PropsWithChildren<Props>) => {
return <tr>{props.children}</tr>;
};
export default HTMLTrComponent;
