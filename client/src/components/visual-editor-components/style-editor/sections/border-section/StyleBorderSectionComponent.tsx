import { Screen } from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument from "@/types/page-document/PageDocument";
import React from "react";
import { useDispatch } from "react-redux";
import StyleSectionComponent from "../../style-section/StyleSectionComponent";
import StylePropertyComponent from "../../style-property/StylePropertyComponent";
import SliderControlComponent from "../../slider-control/SliderControlComponent";
import ColorValueControlComponent from "../../color-value-control/ColorValueControlComponent";
import PropertyButtonComponent from "../../property-button/PropertyButtonComponent";

type Props = {
  currentStylesSectionTab: string;
  currentStyleEditNodeTab: string;
  currentScreen: Screen;
  document: PageDocument;
};

const borderWidthValues: string[] = ["0", "1", "2", "4", "8"];
const borderRadiusValues: string[] = [
  "none",
  "base",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "full",
];

const StyleBorderSectionComponent = (props: Props) => {
  const {
    currentScreen,
    currentStyleEditNodeTab,
    currentStylesSectionTab,
    document,
  } = props;
  const dispatch = useDispatch();

  return (
    <StyleSectionComponent
      id="border"
      currentId={currentStylesSectionTab}
      title="Bordes"
    >
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Tipo de bordes"
        properties={["borderStyle"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="borderStyle"
            isActive={(className: string | undefined) =>
              className === "css-border-none"
            }
            updateClassName={() => "css-border-none"}
          >
            Ninguno
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="borderStyle"
            isActive={(className: string | undefined) =>
              className === "css-border-solid"
            }
            updateClassName={() => "css-border-solid"}
          >
            Solido
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="borderStyle"
            isActive={(className: string | undefined) =>
              className === "css-border-dashed"
            }
            updateClassName={() => "css-border-dashed"}
          >
            Lineas discontinuas
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="borderStyle"
            isActive={(className: string | undefined) =>
              className === "css-border-dotted"
            }
            updateClassName={() => "css-border-dotted"}
          >
            Puntos
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="borderStyle"
            isActive={(className: string | undefined) =>
              className === "css-border-double"
            }
            updateClassName={() => "css-border-double"}
          >
            Lineas dobles
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="borderStyle"
            isActive={(className: string | undefined) =>
              className === "css-border-hidden"
            }
            updateClassName={() => "css-border-hidden"}
          >
            Ocultar
          </PropertyButtonComponent>
        </div>
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Borde izquierdo"
        properties={["borderLeftWidth", "borderLeftColor"]}
      >
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">Grosor:</span>
          <SliderControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            labels={borderWidthValues}
            values={borderWidthValues}
            propertyName="borderLeftWidth"
            regExp={/^css-border-l-(\d+)$/}
            updateValue={(value: string) => {
              return `css-border-l-${value}`;
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">Color:</span>
          <ColorValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="borderLeftColor"
            updateClassName={(value: string) => {
              return `css-border-l-${value}`;
            }}
          />
        </div>
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Borde derecho"
        properties={["borderRightWidth", "borderRightColor"]}
      >
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">Grosor:</span>
          <SliderControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            labels={borderWidthValues}
            values={borderWidthValues}
            propertyName="borderRightWidth"
            regExp={/^css-border-r-(\d+)$/}
            updateValue={(value: string) => {
              return `css-border-r-${value}`;
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">Color:</span>
          <ColorValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="borderRightColor"
            updateClassName={(value: string) => {
              return `css-border-r-${value}`;
            }}
          />
        </div>
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Borde superior"
        properties={["borderTopWidth", "borderTopColor"]}
      >
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">Grosor:</span>
          <SliderControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            labels={borderWidthValues}
            values={borderWidthValues}
            propertyName="borderTopWidth"
            regExp={/^css-border-t-(\d+)$/}
            updateValue={(value: string) => {
              return `css-border-t-${value}`;
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">Color:</span>
          <ColorValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="borderTopColor"
            updateClassName={(value: string) => {
              return `css-border-t-${value}`;
            }}
          />
        </div>
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Borde inferior"
        properties={["borderBottomWidth", "borderBottomColor"]}
      >
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">Grosor:</span>
          <SliderControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            labels={borderWidthValues}
            values={borderWidthValues}
            propertyName="borderBottomWidth"
            regExp={/^css-border-b-(\d+)$/}
            updateValue={(value: string) => {
              return `css-border-b-${value}`;
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">Color:</span>
          <ColorValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="borderBottomColor"
            updateClassName={(value: string) => {
              return `css-border-b-${value}`;
            }}
          />
        </div>
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Bordes redondeados"
        properties={[
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ]}
      >
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">
            Esquina superior izquierda:
          </span>
          <SliderControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            labels={borderRadiusValues}
            values={borderRadiusValues}
            propertyName="borderTopLeftRadius"
            regExp={/^css-rounded-tl-(\w+)$/}
            updateValue={(value: string) => {
              return `css-rounded-tl-${value}`;
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">
            Esquina superior derecha:
          </span>
          <SliderControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            labels={borderRadiusValues}
            values={borderRadiusValues}
            propertyName="borderTopRightRadius"
            regExp={/^css-rounded-tr-(\w+)$/}
            updateValue={(value: string) => {
              return `css-rounded-tr-${value}`;
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">
            Esquina inferior izquierda:
          </span>
          <SliderControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            labels={borderRadiusValues}
            values={borderRadiusValues}
            propertyName="borderBottomLeftRadius"
            regExp={/^css-rounded-bl-(\w+)$/}
            updateValue={(value: string) => {
              return `css-rounded-bl-${value}`;
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-xs">
            Esquina inferior derecha:
          </span>
          <SliderControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            labels={borderRadiusValues}
            values={borderRadiusValues}
            propertyName="borderBottomRightRadius"
            regExp={/^css-rounded-br-(\w+)$/}
            updateValue={(value: string) => {
              return `css-rounded-br-${value}`;
            }}
          />
        </div>
      </StylePropertyComponent>
    </StyleSectionComponent>
  );
};

export default StyleBorderSectionComponent;
