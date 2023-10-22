import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLFigureComponent = (props: PropsWithChildren<Props>) => {
return <figure>{props.children}</figure>;
};
export default HTMLFigureComponent;
