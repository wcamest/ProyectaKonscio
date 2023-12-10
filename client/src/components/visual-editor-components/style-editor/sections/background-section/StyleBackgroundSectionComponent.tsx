import { Screen } from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument from "@/types/page-document/PageDocument";
import React from "react";
import StyleSectionComponent from "../../style-section/StyleSectionComponent";
import StylePropertyComponent from "../../style-property/StylePropertyComponent";
import ColorValueControlComponent from "../../color-value-control/ColorValueControlComponent";

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
    </StyleSectionComponent>
  );
};

export default StyleBackgroundSectionComponent;
