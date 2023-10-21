import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLCanvasComponent = (props: PropsWithChildren<Props>) => {
return <canvas>{props.children}</canvas>;
};
export default HTMLCanvasComponent;
