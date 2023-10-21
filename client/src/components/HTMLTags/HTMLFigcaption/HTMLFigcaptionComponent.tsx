import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLFigcaptionComponent = (props: PropsWithChildren<Props>) => {
return <figcaption>{props.children}</figcaption>;
};
export default HTMLFigcaptionComponent;
