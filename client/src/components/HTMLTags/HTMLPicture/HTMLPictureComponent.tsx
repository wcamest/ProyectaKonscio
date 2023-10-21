import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLPictureComponent = (props: PropsWithChildren<Props>) => {
return <picture>{props.children}</picture>;
};
export default HTMLPictureComponent;
