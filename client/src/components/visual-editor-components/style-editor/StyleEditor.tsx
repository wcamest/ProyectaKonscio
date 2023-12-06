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

type Props = {
  styleEditNodeId: string;
  document: PageDocument;
};

const StyleEditor = (props: Props) => {
  const { styleEditNodeId, document } = props;
  const {
    currentSectionLevel,
    currentStyleEditNodeTab,
    currentStylesSectionTab,
    currentScreen,
  } = useSelector((state: RootState) => state.visualEditor);
  const dispatch = useDispatch();

  const icons: any = {
    PageDocumentRow: LayersHalfIcon,
    PageDocumentColumn: LayoutSidebarNestedIcon,
    PageDocumentRichTextElement: BodyTextIcon,
    PageDocumentImageElement: CardImageIcon,
  };

  const Functions = {
    GetNodesFromAbove() {
      const nodesIds: string[] = [];

      const styleEditNode = document.nodes.find(
        (node: PageDocumentNode) => node.id === styleEditNodeId
      );

      if (styleEditNode && styleEditNode.nodes.length === 1) {
        const childNode = document.nodes.find(
          (node: PageDocumentNode) => node.id === styleEditNode.nodes[0]
        );

        const nodeTypes: string[] = [
          "PageDocumentRow",
          "PageDocumentFormElement",
        ];

        if (childNode && !nodeTypes.includes(childNode.type)) {
          nodesIds.push(childNode.id);
        }
      }

      let currentNodeId: string | undefined = styleEditNodeId;
      while (currentNodeId && currentNodeId !== currentSectionLevel) {
        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === currentNodeId
        );

        if (!node) break;

        nodesIds.push(node.id);

        currentNodeId = node.parent;
      }

      return nodesIds;
    },
    SelectCurrentElement(id: string) {
      dispatch(setCurrentStyleEditNodeTab(id));
    },
    SelectCurrentSection(id: string) {
      dispatch(setCurrentStyleSectionTab(id));
    },
  };

  const Renderer = {
    ElementsTab() {
      if (!currentStyleEditNodeTab) return;

      const nodesFromAbove = Functions.GetNodesFromAbove();

      return nodesFromAbove.map((nodeId: string, key: number) => {
        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === nodeId
        );

        if (node && icons[node.type]) {
          const IconComponent = icons[node.type];

          return (
            <TabButtonComponent
              key={key}
              id={node.id}
              selectedId={currentStyleEditNodeTab}
              onClick={Functions.SelectCurrentElement}
            >
              <IconComponent />
            </TabButtonComponent>
          );
        }
      });
    },
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden border-l border-l-solid border-l-blue-300">
      <div className="p-1 flex border-b border-b-solid border-b-blue-300">
        {Renderer.ElementsTab()}
      </div>
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
            <StyleSectionComponent
              id="layout"
              currentId={currentStylesSectionTab}
              title="Layout"
            ></StyleSectionComponent>
            {currentStyleEditNodeTab && (
              <StyleSizingSectionComponent
                currentScreen={currentScreen}
                currentStyleEditNodeTab={currentStyleEditNodeTab}
                currentStylesSectionTab={currentStylesSectionTab}
                document={document}
              />
            )}
            <StyleSectionComponent
              id="spacing"
              currentId={currentStylesSectionTab}
              title="Espaciados"
            ></StyleSectionComponent>
            <StyleSectionComponent
              id="text"
              currentId={currentStylesSectionTab}
              title="Textos y fuentes"
            ></StyleSectionComponent>
            <StyleSectionComponent
              id="background"
              currentId={currentStylesSectionTab}
              title="Fondo"
            ></StyleSectionComponent>
            <StyleSectionComponent
              id="flexbox"
              currentId={currentStylesSectionTab}
              title="CSS FlexBox"
            ></StyleSectionComponent>
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
