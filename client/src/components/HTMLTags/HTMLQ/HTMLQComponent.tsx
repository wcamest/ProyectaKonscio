import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLQComponent = (props: PropsWithChildren<Props>) => {
return <q>{props.children}</q>;
};
export default HTMLQComponent;
