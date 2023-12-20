import {
  Screen,
  updateNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument from "@/types/page-document/PageDocument";
import React from "react";
import StyleSectionComponent from "../../style-section/StyleSectionComponent";
import StylePropertyComponent from "../../style-property/StylePropertyComponent";
import ColorValueControlComponent from "../../color-value-control/ColorValueControlComponent";
import ImageFileInputComponent from "@/components/visual-editor-components/file-input/ImageFileInputComponent";
import { useDispatch } from "react-redux";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PropertyBoxComponent from "../../property-box/PropertyBoxComponent";
import PropertyButtonComponent from "../../property-button/PropertyButtonComponent";

type Props = {
  currentStylesSectionTab: string;
  currentStyleEditNodeTab: string;
  currentScreen: Screen;
  document: PageDocument;
};

const StyleBackgroundSectionComponent = (props: Props) => {
  const {
    currentScreen,
    currentStyleEditNodeTab,
    currentStylesSectionTab,
    document,
  } = props;
  const dispatch = useDispatch();

  const Functions = {
    GetBackgroundURL() {
      const node: any = document.nodes.find(
        (node: PageDocumentNode) => node.id === currentStyleEditNodeTab
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

      const screenName = screenProperties[currentScreen];
      const styles: any = node.styles;
      const currentScreenStyle = styles[screenName];

      console.log(currentScreenStyle);
      return currentScreenStyle.backgroundImage.className;
    },
    UpdateClassName(propertyName: string, value: string) {
      const node = document.nodes.find(
        (node: PageDocumentNode) => node.id === currentStyleEditNodeTab
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

      const screenName = screenProperties[currentScreen];
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
    <StyleSectionComponent
      id="background"
      currentId={currentStylesSectionTab}
      title="Fondo"
    >
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Color de fondo"
        properties={["backgroundColor"]}
      >
        <ColorValueControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          propertyName="backgroundColor"
          screen={currentScreen}
          updateClassName={(value: string) => {
            return `css-bg-${value}`;
          }}
        />
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Imagen de fondo"
        properties={["backgroundImage", "backgroundAttachment"]}
      >
        <PropertyBoxComponent title="Imagen:">
          <ImageFileInputComponent
            imageUrl={Functions.GetBackgroundURL()}
            fileName="Imagen de fondo"
            onChange={(data: any) => {
              Functions.UpdateClassName("backgroundImage", data.url);
            }}
          />
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Modo de adhesión:">
          <div className="flex gap-2 flex-wrap">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundAttachment"
              isActive={(className: string | undefined) => {
                return className === "css-bg-fixed";
              }}
              updateClassName={() => "css-bg-fixed"}
            >
              Fijo
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundAttachment"
              isActive={(className: string | undefined) => {
                return className === "css-bg-local";
              }}
              updateClassName={() => "css-bg-local"}
            >
              Local
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundAttachment"
              isActive={(className: string | undefined) => {
                return className === "css-bg-scroll";
              }}
              updateClassName={() => "css-bg-scroll"}
            >
              Scroll
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Modo de recorte:">
          <div className="flex gap-2 flex-wrap">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundClip"
              isActive={(className: string | undefined) => {
                return className === "css-bg-clip-border";
              }}
              updateClassName={() => "css-bg-clip-border"}
            >
              Borde
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundClip"
              isActive={(className: string | undefined) => {
                return className === "css-bg-clip-padding";
              }}
              updateClassName={() => "css-bg-clip-padding"}
            >
              Padding
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundClip"
              isActive={(className: string | undefined) => {
                return className === "css-bg-clip-content";
              }}
              updateClassName={() => "css-bg-clip-content"}
            >
              Contenido
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundClip"
              isActive={(className: string | undefined) => {
                return className === "css-bg-clip-text";
              }}
              updateClassName={() => "css-bg-clip-text"}
            >
              Texto
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Origen:">
          <div className="flex gap-2 flex-wrap">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundOrigin"
              isActive={(className: string | undefined) => {
                return className === "css-bg-origin-border";
              }}
              updateClassName={() => "css-bg-origin-border"}
            >
              Borde
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundOrigin"
              isActive={(className: string | undefined) => {
                return className === "css-bg-origin-padding";
              }}
              updateClassName={() => "css-bg-origin-padding"}
            >
              Padding
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundOrigin"
              isActive={(className: string | undefined) => {
                return className === "css-bg-origin-content";
              }}
              updateClassName={() => "css-bg-origin-content"}
            >
              Contenido
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Posición:">
          <div className="w-full grid grid-cols-3">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundPosition"
              isActive={(className: string | undefined) => {
                return className === "css-bg-left-top";
              }}
              updateClassName={() => "css-bg-left-top"}
            >
              Top Left
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundPosition"
              isActive={(className: string | undefined) => {
                return className === "css-bg-top";
              }}
              updateClassName={() => "css-bg-top"}
            >
              Top
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundPosition"
              isActive={(className: string | undefined) => {
                return className === "css-bg-right-top";
              }}
              updateClassName={() => "css-bg-right-top"}
            >
              Top Right
            </PropertyButtonComponent>
          </div>
          <div className="w-full grid grid-cols-3">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundPosition"
              isActive={(className: string | undefined) => {
                return className === "css-bg-left";
              }}
              updateClassName={() => "css-bg-left"}
            >
              Left
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundPosition"
              isActive={(className: string | undefined) => {
                return className === "css-bg-center";
              }}
              updateClassName={() => "css-bg-center"}
            >
              Center
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundPosition"
              isActive={(className: string | undefined) => {
                return className === "css-bg-right";
              }}
              updateClassName={() => "css-bg-right"}
            >
              Right
            </PropertyButtonComponent>
          </div>
          <div className="w-full grid grid-cols-3">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundPosition"
              isActive={(className: string | undefined) => {
                return className === "css-bg-left-bottom";
              }}
              updateClassName={() => "css-bg-left-bottom"}
            >
              Bottom Left
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundPosition"
              isActive={(className: string | undefined) => {
                return className === "css-bg-bottom";
              }}
              updateClassName={() => "css-bg-bottom"}
            >
              Bottom
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundPosition"
              isActive={(className: string | undefined) => {
                return className === "css-bg-right-bottom";
              }}
              updateClassName={() => "css-bg-right-bottom"}
            >
              Bottom Right
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Repetir:">
          <div className="flex gap-2 flex-wrap">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundRepeat"
              isActive={(className: string | undefined) => {
                return className === "css-bg-no-repeat";
              }}
              updateClassName={() => "css-bg-no-repeat"}
            >
              No Repetir
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundRepeat"
              isActive={(className: string | undefined) => {
                return className === "css-bg-repeat";
              }}
              updateClassName={() => "css-bg-repeat"}
            >
              Repetir
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundRepeat"
              isActive={(className: string | undefined) => {
                return className === "css-bg-repeat-x";
              }}
              updateClassName={() => "css-bg-repeat-x"}
            >
              Repetir X
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundRepeat"
              isActive={(className: string | undefined) => {
                return className === "css-bg-repeat-y";
              }}
              updateClassName={() => "css-bg-repeat-y"}
            >
              Repetir Y
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
        <PropertyBoxComponent title="Tamaño:">
          <div className="flex gap-2 flex-wrap">
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundSize"
              isActive={(className: string | undefined) => {
                return className === "css-bg-auto";
              }}
              updateClassName={() => "css-bg-auto"}
            >
              Auto
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundSize"
              isActive={(className: string | undefined) => {
                return className === "css-bg-cover";
              }}
              updateClassName={() => "css-bg-cover"}
            >
              Cubrir
            </PropertyButtonComponent>
            <PropertyButtonComponent
              document={document}
              nodeId={currentStyleEditNodeTab}
              screen={currentScreen}
              propertyName="backgroundSize"
              isActive={(className: string | undefined) => {
                return className === "css-bg-contain";
              }}
              updateClassName={() => "css-bg-contain"}
            >
              Contener
            </PropertyButtonComponent>
          </div>
        </PropertyBoxComponent>
      </StylePropertyComponent>
    </StyleSectionComponent>
  );
};

export default StyleBackgroundSectionComponent;
