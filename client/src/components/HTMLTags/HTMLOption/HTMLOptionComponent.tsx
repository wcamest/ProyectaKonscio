import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLOptionComponent = (props: PropsWithChildren<Props>) => {
return <option>{props.children}</option>;
};
export default HTMLOptionComponent;
