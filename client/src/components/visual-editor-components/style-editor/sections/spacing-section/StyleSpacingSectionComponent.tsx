import { Screen } from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument from "@/types/page-document/PageDocument";
import React from "react";
import { useDispatch } from "react-redux";
import StyleSectionComponent from "../../style-section/StyleSectionComponent";
import StylePropertyComponent from "../../style-property/StylePropertyComponent";
import PixelValueControlComponent from "../../pixel-value-control/PixelValueControlComponent";

type Props = {
  currentStylesSectionTab: string;
  currentStyleEditNodeTab: string;
  currentScreen: Screen;
  document: PageDocument;
};

const StyleSpacingSectionComponent = (props: Props) => {
  const {
    currentScreen,
    currentStyleEditNodeTab,
    currentStylesSectionTab,
    document,
  } = props;
  const dispatch = useDispatch();

  return (
    <StyleSectionComponent
      id="spacing"
      currentId={currentStylesSectionTab}
      title="Espaciados"
    >
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Relleno"
        properties={[
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
        ]}
      >
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">izquierdo:</span>
          <PixelValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="paddingLeft"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-pl-px" ||
                  /^css-pl-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={(value: string) => `css-pl-${value}`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">derecho:</span>
          <PixelValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="paddingRight"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-pr-px" ||
                  /^css-pr-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={(value: string) => `css-pr-${value}`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">superior:</span>
          <PixelValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="paddingTop"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-pt-px" ||
                  /^css-pt-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={(value: string) => `css-pt-${value}`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">inferior:</span>
          <PixelValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="paddingBottom"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-pb-px" ||
                  /^css-pb-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={(value: string) => `css-pb-${value}`}
          />
        </div>
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Margen"
        properties={[
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
        ]}
      >
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">izquierdo:</span>
          <PixelValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="marginLeft"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-ml-px" ||
                  /^css-ml-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={(value: string) => `css-ml-${value}`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">derecho:</span>
          <PixelValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="marginRight"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-mr-px" ||
                  /^css-mr-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={(value: string) => `css-mr-${value}`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">superior:</span>
          <PixelValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="marginTop"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-mt-px" ||
                  /^css-mt-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={(value: string) => `css-mt-${value}`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">inferior:</span>
          <PixelValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="marginBottom"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-mb-px" ||
                  /^css-mb-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={(value: string) => `css-mb-${value}`}
          />
        </div>
      </StylePropertyComponent>
    </StyleSectionComponent>
  );
};

export default StyleSpacingSectionComponent;
