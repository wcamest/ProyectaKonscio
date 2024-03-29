import { Screen } from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument from "@/types/page-document/PageDocument";
import React from "react";
import StyleSectionComponent from "../../style-section/StyleSectionComponent";
import StylePropertyComponent from "../../style-property/StylePropertyComponent";
import PropertyButtonComponent from "../../property-button/PropertyButtonComponent";
import StylePropertyButtonObject, {
  StylePropertyButtonContentType,
} from "@/types/page-document/styles/StylePropertyButtonObject";
import SliderControlComponent from "../../slider-control/SliderControlComponent";

type Props = {
  currentStylesSectionTab: string;
  currentStyleEditNodeTab: string;
  currentScreen: Screen;
  document: PageDocument;
};

const aspectRatioPropertyButtons: StylePropertyButtonObject[] = [
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Static",
    defaultClassName: "css-aspect-auto",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Square",
    defaultClassName: "css-aspect-square",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Video",
    defaultClassName: "css-aspect-video",
  },
]

const positionPropertyButtons: StylePropertyButtonObject[] = [
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Auto",
    defaultClassName: "css-static",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Fixed",
    defaultClassName: "css-fixed",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Absolute",
    defaultClassName: "css-absolute",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Relative",
    defaultClassName: "css-relative",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Sticky",
    defaultClassName: "css-sticky",
  },
];

const displayPropertyButtons: StylePropertyButtonObject[] = [
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Block",
    defaultClassName: "css-block",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Inline Block",
    defaultClassName: "css-inline-block",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Flex",
    defaultClassName: "css-flex",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Inline Flex",
    defaultClassName: "css-inline-flex",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Grid",
    defaultClassName: "css-grid",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Hidden",
    defaultClassName: "css-hidden",
  },
];

const objectFitPropertyButtons: StylePropertyButtonObject[] = [
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Contain",
    defaultClassName: "css-object-contain",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Cover",
    defaultClassName: "css-object-cover",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Fill",
    defaultClassName: "css-object-fill",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "None",
    defaultClassName: "css-object-none",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Scale Down",
    defaultClassName: "css-object-scale-down",
  },
];

const visibilityPropertyButtons: StylePropertyButtonObject[] = [
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Visible",
    defaultClassName: "css-visible",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Invisible",
    defaultClassName: "css-invisible",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Collapse",
    defaultClassName: "css-collapse",
  },
];

const overflowPropertyButtons: StylePropertyButtonObject[] = [
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Auto",
    defaultClassName: "css-overflow-auto",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Ocultar",
    defaultClassName: "css-overflow-hidden",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Clip",
    defaultClassName: "css-overflow-clip",
  },{
    contentType: StylePropertyButtonContentType.text,
    content: "Visible",
    defaultClassName: "css-overflow-visible",
  },
  {
    contentType: StylePropertyButtonContentType.text,
    content: "Scroll",
    defaultClassName: "css-overflow-scroll",
  },
]

const StyleLayoutSectionComponent = (props: Props) => {
  const {
    currentScreen,
    currentStyleEditNodeTab,
    currentStylesSectionTab,
    document,
  } = props;

  const Renderer = {
    PropertyButtons(
      propertyName: string,
      buttonsData: StylePropertyButtonObject[]
    ) {
      return (
        <div className="flex gap-2 flex-wrap">
          {buttonsData.map((data: StylePropertyButtonObject, key: number) => {
            return (
              <PropertyButtonComponent
                key={key}
                document={document}
                nodeId={currentStyleEditNodeTab}
                screen={currentScreen}
                propertyName={propertyName}
                isActive={(className: string | undefined) => {
                  return className === data.defaultClassName;
                }}
                updateClassName={() =>
                  data.updateClassName
                    ? data.updateClassName
                    : data.defaultClassName
                }
              >
                {data.content}
              </PropertyButtonComponent>
            );
          })}
        </div>
      );
    },
  };

  return (
    <StyleSectionComponent
      id="layout"
      currentId={currentStylesSectionTab}
      title="Layout"
    >
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Relación-Aspecto"
        properties={["aspectRatio"]}
      >
        {Renderer.PropertyButtons("aspectRatio", aspectRatioPropertyButtons)}
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Posición"
        properties={["position"]}
      >
        {Renderer.PropertyButtons("position", positionPropertyButtons)}
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Display"
        properties={["display"]}
      >
        {Renderer.PropertyButtons("display", displayPropertyButtons)}
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Object Fit"
        properties={["objectFit"]}
      >
        {Renderer.PropertyButtons("objectFit", objectFitPropertyButtons)}
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Visibilidad"
        properties={["visibility"]}
      >
        {Renderer.PropertyButtons("visibility", visibilityPropertyButtons)}
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Superposición de elemento"
        properties={["zIndex"]}
      >
        <SliderControlComponent
          document={document}
          nodeId={currentStyleEditNodeTab}
          screen={currentScreen}
          propertyName="zIndex"
          labels={["0", "10", "20", "30", "50", "auto"]}
          values={["0", "10", "20", "30", "50", "auto"]}
          regExp={/^css-z-(\w+)$/}
          updateValue={(value: string) => {
            return `css-z-${value}`;
          }}
        />
      </StylePropertyComponent>
      <StylePropertyComponent
        document={document}
        nodeId={currentStyleEditNodeTab}
        screen={currentScreen}
        title="Overflow"
        properties={["overflow"]}
      >
        {Renderer.PropertyButtons("overflow", overflowPropertyButtons)}
      </StylePropertyComponent>
    </StyleSectionComponent>
  );
};

export default StyleLayoutSectionComponent;
