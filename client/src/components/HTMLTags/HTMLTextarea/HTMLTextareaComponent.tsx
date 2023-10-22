import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLTextareaComponent = (props: PropsWithChildren<Props>) => {
return <textarea>{props.children}</textarea>;
};
export default HTMLTextareaComponent;
