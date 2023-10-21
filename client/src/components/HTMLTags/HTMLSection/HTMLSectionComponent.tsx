import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLSectionComponent = (props: PropsWithChildren<Props>) => {
return <section>{props.children}</section>;
};
export default HTMLSectionComponent;
