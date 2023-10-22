import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLAudioComponent = (props: PropsWithChildren<Props>) => {
return <audio>{props.children}</audio>;
};
export default HTMLAudioComponent;
