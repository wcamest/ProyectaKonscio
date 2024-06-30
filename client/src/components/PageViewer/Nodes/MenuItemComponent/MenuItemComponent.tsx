import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import Link from "next/link";
import React from "react";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const MenuItemComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  const Renderer = {
    Link() {
      const text = node.PropertyValue("text");
      const href: string = node.PropertyValue("href");

      if (!href) return <span>{text}</span>;

      if (href.startsWith("/")) return <Link href={href}>{text}</Link>;

      if (href.startsWith("http")) return <a href={href}>{text}</a>;

      return <span>{text}</span>;
    },
  };

  return (
    <div className={node.ClassName(breakpoint)}>
      {Renderer.Link()}
    </div>
  );
};

export default MenuItemComponent;
