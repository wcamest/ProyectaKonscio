import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLParamComponent = (props: PropsWithChildren<Props>) => {
return <param>{props.children}</param>;
};
export default HTMLParamComponent;
