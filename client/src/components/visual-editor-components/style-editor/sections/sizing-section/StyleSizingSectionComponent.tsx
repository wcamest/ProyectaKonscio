import React from "react";
import PageDocument from "@/types/page-document/PageDocument";
import { Screen } from "@/redux/features/visual-editor/visualEditorSlice";
import StyleSectionComponent from "../../style-section/StyleSectionComponent";
import StylePropertyComponent from "../../style-property/StylePropertyComponent";
import PropertyButtonComponent from "../../property-button/PropertyButtonComponent";
import PixelValueControlComponent from "../../pixel-value-control/PixelValueControlComponent";
import PercentValueControlComponent from "../../percent-value-control/PercentValueControlComponent";

type Props = {
  currentStylesSectionTab: string;
  currentStyleEditNodeTab: string;
  currentScreen: Screen;
  document: PageDocument;
};

const StyleSizingSectionComponent = (props: Props) => {
  const {
    currentScreen,
    currentStyleEditNodeTab,
    currentStylesSectionTab,
    document,
  } = props;

  return (
    <StyleSectionComponent
      id="sizing"
      currentId={currentStylesSectionTab}
      title="Dimensiones"
    >
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Ancho"
        propertyName="width"
      >
        <div className="flex justify-between flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="width"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-w-px" ||
                  /^css-w-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={() => "css-w-0"}
          >
            PX
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="width"
            isActive={(className: string | undefined) => {
              if (className) return /^css-w-\d+\/\d+$/.test(className);
            }}
            updateClassName={() => "css-w-1/2"}
          >
            %
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="width"
            isActive={(className: string | undefined) => {
              return className === "css-w-screen";
            }}
            updateClassName={() => "css-w-screen"}
          >
            Screen
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="width"
            isActive={(className: string | undefined) => {
              return className === "css-w-full";
            }}
            updateClassName={() => "css-w-full"}
          >
            Full
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="width"
            isActive={(className: string | undefined) => {
              return className === "css-w-min";
            }}
            updateClassName={() => "css-w-min"}
          >
            Min
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="width"
            isActive={(className: string | undefined) => {
              return className === "css-w-max";
            }}
            updateClassName={() => "css-w-max"}
          >
            Max
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="width"
            isActive={(className: string | undefined) => {
              return className === "css-w-fit";
            }}
            updateClassName={() => "css-w-fit"}
          >
            Fit
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="width"
            isActive={(className: string | undefined) => {
              return className === "css-w-auto";
            }}
            updateClassName={() => "css-w-auto"}
          >
            Auto
          </PropertyButtonComponent>
        </div>
        <PixelValueControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName="width"
          isActive={(className: string | undefined) => {
            if (className)
              return (
                className === "css-w-px" || /^css-w-\d+\.?\d?$/.test(className)
              );
          }}
          updateClassName={(value: string) => {
            return `css-w-${value}`;
          }}
        />
        <PercentValueControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName="width"
          divisions={["2", "3", "4", "5", "6", "12"]}
          isActive={(className: string | undefined) => {
            if (className) return /^css-w-\d+\/\d+$/.test(className);
          }}
          updateClassName={(divisionCount: string, totalDivision: string) => {
            console.log(divisionCount, totalDivision);
            return `css-w-${divisionCount}/${totalDivision}`;
          }}
        />
      </StylePropertyComponent>

      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Alto"
        propertyName="height"
      >
        <div className="flex justify-between flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="height"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-h-px" ||
                  /^css-h-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={() => "css-h-0"}
          >
            PX
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="height"
            isActive={(className: string | undefined) => {
              if (className) return /^css-h-\d+\/\d+$/.test(className);
            }}
            updateClassName={() => "css-h-1/2"}
          >
            %
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="height"
            isActive={(className: string | undefined) => {
              return className === "css-h-screen";
            }}
            updateClassName={() => "css-h-screen"}
          >
            Screen
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="height"
            isActive={(className: string | undefined) => {
              return className === "css-h-full";
            }}
            updateClassName={() => "css-h-full"}
          >
            Full
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="height"
            isActive={(className: string | undefined) => {
              return className === "css-h-min";
            }}
            updateClassName={() => "css-h-min"}
          >
            Min
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="height"
            isActive={(className: string | undefined) => {
              return className === "css-h-max";
            }}
            updateClassName={() => "css-h-max"}
          >
            Max
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="height"
            isActive={(className: string | undefined) => {
              return className === "css-h-fit";
            }}
            updateClassName={() => "css-h-fit"}
          >
            Fit
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="height"
            isActive={(className: string | undefined) => {
              return className === "css-h-auto";
            }}
            updateClassName={() => "css-h-auto"}
          >
            Auto
          </PropertyButtonComponent>
        </div>
        <PixelValueControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName="height"
          isActive={(className: string | undefined) => {
            if (className)
              return (
                className === "css-h-px" || /^css-h-\d+\.?\d?$/.test(className)
              );
          }}
          updateClassName={(value: string) => {
            return `css-h-${value}`;
          }}
        />
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Ancho Mínimo"
        propertyName="minWidth"
      />
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Alto Mínimo"
        propertyName="minHeight"
      />
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Ancho Máximo"
        propertyName="maxWidth"
      />
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Alto Máximo"
        propertyName="maxHeight"
      />
    </StyleSectionComponent>
  );
};

export default StyleSizingSectionComponent;
