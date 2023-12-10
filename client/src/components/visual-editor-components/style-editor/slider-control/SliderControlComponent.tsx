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
  updateValue: Function;
  values: string[];
  labels: string[];
  regExp: RegExp;
};

const SliderControlComponent = (props: Props) => {
  const {
    screen,
    document,
    nodeId,
    propertyName,
    updateValue,
    values,
    labels,
    regExp,
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
    GetValue() {
      const className = Functions.GetClassName();
      if (!className) return undefined;
      const matches = className.match(regExp);

      if (!matches) return undefined;

      const value = matches[1];

      return value;
    },
    GetValueIndex() {
      const value = Functions.GetValue();

      if (value) {
        return values.indexOf(value);
      }

      return 0;
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

  return (
    <div className="flex gap-2">
      <input
        className="w-full"
        type="range"
        min={0}
        max={values.length - 1}
        value={Functions.GetValueIndex()}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          Functions.UpdateClassName(
            updateValue(values[parseInt(e.target.value)])
          );
        }}
      />
      <span className="text-blue-800">{labels[Functions.GetValueIndex()]}</span>
    </div>
  );
};

export default SliderControlComponent;
