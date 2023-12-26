import React from "react";
import PageDocument from "@/types/page-document/PageDocument";
import { Screen } from "@/redux/features/visual-editor/visualEditorSlice";
import StyleSectionComponent from "../../style-section/StyleSectionComponent";
import StylePropertyComponent from "../../style-property/StylePropertyComponent";
import PropertyButtonComponent from "../../property-button/PropertyButtonComponent";
import PixelValueControlComponent from "../../pixel-value-control/PixelValueControlComponent";
import PercentValueControlComponent from "../../percent-value-control/PercentValueControlComponent";
import SliderControlComponent from "../../slider-control/SliderControlComponent";

type Props = {
  currentStylesSectionTab: string;
  currentStyleEditNodeTab: string;
  currentScreen: Screen;
  document: PageDocument;
};

const maxWidthScreenSizeClasses: string[] = [
  "css-max-w-xs",
  "css-max-w-sm",
  "css-max-w-md",
  "css-max-w-lg",
  "css-max-w-xl",
  "css-max-w-2xl",
  "css-max-w-3xl",
  "css-max-w-4xl",
  "css-max-w-5xl",
  "css-max-w-6xl",
  "css-max-w-7xl",
];

const maxWidthScreenSize: string[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
];

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
        properties={["width"]}
      >
        <div className="flex gap-2 flex-wrap">
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
        properties={["height"]}
      >
        <div className="flex gap-2 flex-wrap">
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
        <PercentValueControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName="height"
          divisions={["2", "3", "4", "5", "6"]}
          isActive={(className: string | undefined) => {
            if (className) return /^css-h-\d+\/\d+$/.test(className);
          }}
          updateClassName={(divisionCount: string, totalDivision: string) => {
            console.log(divisionCount, totalDivision);
            return `css-h-${divisionCount}/${totalDivision}`;
          }}
        />
      </StylePropertyComponent>

      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Ancho Mínimo"
        properties={["minWidth"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minWidth"
            isActive={(className: string | undefined) =>
              className === "css-min-w-0"
            }
            updateClassName={() => "css-min-w-0"}
          >
            zero
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minWidth"
            isActive={(className: string | undefined) => {
              return className === "css-min-w-full";
            }}
            updateClassName={() => "css-min-w-full"}
          >
            Full
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minWidth"
            isActive={(className: string | undefined) => {
              return className === "css-min-w-min";
            }}
            updateClassName={() => "css-min-w-min"}
          >
            Min
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minWidth"
            isActive={(className: string | undefined) => {
              return className === "css-min-w-max";
            }}
            updateClassName={() => "css-min-w-max"}
          >
            Max
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minWidth"
            isActive={(className: string | undefined) => {
              return className === "css-min-w-fit";
            }}
            updateClassName={() => "css-min-w-fit"}
          >
            Fit
          </PropertyButtonComponent>
        </div>
      </StylePropertyComponent>

      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Alto Mínimo"
        properties={["minHeight"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minHeight"
            isActive={(className: string | undefined) =>
              className === "css-min-h-0"
            }
            updateClassName={() => "css-min-h-0"}
          >
            zero
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minHeight"
            isActive={(className: string | undefined) =>
              className === "css-min-h-screen"
            }
            updateClassName={() => "css-min-h-screen"}
          >
            Screen
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minHeight"
            isActive={(className: string | undefined) => {
              return className === "css-min-h-full";
            }}
            updateClassName={() => "css-min-h-full"}
          >
            Full
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minHeight"
            isActive={(className: string | undefined) => {
              return className === "css-min-h-min";
            }}
            updateClassName={() => "css-min-h-min"}
          >
            Min
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minHeight"
            isActive={(className: string | undefined) => {
              return className === "css-min-h-max";
            }}
            updateClassName={() => "css-min-h-max"}
          >
            Max
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="minHeight"
            isActive={(className: string | undefined) => {
              return className === "css-min-h-fit";
            }}
            updateClassName={() => "css-min-h-fit"}
          >
            Fit
          </PropertyButtonComponent>
        </div>
      </StylePropertyComponent>

      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Ancho Máximo"
        properties={["maxWidth"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxWidth"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-max-w-px" ||
                  /^css-max-w-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={() => "css-max-w-0"}
          >
            PX
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxWidth"
            isActive={(className: string | undefined) =>
              className === "css-max-w-none"
            }
            updateClassName={() => "css-max-w-none"}
          >
            None
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxWidth"
            isActive={(className: string | undefined) => {
              if (className) return maxWidthScreenSizeClasses.includes(className);
            }}
            updateClassName={() => "css-max-w-xs"}
          >
            Screen
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxWidth"
            isActive={(className: string | undefined) => {
              return className === "css-max-w-full";
            }}
            updateClassName={() => "css-max-w-full"}
          >
            Full
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxWidth"
            isActive={(className: string | undefined) => {
              return className === "css-max-w-min";
            }}
            updateClassName={() => "css-max-w-min"}
          >
            Min
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxWidth"
            isActive={(className: string | undefined) => {
              return className === "css-max-w-max";
            }}
            updateClassName={() => "css-max-w-max"}
          >
            Max
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxWidth"
            isActive={(className: string | undefined) => {
              return className === "css-max-w-fit";
            }}
            updateClassName={() => "css-max-w-fit"}
          >
            Fit
          </PropertyButtonComponent>
        </div>
        <PixelValueControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName="maxWidth"
          isActive={(className: string | undefined) => {
            if (className)
              return (
                className === "css-max-w-px" ||
                /^css-max-w-\d+\.?\d?$/.test(className)
              );
          }}
          updateClassName={(value: string) => {
            return `css-max-w-${value}`;
          }}
        />
        <SliderControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName={"maxWidth"}
          values={maxWidthScreenSize}
          labels={maxWidthScreenSize}
          regExp={/^css-max-w-(\w+)$/}
          isActive={(className: string | undefined) => {
            if (className) return maxWidthScreenSizeClasses.includes(className);
          }}
          updateValue={(value: string) => {
            return `css-max-w-${value}`;
          }}
        />
      </StylePropertyComponent>

      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Alto Máximo"
        properties={["maxHeight"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxHeight"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-max-h-px" ||
                  /^css-max-h-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={() => "css-max-h-0"}
          >
            PX
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxHeight"
            isActive={(className: string | undefined) => {
              return className === "css-max-h-screen";
            }}
            updateClassName={() => "css-max-h-screen"}
          >
            Screen
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxHeight"
            isActive={(className: string | undefined) => {
              return className === "css-max-h-full";
            }}
            updateClassName={() => "css-max-h-full"}
          >
            Full
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxHeight"
            isActive={(className: string | undefined) => {
              return className === "css-max-h-min";
            }}
            updateClassName={() => "css-max-h-min"}
          >
            Min
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxHeight"
            isActive={(className: string | undefined) => {
              return className === "css-max-h-max";
            }}
            updateClassName={() => "css-max-h-max"}
          >
            Max
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxHeight"
            isActive={(className: string | undefined) => {
              return className === "css-max-h-fit";
            }}
            updateClassName={() => "css-max-h-fit"}
          >
            Fit
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="maxHeight"
            isActive={(className: string | undefined) => {
              return className === "css-max-h-none";
            }}
            updateClassName={() => "css-max-h-none"}
          >
            None
          </PropertyButtonComponent>
        </div>
        <PixelValueControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName="maxHeight"
          isActive={(className: string | undefined) => {
            if (className)
              return (
                className === "css-max-h-px" ||
                /^css-max-h-\d+\.?\d?$/.test(className)
              );
          }}
          updateClassName={(value: string) => {
            return `css-max-h-${value}`;
          }}
        />
      </StylePropertyComponent>
    </StyleSectionComponent>
  );
};

export default StyleSizingSectionComponent;
