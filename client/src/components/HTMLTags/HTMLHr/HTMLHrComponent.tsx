import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLHrComponent = (props: PropsWithChildren<Props>) => {
return <hr>{props.children}</hr>;
};
export default HTMLHrComponent;
