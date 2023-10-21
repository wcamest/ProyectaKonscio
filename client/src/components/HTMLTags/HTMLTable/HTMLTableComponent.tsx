import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLTableComponent = (props: PropsWithChildren<Props>) => {
return <table>{props.children}</table>;
};
export default HTMLTableComponent;
