import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLTrackComponent = (props: PropsWithChildren<Props>) => {
return <track>{props.children}</track>;
};
export default HTMLTrackComponent;
