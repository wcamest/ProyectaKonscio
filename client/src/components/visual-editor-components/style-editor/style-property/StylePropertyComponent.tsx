import {
  Screen,
  updateNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import StylesProperty from "@/types/page-document/styles/StylesProperty";
import React, { ChangeEvent, PropsWithChildren } from "react";
import { useDispatch } from "react-redux";

type Props = {
  screen: Screen;
  document: PageDocument;
  nodeId: string;
  title: string;
  properties: string[];
};

const StylePropertyComponent = (props: PropsWithChildren<Props>) => {
  const { screen, document, nodeId, title, properties, children } = props;
  const dispatch = useDispatch();

  const Functions = {
    GetEnabled(): boolean {
      const enabledValues: boolean[] = properties.map(
        (propertyName: string) => {
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
            return (property as StylesProperty).enabled;
          }

          return false;
        }
      );

      return !enabledValues.includes(false);
    },
    UpdateEnabled(value: boolean) {
      const node = document.nodes.find(
        (node: PageDocumentNode) => node.id === nodeId
      );

      if (!node) return false;

      let updatedNode: PageDocumentNode = {
        ...node,
      };

      for (let _it_ = 0; _it_ < properties.length; _it_++) {
        const propertyName = properties[_it_];
        const screenProperties: any = {
          base: "base",
          sm: "sm",
          md: "md",
          lg: "lg",
          xl: "xl",
          "2xl": "xl2",
        };

        const screenName = screenProperties[screen];
        const styles: any = updatedNode.styles;
        const currentScreenStyle = styles[screenName];
        const property = currentScreenStyle[propertyName];

        if (property) {
          const updatedProperty: any = {
            ...property,
            enabled: value,
          };

          const updatedScreenStyle: any = {
            ...currentScreenStyle,
            [propertyName]: updatedProperty,
          };

          const updatedStyles: any = {
            ...styles,
            [screenName]: updatedScreenStyle,
          };

          updatedNode = {
            ...updatedNode,
            styles: updatedStyles,
          };
        }
      }

      dispatch(updateNode(updatedNode));
    },
  };

  return (
    <div className="px-2 py-1 flex flex-col border border-solid border-blue-300 rounded-md shadow-md">
      <form className="flex items-center gap-2 text-blue-800">
        <input
          type="checkbox"
          id={`${nodeId}-${properties.join("-")}-checkbox`}
          checked={Functions.GetEnabled()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateEnabled(e.target.checked);
          }}
        />
        <label htmlFor={`${nodeId}-${properties.join("-")}-checkbox`}>
          {title}
        </label>
      </form>
      {Functions.GetEnabled() && (
        <div className="flex flex-col gap-2">
          <div className="w-full border-t border-t-solid border-t-blue-300"></div>
          {children}
        </div>
      )}
    </div>
  );
};

export default StylePropertyComponent;
