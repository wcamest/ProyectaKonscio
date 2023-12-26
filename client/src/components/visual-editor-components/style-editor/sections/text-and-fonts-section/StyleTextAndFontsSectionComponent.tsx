import React from "react";
import StyleSectionComponent from "../../style-section/StyleSectionComponent";
import PageDocument from "@/types/page-document/PageDocument";
import { Screen } from "@/redux/features/visual-editor/visualEditorSlice";
import StylePropertyComponent from "../../style-property/StylePropertyComponent";
import PropertyButtonComponent from "../../property-button/PropertyButtonComponent";
import SliderControlComponent from "../../slider-control/SliderControlComponent";
import TextAlignLeftIcon from "@/components/Icons/TextAlignLeftIcon";
import TextAlignCenterIcon from "@/components/Icons/TextAlignCenterIcon";
import TextAlignRightIcon from "@/components/Icons/TextAlignRightIcon";
import TextAlignJustifyIcon from "@/components/Icons/TextAlignJustifyIcon";
import TextDecorationNoUnderlineIcon from "@/components/Icons/TextDecorationNoUnderlineIcon";
import TextDecorationThroughIcon from "@/components/Icons/TextDecorationThroughIcon";
import TextDecorationOverlineIcon from "@/components/Icons/TextDecorationOverlineIcon";
import TextDecorationUnderlineIcon from "@/components/Icons/TextDecorationUnderlineIcon";
import PropertyBoxComponent from "../../property-box/PropertyBoxComponent";
import ColorValueControlComponent from "../../color-value-control/ColorValueControlComponent";

type Props = {
  currentStylesSectionTab: string;
  currentStyleEditNodeTab: string;
  currentScreen: Screen;
  document: PageDocument;
};

const StyleTextAndFontsSectionComponent = (props: Props) => {
  const {
    currentScreen,
    currentStyleEditNodeTab,
    currentStylesSectionTab,
    document,
  } = props;

  return (
    <StyleSectionComponent
      id="text"
      currentId={currentStylesSectionTab}
      title="Texto y fuente"
    >
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Fuente"
        properties={["fontFamily", "fontSize", "fontStyle", "fontWeight"]}
      >
        <PropertyBoxComponent title="Fuente:">
          <div className="flex gap-2 flex-wrap">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="fontFamily"
              isActive={(className: string | undefined) => {
                return className === "css-font-sans";
              }}
              updateClassName={() => "css-font-sans"}
            >
              Sans
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="fontFamily"
              isActive={(className: string | undefined) => {
                return className === "css-font-serif";
              }}
              updateClassName={() => "css-font-serif"}
            >
              Serif
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="fontFamily"
              isActive={(className: string | undefined) => {
                return className === "css-font-mono";
              }}
              updateClassName={() => "css-font-mono"}
            >
              Mono
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Tamaño de fuente:">
          <SliderControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="fontSize"
            updateValue={(value: string) => {
              return `css-text-${value}`;
            }}
            values={[
              "xs",
              "sm",
              "base",
              "lg",
              "xl",
              "2xl",
              "3xl",
              "4xl",
              "5xl",
              "6xl",
              "7xl",
              "8xl",
              "9xl",
            ]}
            labels={[
              "12px",
              "14px",
              "16px",
              "18px",
              "20px",
              "24px",
              "30px",
              "36px",
              "48px",
              "60px",
              "72px",
              "96px",
              "128px",
            ]}
            regExp={/^css-text-(\w+)$/}
          />
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Estilo de fuente:">
          <div className="flex gap-2 flex-wrap">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="fontStyle"
              isActive={(className: string | undefined) => {
                return className === "css-italic";
              }}
              updateClassName={() => "css-italic"}
            >
              Italic
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="fontStyle"
              isActive={(className: string | undefined) => {
                return className === "css-not-italic";
              }}
              updateClassName={() => "css-not-italic"}
            >
              Not Italic
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Peso de fuente:">
          <SliderControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="fontWeight"
            updateValue={(value: string) => {
              return `css-font-${value}`;
            }}
            values={[
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ]}
            labels={[
              "100",
              "200",
              "300",
              "400",
              "500",
              "600",
              "700",
              "800",
              "900",
            ]}
            regExp={/^css-font-(\w+)$/}
          />
        </PropertyBoxComponent>
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Texto"
        properties={[
          "textAlign",
          "textColor",
          "textDecoration",
          "textDecorationColor",
          "textDecorationStyle",
          "textDecorationThickness",
          "textUnderlineOffset",
          "textTransform",
          "textOverflow",
          "whiteSpace",
        ]}
      >
        <PropertyBoxComponent title="Alineación de texto:">
          <div className="flex gap-1 flex-wrap">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textAlign"
              isActive={(className: string | undefined) => {
                return className === "css-text-left";
              }}
              updateClassName={() => "css-text-left"}
            >
              <TextAlignLeftIcon />
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textAlign"
              isActive={(className: string | undefined) => {
                return className === "css-text-center";
              }}
              updateClassName={() => "css-text-center"}
            >
              <TextAlignCenterIcon />
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textAlign"
              isActive={(className: string | undefined) => {
                return className === "css-text-right";
              }}
              updateClassName={() => "css-text-right"}
            >
              <TextAlignRightIcon />
            </PropertyButtonComponent>

            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textAlign"
              isActive={(className: string | undefined) => {
                return className === "css-text-justify";
              }}
              updateClassName={() => "css-text-justify"}
            >
              <TextAlignJustifyIcon />
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Color:">
          <ColorValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="textColor"
            updateClassName={(value: string) => {
              return `css-text-${value}`;
            }}
          />
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Decoración:">
          <div className="flex gap-1 flex-wrap">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textDecoration"
              isActive={(className: string | undefined) => {
                return className === "css-underline";
              }}
              updateClassName={() => "css-underline"}
            >
              <TextDecorationUnderlineIcon />
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textDecoration"
              isActive={(className: string | undefined) => {
                return className === "css-overline";
              }}
              updateClassName={() => "css-overline"}
            >
              <TextDecorationOverlineIcon />
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textDecoration"
              isActive={(className: string | undefined) => {
                return className === "css-line-through";
              }}
              updateClassName={() => "css-line-through"}
            >
              <TextDecorationThroughIcon />
            </PropertyButtonComponent>

            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textDecoration"
              isActive={(className: string | undefined) => {
                return className === "css-no-underline";
              }}
              updateClassName={() => "css-no-underline"}
            >
              <TextDecorationNoUnderlineIcon />
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Color de decoración:">
          <ColorValueControlComponent
            document={document}
            nodeId={currentStyleEditNodeTab}
            screen={currentScreen}
            propertyName="textDecorationColor"
            updateClassName={(value: string) => {
              console.log(value);
              return `css-decoration-${value}`;
            }}
          />
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Transformación:">
          <div className="flex gap-1 flex-wrap">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textTransform"
              isActive={(className: string | undefined) => {
                return className === "css-uppercase";
              }}
              updateClassName={() => "css-uppercase"}
            >
              Uppercase
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textTransform"
              isActive={(className: string | undefined) => {
                return className === "css-lowercase";
              }}
              updateClassName={() => "css-lowercase"}
            >
              Lowercase
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textTransform"
              isActive={(className: string | undefined) => {
                return className === "css-capitalize";
              }}
              updateClassName={() => "css-capitalize"}
            >
              Capitalize
            </PropertyButtonComponent>

            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="textTransform"
              isActive={(className: string | undefined) => {
                return className === "css-normal-case";
              }}
              updateClassName={() => "css-normal-case"}
            >
              Normal case
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
      </StylePropertyComponent>
    </StyleSectionComponent>
  );
};

export default StyleTextAndFontsSectionComponent;
