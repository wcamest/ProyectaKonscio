import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLWbrComponent = (props: PropsWithChildren<Props>) => {
return <wbr>{props.children}</wbr>;
};
export default HTMLWbrComponent;
