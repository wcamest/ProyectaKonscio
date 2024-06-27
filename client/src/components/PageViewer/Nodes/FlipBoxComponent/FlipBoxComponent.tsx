import React from "react";
import styles from "./FlipBoxComponent.module.css";
import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  selectedNodeId?: string;
};

const FlipBoxComponent = (props: Props) => {
  const { node, page, breakpoint, selectedNodeId } = props;

  const flipDirection = node.PropertyValue("flipDirection");
  const invert = node.PropertyValue("invert");

  const flipBoxClasses: any = {
    horizontal: "hFlipBox",
    vertical: "vFlipBox",
  };

  const frontChild = node.GetChildByIndex(0);
  const backChild = node.GetChildByIndex(1);

  return (
    <div
      className={`${
        flipDirection
          ? styles[`${invert ? "inv_" : ""}${flipBoxClasses[flipDirection]}`]
          : styles.hFlipBox
      } ${node.ClassName(breakpoint)}`}
    >
      <div className={styles.inner}>
        <div className={styles.front}>
          {frontChild &&
            frontChild.Render(
              breakpoint,
              undefined,
              undefined,
              undefined,
              selectedNodeId
            )}
        </div>
        <div className={styles.back}>
          {backChild &&
            backChild.Render(
              breakpoint,
              undefined,
              undefined,
              undefined,
              selectedNodeId
            )}
        </div>
      </div>
    </div>
  );
};

export default FlipBoxComponent;
