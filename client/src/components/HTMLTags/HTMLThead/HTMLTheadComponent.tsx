import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLTheadComponent = (props: PropsWithChildren<Props>) => {
return <thead>{props.children}</thead>;
};
export default HTMLTheadComponent;
