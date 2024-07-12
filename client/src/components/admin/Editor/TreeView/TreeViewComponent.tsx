import React, { PropsWithChildren, useState } from "react";

type Props = {};

const TreeViewComponent = (props: PropsWithChildren<Props>) => {

  return (
    <div className="p-2 w-full h-full overflow-auto">
      <div className="pl-8 w-full h-fit">{props.children}</div>
    </div>
  );
};

export default TreeViewComponent;
