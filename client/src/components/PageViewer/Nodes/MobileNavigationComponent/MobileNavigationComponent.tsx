import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const MobileNavigationComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;
  const [state, setState] = useState({
    headerHeight: 0,
    expandedMenu: false,
  });
  const headerRef = useRef<HTMLDivElement>(null);

  const Functions = {
    ExpandOrCollapse() {
      setState({
        ...state,
        expandedMenu: !state.expandedMenu,
      });
    },
    SetHeaderHeight() {
      if (headerRef.current) {
        const headerRectBoundingRect =
          headerRef.current.getBoundingClientRect();

        setState({
          ...state,
          headerHeight: headerRectBoundingRect.height,
        });
      }
    },
    Resize() {
      Functions.SetHeaderHeight();
    },
  };

  const header = node.GetChildByType("MobileNavigationHeaderComponent");
  const body = node.GetChildByType("MobileNavigationBodyComponent");

  useEffect(() => {
    Functions.SetHeaderHeight();

    window.addEventListener("resize", Functions.Resize);

    return () => {
      window.removeEventListener("resize", Functions.Resize);
    };
  }, []);

  return (
    <nav className={node.ClassName(breakpoint)}>
      <div ref={headerRef} className="w-full h-fit">
        {header &&
          header.Render(breakpoint, undefined, {
            expandOrCollapse: Functions.ExpandOrCollapse,
          })}
      </div>
      <div
        className={`${
          state.expandedMenu ? "block" : "hidden"
        } w-full h-fit overflow-hidden`}
      >
        {body &&
          body.Render(breakpoint, undefined, {
            navigation: "mobile",
            headerHeight: state.headerHeight,
          })}
      </div>
    </nav>
  );
};

export default MobileNavigationComponent;
