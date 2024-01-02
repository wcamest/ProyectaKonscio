import BodyTextIcon from "@/components/Icons/BodyTextIcon";
import CardImageIcon from "@/components/Icons/CardImageIcon";
import LayersHalfIcon from "@/components/Icons/LayersHalfIcon";
import LayoutSidebarNestedIcon from "@/components/Icons/LayoutSidebarNestedIcon";
import { RootState } from "@/redux/store/store";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TabButtonComponent from "./tab-button/TabButtonComponent";
import CSSSectionSizingIcon from "@/components/Icons/CSSSectionSizingIcon";
import CSSSectionSpacingIcon from "@/components/Icons/CSSSectionSpacingIcon";
import CSSSectionLayoutIcon from "@/components/Icons/CSSSectionLayoutIcon";
import CSSSectionTextIcon from "@/components/Icons/CSSSectionTextIcon";
import CSSSectionBackgroundIcon from "@/components/Icons/CSSSectionBackgroundIcon";
import CSSSectionFlexboxIcon from "@/components/Icons/CSSSectionFlexboxIcon";
import CSSSectionGridIcon from "@/components/Icons/CSSSectionGridIcon";
import {
  setCurrentStyleEditNodeTab,
  setCurrentStyleSectionTab,
} from "@/redux/features/visual-editor/visualEditorSlice";
import StyleSectionComponent from "./style-section/StyleSectionComponent";
import StylePropertyComponent from "./style-property/StylePropertyComponent";
import StyleSizingSectionComponent from "./sections/sizing-section/StyleSizingSectionComponent";
import StyleTextAndFontsSectionComponent from "./sections/text-and-fonts-section/StyleTextAndFontsSectionComponent";
import StyleBackgroundSectionComponent from "./sections/background-section/StyleBackgroundSectionComponent";
import StyleLayoutSectionComponent from "./sections/layout-section/StyleLayoutSectionComponent";
import StyleFlexboxSectionComponent from "./sections/flexbox-section/StyleFlexboxSectionComponent";
import StyleSpacingSectionComponent from "./sections/spacing-section/StyleSpacingSectionComponent";
import CSSSectionBorderIcon from "@/components/Icons/CSSSectionBorderIcon";
import StyleBorderSectionComponent from "./sections/border-section/StyleBorderSectionComponent";

type Props = {
  styleEditNodeId: string;
  document: PageDocument;
};

const StyleEditor = (props: Props) => {
  const { styleEditNodeId, document } = props;
  const { currentStyleEditNodeTab, currentStylesSectionTab, currentScreen } =
    useSelector((state: RootState) => state.visualEditor);
  const dispatch = useDispatch();

  const Functions = {
    SelectCurrentSection(id: string) {
      dispatch(setCurrentStyleSectionTab(id));
    },
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden border-l border-l-solid border-l-blue-300">
      <div className="w-full h-full overflow-hidden flex">
        <div className="p-1 w-fit h-full flex flex-col border-r border-r-solid border-r-blue-300">
          <TabButtonComponent
            id="layout"
            selectedId={currentStylesSectionTab}
            onClick={Functions.SelectCurrentSection}
          >
            <CSSSectionLayoutIcon />
          </TabButtonComponent>
          <TabButtonComponent
            id="sizing"
            selectedId={currentStylesSectionTab}
            onClick={Functions.SelectCurrentSection}
          >
            <CSSSectionSizingIcon />
          </TabButtonComponent>
          <TabButtonComponent
            id="spacing"
            selectedId={currentStylesSectionTab}
            onClick={Functions.SelectCurrentSection}
          >
            <CSSSectionSpacingIcon />
          </TabButtonComponent>
          <TabButtonComponent
            id="text"
            selectedId={currentStylesSectionTab}
            onClick={Functions.SelectCurrentSection}
          >
            <CSSSectionTextIcon />
          </TabButtonComponent>
          <TabButtonComponent
            id="border"
            selectedId={currentStylesSectionTab}
            onClick={Functions.SelectCurrentSection}
          >
            <CSSSectionBorderIcon />
          </TabButtonComponent>
          <TabButtonComponent
            id="background"
            selectedId={currentStylesSectionTab}
            onClick={Functions.SelectCurrentSection}
          >
            <CSSSectionBackgroundIcon />
          </TabButtonComponent>
          <TabButtonComponent
            id="flexbox"
            selectedId={currentStylesSectionTab}
            onClick={Functions.SelectCurrentSection}
          >
            <CSSSectionFlexboxIcon />
          </TabButtonComponent>
          <TabButtonComponent
            id="grid"
            selectedId={currentStylesSectionTab}
            onClick={Functions.SelectCurrentSection}
          >
            <CSSSectionGridIcon />
          </TabButtonComponent>
        </div>
        <div className="w-full h-full overflow-hidden">
          <div className="p-2 w-full h-full overflow-auto">
            <StyleLayoutSectionComponent
              currentScreen={currentScreen}
              currentStyleEditNodeTab={styleEditNodeId}
              currentStylesSectionTab={currentStylesSectionTab}
              document={document}
            />
            <StyleSizingSectionComponent
              currentScreen={currentScreen}
              currentStyleEditNodeTab={styleEditNodeId}
              currentStylesSectionTab={currentStylesSectionTab}
              document={document}
            />
            <StyleSpacingSectionComponent
              currentScreen={currentScreen}
              currentStyleEditNodeTab={styleEditNodeId}
              currentStylesSectionTab={currentStylesSectionTab}
              document={document}
            />
            <StyleTextAndFontsSectionComponent
              currentScreen={currentScreen}
              currentStyleEditNodeTab={styleEditNodeId}
              currentStylesSectionTab={currentStylesSectionTab}
              document={document}
            />
            <StyleBorderSectionComponent
              currentScreen={currentScreen}
              currentStyleEditNodeTab={styleEditNodeId}
              currentStylesSectionTab={currentStylesSectionTab}
              document={document}
            />
            <StyleBackgroundSectionComponent
              currentScreen={currentScreen}
              currentStyleEditNodeTab={styleEditNodeId}
              currentStylesSectionTab={currentStylesSectionTab}
              document={document}
            />
            <StyleFlexboxSectionComponent
              currentScreen={currentScreen}
              currentStyleEditNodeTab={styleEditNodeId}
              currentStylesSectionTab={currentStylesSectionTab}
              document={document}
            />
            <StyleSectionComponent
              id="grid"
              currentId={currentStylesSectionTab}
              title="CSS Grid"
            ></StyleSectionComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleEditor;
