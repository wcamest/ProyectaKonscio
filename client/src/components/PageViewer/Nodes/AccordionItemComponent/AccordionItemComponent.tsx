import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React, { useEffect, useRef, useState } from "react";
import CaretUpFillIcon from "../../icons/CaretUpFillIcon";
import CaretDownFillIcon from "../../icons/CaretDownFillIcon";
import Image from "next/image";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  inputPayload?: any;
  outputPayload?: any;
  selectedNodeId?: string;
};

const AccordionItemComponent = (props: Props) => {
  const {
    node,
    page,
    breakpoint,
    inputPayload,
    outputPayload,
    selectedNodeId,
  } = props;

  const [state, setState] = useState({
    scrollHeight: 0,
  });
  const contentRef = useRef<HTMLDivElement>(null);

  const Functions = {
    Expanded() {
      return inputPayload.expandedItem
        ? inputPayload.expandedItem === node.Id()
        : false;
    },
    ExpandOrCollapse() {
      if (!outputPayload) return;
      if (!outputPayload.expandOrCollapse) return;

      outputPayload.expandOrCollapse(node.Id());
    },
  };

  const Renderer = {
    Header() {
      const iconSrc = node.PropertyValue("iconSrc");
      let iconAlt = node.PropertyValue("iconAlt");

      let icon: React.JSX.Element | undefined = undefined;
      iconAlt = iconAlt ? iconAlt : "accordion item icon";

      if (iconSrc)
        icon = <Image src={iconSrc} alt={iconAlt} width={25} height={23} />;

      return (
        <div
          style={{
            backgroundColor: node.PropertyValue("headerBackground"),
            color: node.PropertyValue("headerColor"),
          }}
          className="p-4 flex justify-between items-center gap-5 text-2xl select-none cursor-pointer"
          onClick={() => Functions.ExpandOrCollapse()}
        >
          <div className="flex gap-5 items-center">
            {icon}
            <span>{node.PropertyValue("title")}</span>
          </div>
          {Functions.Expanded() ? <CaretUpFillIcon /> : <CaretDownFillIcon />}
        </div>
      );
    },
  };

  useEffect(() => {
    if (contentRef.current)
      setState({
        ...state,
        scrollHeight: contentRef.current.scrollHeight,
      });
  }, []);

  useEffect(() => {
    if (selectedNodeId) {
      const selectedNodeIsDescendant = node.IsDescendant(selectedNodeId);

      if (selectedNodeIsDescendant && outputPayload && outputPayload.expand)
        outputPayload.expand(node.Id());
    }
  }, [selectedNodeId]);

  return (
    <div className={node.ClassName(breakpoint)}>
      {Renderer.Header()}
      <div
        ref={contentRef}
        style={{
          transition:
            "max-height 0.5s ease-in-out, border-width 0.5s ease-in-out, padding-top 0.5s ease-in-out, padding-bottom 0.5s ease-in-out",
          maxHeight: Functions.Expanded() ? `${state.scrollHeight}px` : "0",
        }}
        className={`${Functions.Expanded() ? "border" : "border-0"} ${
          Functions.Expanded() ? "py-2" : "py-0"
        } px-2 border-solid border-gray-300 overflow-hidden box-content`}
      >
        {node.RenderChildren(breakpoint, undefined, undefined, selectedNodeId)}
      </div>
    </div>
  );
};

export default AccordionItemComponent;
