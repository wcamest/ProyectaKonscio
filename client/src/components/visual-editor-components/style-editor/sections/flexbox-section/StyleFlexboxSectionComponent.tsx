import React from "react";
import StyleSectionComponent from "../../style-section/StyleSectionComponent";
import PageDocument from "@/types/page-document/PageDocument";
import { Screen } from "@/redux/features/visual-editor/visualEditorSlice";
import { useDispatch } from "react-redux";
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

const StyleFlexboxSectionComponent = (props: Props) => {
  const {
    currentScreen,
    currentStyleEditNodeTab,
    currentStylesSectionTab,
    document,
  } = props;
  const dispatch = useDispatch();

  return (
    <StyleSectionComponent
      id="flexbox"
      currentId={currentStylesSectionTab}
      title="CSS Flexbox"
    >
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Tamaño inicial"
        properties={["flexBasis"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexBasis"
            isActive={(className: string | undefined) => {
              if (className)
                return (
                  className === "css-basis-px" ||
                  /^css-basis-\d+\.?\d?$/.test(className)
                );
            }}
            updateClassName={() => "css-basis-0"}
          >
            PX
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexBasis"
            isActive={(className: string | undefined) => {
              if (className) return /^css-basis-\d+\/\d+$/.test(className);
            }}
            updateClassName={() => "css-basis-1/2"}
          >
            %
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexBasis"
            isActive={(className: string | undefined) => {
              return className === "css-basis-full";
            }}
            updateClassName={() => "css-basis-full"}
          >
            Full
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexBasis"
            isActive={(className: string | undefined) => {
              return className === "css-basis-auto";
            }}
            updateClassName={() => "css-basis-auto"}
          >
            Auto
          </PropertyButtonComponent>
        </div>
        <PixelValueControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName="flexBasis"
          isActive={(className: string | undefined) => {
            if (className)
              return (
                className === "css-basis-px" ||
                /^css-basis-\d+\.?\d?$/.test(className)
              );
          }}
          updateClassName={(value: string) => {
            return `css-basis-${value}`;
          }}
        />
        <PercentValueControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName="flexBasis"
          divisions={["2", "3", "4", "5", "6", "12"]}
          isActive={(className: string | undefined) => {
            if (className) return /^css-basis-\d+\/\d+$/.test(className);
          }}
          updateClassName={(divisionCount: string, totalDivision: string) => {
            console.log(divisionCount, totalDivision);
            return `css-basis-${divisionCount}/${totalDivision}`;
          }}
        />
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Flujo de los elementos"
        properties={["flexDirection"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexDirection"
            isActive={(className: string | undefined) => {
              return className === "css-flex-row";
            }}
            updateClassName={() => "css-flex-row"}
          >
            izquierda a derecha
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexDirection"
            isActive={(className: string | undefined) => {
              return className === "css-flex-row-reverse";
            }}
            updateClassName={() => "css-flex-row-reverse"}
          >
            derecha a izquierda
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexDirection"
            isActive={(className: string | undefined) => {
              return className === "css-flex-col";
            }}
            updateClassName={() => "css-flex-col"}
          >
            arriba a abajo
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexDirection"
            isActive={(className: string | undefined) => {
              return className === "css-flex-col-reverse";
            }}
            updateClassName={() => "css-flex-col-reverse"}
          >
            abajo a arriba
          </PropertyButtonComponent>
        </div>
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Wrap"
        properties={["flexWrap"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexWrap"
            isActive={(className: string | undefined) => {
              return className === "css-flex-nowrap";
            }}
            updateClassName={() => "css-flex-nowrap"}
          >
            No Wrap
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexWrap"
            isActive={(className: string | undefined) => {
              return className === "css-flex-wrap";
            }}
            updateClassName={() => "css-flex-wrap"}
          >
            Wrap
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="flexWrap"
            isActive={(className: string | undefined) => {
              return className === "css-flex-wrap-reverse";
            }}
            updateClassName={() => "css-flex-wrap-reverse"}
          >
            Wrap Reverse
          </PropertyButtonComponent>
        </div>
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Orden de los elementos"
        properties={["order"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="order"
            isActive={(className: string | undefined) => {
              return className === "css-order-none";
            }}
            updateClassName={() => "css-order-none"}
          >
            Ninguno
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="order"
            isActive={(className: string | undefined) => {
              if (className) return /^css-order-\d+$/.test(className);
            }}
            updateClassName={() => "css-order-1"}
          >
            Valor
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="order"
            isActive={(className: string | undefined) => {
              return className === "css-order-first";
            }}
            updateClassName={() => "css-order-first"}
          >
            Primero
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="order"
            isActive={(className: string | undefined) => {
              return className === "css-order-last";
            }}
            updateClassName={() => "css-order-last"}
          >
            Ultimo
          </PropertyButtonComponent>
        </div>
        <SliderControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName="order"
          isActive={(className: string | undefined) => {
            if (className) return /^css-order-\d+$/.test(className);
          }}
          regExp={/^css-order-(\d+)$/}
          updateValue={(value: string) => {
            return `css-order-${value}`;
          }}
          labels={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ]}
          values={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ]}
        />
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Distribución de los elementos"
        properties={["justifyContent"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="justifyContent"
            isActive={(className: string | undefined) => {
              return className === "css-justify-start";
            }}
            updateClassName={() => "css-justify-start"}
          >
            Inicio
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="justifyContent"
            isActive={(className: string | undefined) => {
              return className === "css-justify-center";
            }}
            updateClassName={() => "css-justify-center"}
          >
            Centro
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="justifyContent"
            isActive={(className: string | undefined) => {
              return className === "css-justify-end";
            }}
            updateClassName={() => "css-justify-end"}
          >
            Final
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="justifyContent"
            isActive={(className: string | undefined) => {
              return className === "css-justify-between";
            }}
            updateClassName={() => "css-justify-between"}
          >
            Between
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="justifyContent"
            isActive={(className: string | undefined) => {
              return className === "css-justify-around";
            }}
            updateClassName={() => "css-justify-around"}
          >
            Around
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="justifyContent"
            isActive={(className: string | undefined) => {
              return className === "css-justify-evenly";
            }}
            updateClassName={() => "css-justify-evenly"}
          >
            Evenly
          </PropertyButtonComponent>
        </div>
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Alineación de los elementos"
        properties={["alignItems"]}
      >
        <div className="flex gap-2 flex-wrap">
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="alignItems"
            isActive={(className: string | undefined) => {
              return className === "css-items-start";
            }}
            updateClassName={() => "css-items-start"}
          >
            Inicio
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="alignItems"
            isActive={(className: string | undefined) => {
              return className === "css-items-center";
            }}
            updateClassName={() => "css-items-center"}
          >
            Centro
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="alignItems"
            isActive={(className: string | undefined) => {
              return className === "css-items-end";
            }}
            updateClassName={() => "css-items-end"}
          >
            Final
          </PropertyButtonComponent>
          <PropertyButtonComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="alignItems"
            isActive={(className: string | undefined) => {
              return className === "css-items-stretch";
            }}
            updateClassName={() => "css-items-stretch"}
          >
            Stretch
          </PropertyButtonComponent>
        </div>
      </StylePropertyComponent>
    </StyleSectionComponent>
  );
};

export default StyleFlexboxSectionComponent;
