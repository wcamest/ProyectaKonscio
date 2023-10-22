import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLFormComponent = (props: PropsWithChildren<Props>) => {
return <form>{props.children}</form>;
};
export default HTMLFormComponent;
