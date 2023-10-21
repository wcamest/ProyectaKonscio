import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLCaptionComponent = (props: PropsWithChildren<Props>) => {
return <caption>{props.children}</caption>;
};
export default HTMLCaptionComponent;
