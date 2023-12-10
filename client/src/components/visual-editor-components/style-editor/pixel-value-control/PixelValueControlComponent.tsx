import {
  Screen,
  updateNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import StylesProperty from "@/types/page-document/styles/StylesProperty";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import SliderControlComponent from "../slider-control/SliderControlComponent";

type Props = {
  screen: Screen;
  document: PageDocument;
  nodeId: string;
  propertyName: string;
  isActive: Function;
  updateClassName: Function;
};

const values: string[] = [
  "0",
  "px",
  "0.5",
  "1",
  "1.5",
  "2",
  "2.5",
  "3",
  "3.5",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "72",
  "80",
  "96",
];

const labels: string[] = [
  "0px",
  "1px",
  "2px",
  "4px",
  "6px",
  "8px",
  "10px",
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "28px",
  "32px",
  "36px",
  "40px",
  "44px",
  "48px",
  "56px",
  "64px",
  "80px",
  "96px",
  "112px",
  "128px",
  "144px",
  "160px",
  "176px",
  "192px",
  "208px",
  "224px",
  "240px",
  "256px",
  "288px",
  "320px",
  "384px",
];

const PixelValueControlComponent = (props: Props) => {
  const { screen, document, nodeId, propertyName, isActive, updateClassName } =
    props;

  const Functions = {
    GetClassName(): string | undefined {
      const node = document.nodes.find(
        (node: PageDocumentNode) => node.id === nodeId
      );

      if (!node) return undefined;

      const screenProperties: any = {
        base: "base",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        "2xl": "xl2",
      };

      const screenName = screenProperties[screen];
      const styles: any = node.styles;
      const currentScreenStyle = styles[screenName];
      const property = currentScreenStyle[propertyName];

      if (property) {
        return (property as StylesProperty).className;
      }

      return "";
    },
  };

  if (!isActive(Functions.GetClassName())) return undefined;

  const classNameValue = Functions.GetClassName();

  if (classNameValue)
    return (
      <SliderControlComponent
        document={document}
        nodeId={nodeId}
        propertyName={propertyName}
        screen={screen}
        updateValue={updateClassName}
        values={values}
        labels={labels}
        regExp={/^.*\-(\d+(\.\d+)?|px)$/}
      />
    );
};

export default PixelValueControlComponent;
