import React from "react";
import SliderControlComponent from "../slider-control/SliderControlComponent";
import PageDocument from "@/types/page-document/PageDocument";
import {
  Screen,
  updateNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import StylesProperty from "@/types/page-document/styles/StylesProperty";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { useDispatch } from "react-redux";

type Props = {
  screen: Screen;
  document: PageDocument;
  nodeId: string;
  propertyName: string;
  updateClassName: Function;
};

const ColorValueControlComponent = (props: Props) => {
  const { screen, document, nodeId, propertyName, updateClassName } = props;
  const fixedColors = ["black", "white"];
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
    IsFixedColor() {
      const className = Functions.GetClassName();

      if (!className) return true;

      return fixedColors.some((color: string) => {
        return className.includes(color);
      });
    },
    GetColorName() {
      const colorNameRegExp = /^.+\-([a-zA-Z]+)(\-\d+)?$/;
      const className = Functions.GetClassName();
      if (!className) return undefined;
      const matches = className.match(colorNameRegExp);

      if (!matches) return undefined;

      const colorName = matches[1];

      return colorName;
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
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-1">
        <div
          className={`${
            Functions.GetColorName() === "black" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-black cursor-pointer bg-black`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("black"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "white" ? "outline outline-2" : ""
          } w-4 h-4 border border-solid border-black hover:outline hover:outline-2 hover:outline-black cursor-pointer bg-white`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("white"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "slate" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-slate-500 cursor-pointer bg-slate-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("slate-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "gray" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-gray-500 cursor-pointer bg-gray-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("gray-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "zinc" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-zinc-500 cursor-pointer bg-zinc-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("zinc-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "neutral" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-neutral-500 cursor-pointer bg-neutral-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("neutral-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "stone" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-stone-500 cursor-pointer bg-stone-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("stone-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "red" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-red-500 cursor-pointer bg-red-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("red-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "orange" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-orange-500 cursor-pointer bg-orange-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("orange-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "amber" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-amber-500 cursor-pointer bg-amber-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("amber-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "yellow" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-yellow-500 cursor-pointer bg-yellow-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("yellow-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "lime" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-lime-500 cursor-pointer bg-lime-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("lime-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "green" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-green-500 cursor-pointer bg-green-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("green-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "emerald" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-emerald-500 cursor-pointer bg-emerald-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("emerald-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "teal" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-teal-500 cursor-pointer bg-teal-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("teal-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "cyan" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-cyan-500 cursor-pointer bg-cyan-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("cyan-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "sky" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-sky-500 cursor-pointer bg-sky-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("sky-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "blue" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-blue-500 cursor-pointer bg-blue-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("blue-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "indigo" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-indigo-500 cursor-pointer bg-indigo-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("indigo-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "violet" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-violet-500 cursor-pointer bg-violet-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("violet-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "purple" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-purple-500 cursor-pointer bg-purple-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("purple-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "fuchsia" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-fuchsia-500 cursor-pointer bg-fuchsia-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("fuchsia-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "pink" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-pink-500 cursor-pointer bg-pink-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("pink-500"));
          }}
        ></div>
        <div
          className={`${
            Functions.GetColorName() === "rose" ? "outline" : ""
          } w-4 h-4 hover:outline hover:outline-rose-500 cursor-pointer bg-rose-500`}
          onClick={() => {
            Functions.UpdateClassName(updateClassName("rose-500"));
          }}
        ></div>
      </div>
      {!Functions.IsFixedColor() && (
        <SliderControlComponent
          document={document}
          nodeId={nodeId}
          propertyName={propertyName}
          screen={screen}
          updateValue={(value: string) => {
            const colorName = Functions.GetColorName();

            if (!colorName) return undefined;

            return updateClassName(`${colorName}-${value}`);
          }}
          labels={[
            "50",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
            "950",
          ]}
          values={[
            "50",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
            "950",
          ]}
          regExp={/^[^\d]+(\d+)$/}
        />
      )}
    </div>
  );
};

export default ColorValueControlComponent;
