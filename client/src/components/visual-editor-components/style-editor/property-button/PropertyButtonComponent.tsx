import {
  Screen,
  updateNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import StylesProperty from "@/types/page-document/styles/StylesProperty";
import React, { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";

type Props = {
  screen: Screen;
  document: PageDocument;
  nodeId: string;
  propertyName: string;
  isActive: Function;
  updateClassName: Function;
};

const PropertyButtonComponent = (props: PropsWithChildren<Props>) => {
  const {
    screen,
    document,
    nodeId,
    propertyName,
    isActive,
    updateClassName,
    children,
  } = props;
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
  };

  if (isActive(Functions.GetClassName()))
    return (
      <button className="p-1 bg-blue-800 text-blue-50 border border-solid border-blue-800">
        {children}
      </button>
    );

  return (
    <button
      className="p-1 border border-solid text-blue-800 active:text-blue-50 border-blue-300 active:border-blue-800 hover:bg-blue-300 active:bg-blue-800"
      onClick={() => {
        Functions.UpdateClassName(updateClassName());
      }}
    >
      {children}
    </button>
  );
};

export default PropertyButtonComponent;
