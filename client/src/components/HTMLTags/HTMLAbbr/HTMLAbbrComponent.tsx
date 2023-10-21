import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLAbbrComponent = (props: PropsWithChildren<Props>) => {
return <abbr>{props.children}</abbr>;
};
export default HTMLAbbrComponent;
