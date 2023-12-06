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
  divisions: string[];
};

const PercentValueControlComponent = (props: Props) => {
  const {
    screen,
    document,
    nodeId,
    propertyName,
    divisions,
    isActive,
    updateClassName,
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
    GetPercentValue(matchIndex: number) {
      const className = Functions.GetClassName();

      if (!className) return undefined;

      const regex = /^.*\-(\d+)\/(\d+)$/;
      const matches = className.match(regex);

      if (!matches) return undefined;

      const value = matches[matchIndex];

      return value;
    },
    GetTotalDivision() {
      const value = Functions.GetPercentValue(2);

      if (!value) return 0;

      return divisions.indexOf(value);
    },
    GetSelectedDivisions(totalDivisions?: string) {
      let current: string | number | undefined = Functions.GetPercentValue(1);
      let total: string | number | undefined = totalDivisions
        ? totalDivisions
        : Functions.GetPercentValue(2);

      if (!current || !total) return 0;

      current = parseInt(current);
      total = parseInt(total);

      if (current >= total) return total - 1;

      return current;
    },
  };

  if (!isActive(Functions.GetClassName())) return undefined;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          className="w-full"
          type="range"
          min={0}
          max={divisions.length - 1}
          value={Functions.GetTotalDivision()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateClassName(
              updateClassName(
                Functions.GetSelectedDivisions(divisions[parseInt(e.target.value)]),
                divisions[parseInt(e.target.value)]
              )
            );
          }}
        />
        <span className="text-blue-800">
          {divisions[Functions.GetTotalDivision()]}
        </span>
      </div>
      <div className="flex gap-2">
        <input
          className="w-full"
          type="range"
          min={1}
          max={parseInt(divisions[Functions.GetTotalDivision()]) - 1}
          value={Functions.GetSelectedDivisions()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateClassName(
              updateClassName(
                e.target.value,
                divisions[Functions.GetTotalDivision()]
              )
            );
          }}
        />
        <span className="text-blue-800">
          {Functions.GetSelectedDivisions()}
        </span>
      </div>
    </div>
  );
};

export default PercentValueControlComponent;
