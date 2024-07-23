import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import Link from "next/link";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import CaretDownFillIcon from "../../icons/CaretDownFillIcon";
import CaretUpFillIcon from "../../icons/CaretUpFillIcon";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  inputPayload?: any;
  outputPayload?: any;
  selectedNodeId?: string;
};

const MenuItemComponent = (props: Props) => {
  const {
    node,
    page,
    breakpoint,
    inputPayload,
    outputPayload,
    selectedNodeId,
  } = props;
  const [state, setState] = useState({
    expanded: false,
  });
  const refState = useRef(state);
  const { navigation, level } = inputPayload;

  const Functions = {
    SetState(updatedState: any) {
      setState(updatedState);
      refState.current = updatedState;
    },
    ExpandOrCollapse() {
      const expanded = !refState.current.expanded;

      Functions.SetState({
        expanded,
      });
    },
    Collapse() {
      if (refState.current.expanded)
        Functions.SetState({
          expanded: false,
        });
    },
  };

  const Renderer = {
    Body() {
      if (!node.Children().length) return;

      if (navigation === "mobile")
        return (
          <div
            className={`${
              refState.current.expanded ? "flex" : "hidden"
            } pl-10 pt-1 flex-col`}
          >
            {node.RenderChildren(
              breakpoint,
              { ...inputPayload, level: level + 1 },
              outputPayload,
              selectedNodeId
            )}
          </div>
        );

      return (
        <div
          className={`${
            refState.current.expanded ? "flex" : "hidden"
          } w-fit flex-col bg-white absolute top-full mt-2 shadow-md border border-solid border-gray-300 whitespace-nowrap`}
        >
          {node.RenderChildren(
            breakpoint,
            { ...inputPayload, level: level + 1 },
            outputPayload,
            selectedNodeId
          )}
        </div>
      );
    },
    HeaderFromDropdownMenu() {
      const text = node.PropertyValue("text");

      const expandCollapseIcon =
        navigation === "mobile" ? (
          refState.current.expanded ? (
            <CaretUpFillIcon />
          ) : (
            <CaretDownFillIcon />
          )
        ) : undefined;

      return (
        <button
          className="w-full flex items-center gap-3"
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            Functions.ExpandOrCollapse();
          }}
        >
          <span>{text}</span>
          {expandCollapseIcon}
        </button>
      );
    },
    HeaderFromLinkMenu() {
      const text = node.PropertyValue("text");
      const href: string = node.PropertyValue("href");

      let header: React.JSX.Element | undefined = undefined;

      if (!href) header = <span>{text}</span>;
      else if (href.startsWith("/")) header = <Link href={href}>{text}</Link>;
      else if (href.startsWith("http")) header = <a href={href}>{text}</a>;
      else header = <span>{text}</span>;

      return (
        <div className={`w-full ${level > 0 ? "hover:bg-gray-300 " : ""}flex`}>
          {header}
        </div>
      );
    },
    Header() {
      if (!node.Children().length) return Renderer.HeaderFromLinkMenu();

      return Renderer.HeaderFromDropdownMenu();
    },
  };

  useEffect(() => {
    window.addEventListener("click", Functions.Collapse);

    return () => {
      window.removeEventListener("click", Functions.Collapse);
    };
  }, []);

  return (
    <div className={node.ClassName(breakpoint)}>
      {Renderer.Header()}
      {Renderer.Body()}
    </div>
  );
};

export default MenuItemComponent;
