import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLFieldsetComponent = (props: PropsWithChildren<Props>) => {
return <fieldset>{props.children}</fieldset>;
};
export default HTMLFieldsetComponent;
