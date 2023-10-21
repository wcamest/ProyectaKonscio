import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLTfootComponent = (props: PropsWithChildren<Props>) => {
return <tfoot>{props.children}</tfoot>;
};
export default HTMLTfootComponent;
