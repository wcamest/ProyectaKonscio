import React, { PropsWithChildren } from "react";
type Props = {};
const HTMLSelectComponent = (props: PropsWithChildren<Props>) => {
return <select>{props.children}</select>;
};
export default HTMLSelectComponent;
