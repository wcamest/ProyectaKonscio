import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLArticleComponent = (props: PropsWithChildren<Props>) => {
return <article>{props.children}</article>;
};
export default HTMLArticleComponent;
