import {
  Screen,
  updateNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import StylesProperty from "@/types/page-document/styles/StylesProperty";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

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

const PixelValueControlComponent = (props: Props) => {
  const { screen, document, nodeId, propertyName, isActive, updateClassName } =
    props;
  const dispatch = useDispatch();

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
    UpdateClassName(value: string) {
      const node = document.nodes.find(
        (node: PageDocumentNode) => node.id === nodeId
      );

      if (!node) return false;

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
        const updatedProperty: any = {
          ...property,
          className: value,
        };

        const updatedScreenStyle: any = {
          ...currentScreenStyle,
          [propertyName]: updatedProperty,
        };

        const updatedStyles: any = {
          ...styles,
          [screenName]: updatedScreenStyle,
        };

        const updatedNode: PageDocumentNode = {
          ...node,
          styles: updatedStyles,
        };

        dispatch(updateNode(updatedNode));
      }
    },
    GetPXValue() {
      const className = Functions.GetClassName();

      if (!className) return 0;

      const regex = /^.*\-(\d+(\.\d+)?|px)$/;
      const matches = className.match(regex);

      if (!matches) return 0;

      const value = matches[1];

      return values.indexOf(value);
    },
  };

  if (!isActive(Functions.GetClassName())) return undefined;

  return (
    <div className="flex gap-2">
      <input
        className="w-full"
        type="range"
        min={0}
        max={values.length - 1}
        value={Functions.GetPXValue()}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          Functions.UpdateClassName(
            updateClassName(values[parseInt(e.target.value)])
          );
        }}
      />
    </div>
  );
};

export default PixelValueControlComponent;
