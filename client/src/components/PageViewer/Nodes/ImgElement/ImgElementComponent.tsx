import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import Image from "next/image";
import React from "react";

type Props = { node: PageNode; page: PageDataObject; breakpoint?: string };

const ImgElementComponent = (props: Props) => {
  const { node, page, breakpoint } = props;

  const src = node.PropertyValue("src");
  const alt = node.PropertyValue("alt");
  const width = node.PropertyValue("width");
  const height = node.PropertyValue("height");
  const fill = node.PropertyValue("fill");

  if (!src)
    return (
      <Image
        src={"/api/image/image-not-found.png"}
        width={225}
        height={225}
        alt="Image not found"
      />
    );

  if (!fill)
    return (
      <Image
        src={src}
        alt={alt ? alt : "Image without description"}
        width={width ? width : 0}
        height={height ? height : 0}
        className={node.ClassName(breakpoint)}
      />
    );

  return (
    <Image
      src={src}
      alt={alt ? alt : "Image without description"}
      fill={fill}
      className={node.ClassName(breakpoint)}
    />
  );
};

export default ImgElementComponent;
