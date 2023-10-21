import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLVideoComponent = (props: PropsWithChildren<Props>) => {
return <video>{props.children}</video>;
};
export default HTMLVideoComponent;
