import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLDatalistComponent = (props: PropsWithChildren<Props>) => {
return <datalist>{props.children}</datalist>;
};
export default HTMLDatalistComponent;
