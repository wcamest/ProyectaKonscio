import React, { PropsWithChildren } from "react";
import ElementSelectorSectionComponent from "../element-selector-section/ElementSelectorSectionComponent";
import ElementSelectorItemComponent from "../element-selector-item/ElementSelectorItemComponent";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, showModal } from "@/redux/features/modals/modalsSlice";
import PageDocumentRichTextElement from "@/types/page-document/PageDocumentRichTextElement";
import generateId from "@/utils/Utils";
import {
  addNode,
  setCurrentEditNode,
} from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocumentImageElement from "@/types/page-document/PageDocumentImageElement";
import Styles from "../styles/styles";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";
import PageDocumentContainerElement from "@/types/page-document/PageDocumentContainerElement";
import PageDocumentSimpleTextElement from "@/types/page-document/PageDocumentSimpleTextElement";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentCarouselComponent from "@/types/page-document/PageDocumentCarouselComponent";
import PageDocumentCarouselPageComponent from "@/types/page-document/PageDocumentCarouselPageComponent";
import PageDocumentFlipBoxComponent from "@/types/page-document/PageDocumentFlipBoxComponent";
import PageDocumentFlipBoxFrontSideComponent from "@/types/page-document/PageDocumentFlipBoxFrontSIdeComponent";
import PageDocumentFlipBoxBackSideComponent from "@/types/page-document/PageDocumentFlipBoxBackSIdeComponent";

type Props = {};

const ElementSelectorComponent = (props: Props) => {
  const { currentDocument } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetSelectedNodeType() {
      if (!currentDocument) return "";

      const node = currentDocument.nodes.find(
        (node: PageDocumentNode) => node.id === currentDocument.selectedNode
      );

      if (!node) return "";

      return node.type;
    },
    HideAddElementModal() {
      dispatch(hideModal("add-element-modal"));
    },
    AddRichText() {
      const richTextElement: PageDocumentRichTextElement = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentRichTextElement",
        rawHTML: "",
        name: "Texto enriquecido",
        canEdit: true,
        canAddChild: false,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([richTextElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(richTextElement.id));
      dispatch(showModal("rich-text-element-editor-modal"));
    },
    AddSimpleText() {
      const richTextElement: PageDocumentSimpleTextElement = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentSimpleTextElement",
        name: "Texto simple",
        text: "",
        elementType: "span",
        canEdit: true,
        canAddChild: false,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([richTextElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(richTextElement.id));
      dispatch(showModal("simple-text-element-editor-modal"));
    },
    AddImage() {
      const imageElement: PageDocumentImageElement = {
        fill: false,
        id: generateId(),
        nodes: [],
        type: "PageDocumentImageElement",
        name: "Imagen",
        canEdit: true,
        canAddChild: false,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([imageElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(imageElement.id));
      dispatch(showModal("image-element-editor-modal"));
    },
    AddContainer() {
      const containerId = generateId();

      const containerElement: PageDocumentContainerElement = {
        id: containerId,
        nodes: [],
        type: "PageDocumentContainerElement",
        name: "Contenedor",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([containerElement]));

      Functions.HideAddElementModal();
    },
    AddCarousel() {
      const carouselComponent: PageDocumentCarouselComponent = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentCarouselComponent",
        name: "Carousel",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([carouselComponent]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(carouselComponent.id));
    },
    AddCarouselPage() {
      const carouselComponent: PageDocumentCarouselPageComponent = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentCarouselPageComponent",
        name: "Pagina de Carrusel",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([carouselComponent]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(carouselComponent.id));
    },
    AddFlipBox() {
      const flipBoxComponent: PageDocumentFlipBoxComponent = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentFlipBoxComponent",
        name: "Tarjeta Giratoria",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      flipBoxComponent.styles.base.width.enabled = true;
      flipBoxComponent.styles.base.width.className = "css-w-1/3";
      flipBoxComponent.styles.base.aspectRatio.enabled = true;
      flipBoxComponent.styles.base.aspectRatio.className = "css-aspect-square";

      dispatch(addNode([flipBoxComponent]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(flipBoxComponent.id));
    },
    AddFlipBoxFrontSide() {
      const flipBoxFrontSideComponent: PageDocumentFlipBoxFrontSideComponent = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentFlipBoxFrontSideComponent",
        name: "Lado Anterior",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      flipBoxFrontSideComponent.styles.base.width.enabled = true;
      flipBoxFrontSideComponent.styles.base.width.className = "css-w-full";
      flipBoxFrontSideComponent.styles.base.height.enabled = true;
      flipBoxFrontSideComponent.styles.base.height.className = "css-h-full";

      dispatch(addNode([flipBoxFrontSideComponent]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(flipBoxFrontSideComponent.id));
    },
    AddFlipBoxBackSide() {
      const flipBoxBackSideComponent: PageDocumentFlipBoxBackSideComponent = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentFlipBoxBackSideComponent",
        name: "Lado Posterior",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      flipBoxBackSideComponent.styles.base.width.enabled = true;
      flipBoxBackSideComponent.styles.base.width.className = "css-w-full";
      flipBoxBackSideComponent.styles.base.height.enabled = true;
      flipBoxBackSideComponent.styles.base.height.className = "css-h-full";

      dispatch(addNode([flipBoxBackSideComponent]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(flipBoxBackSideComponent.id));
    },
    GetFlipBoxSideContainer(type: string) {
      if (!currentDocument) return [];

      const node = currentDocument.nodes.find(
        (node: PageDocumentNode) => node.id === currentDocument.selectedNode
      );

      if (!node) return [];

      if (node.type !== "PageDocumentFlipBoxComponent") return [];

      const alreadyHasSide = node.nodes.some((nodeId: string) => {
        const flipBoxSubNode = currentDocument.nodes.find(
          (_node: PageDocumentNode) => _node.id === nodeId
        );

        if (!flipBoxSubNode) return false;

        return flipBoxSubNode.type === type;
      });

      if (!alreadyHasSide) return ["PageDocumentFlipBoxComponent"];

      return [];
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <ElementSelectorSectionComponent
        title="Contenedores"
        containers={[
          "PageDocumentContainerElement",
          "PageDocumentCarouselPageComponent",
          "PageDocumentFlipBoxFrontSideComponent",
          "PageDocumentFlipBoxBackSideComponent",
        ]}
        selectedNodeType={Functions.GetSelectedNodeType()}
      >
        <ElementSelectorItemComponent
          icon="/icons/layers-half.svg"
          text="Contenedor"
          onClick={() => {
            Functions.AddContainer();
          }}
        />
      </ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent
        title="Textos"
        containers={[
          "PageDocumentContainerElement",
          "PageDocumentCarouselPageComponent",
          "PageDocumentFlipBoxFrontSideComponent",
          "PageDocumentFlipBoxBackSideComponent",
        ]}
        selectedNodeType={Functions.GetSelectedNodeType()}
      >
        <ElementSelectorItemComponent
          icon="/icons/body-text.svg"
          text="Texto enriquecido"
          onClick={() => {
            Functions.AddRichText();
          }}
        />
        <ElementSelectorItemComponent
          icon="/icons/type.svg"
          text="Texto simple"
          onClick={() => {
            Functions.AddSimpleText();
          }}
        />
      </ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent
        title="Media"
        containers={[
          "PageDocumentContainerElement",
          "PageDocumentCarouselPageComponent",
          "PageDocumentFlipBoxFrontSideComponent",
          "PageDocumentFlipBoxBackSideComponent",
        ]}
        selectedNodeType={Functions.GetSelectedNodeType()}
      >
        <ElementSelectorItemComponent
          icon="/icons/card-image.svg"
          text="Imagen"
          onClick={() => {
            Functions.AddImage();
          }}
        />
        <ElementSelectorItemComponent icon="/icons/film.svg" text="Video" />
      </ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent
        title="Tablas"
        containers={[
          "PageDocumentContainerElement",
          "PageDocumentCarouselPageComponent",
          "PageDocumentFlipBoxFrontSideComponent",
          "PageDocumentFlipBoxBackSideComponent",
        ]}
        selectedNodeType={Functions.GetSelectedNodeType()}
      ></ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent
        title="Formularios"
        containers={[
          "PageDocumentContainerElement",
          "PageDocumentCarouselPageComponent",
          "PageDocumentFlipBoxFrontSideComponent",
          "PageDocumentFlipBoxBackSideComponent",
        ]}
        selectedNodeType={Functions.GetSelectedNodeType()}
      ></ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent
        title="Componentes"
        containers={[
          "PageDocumentContainerElement",
          "PageDocumentCarouselComponent",
          "PageDocumentFlipBoxComponent",
          "PageDocumentFlipBoxFrontSideComponent",
          "PageDocumentFlipBoxBackSideComponent",
        ]}
        selectedNodeType={Functions.GetSelectedNodeType()}
      >
        <ElementSelectorItemComponent
          icon="/icons/carousel.svg"
          text="Carrusel"
          containers={["PageDocumentContainerElement"]}
          selectedNodeType={Functions.GetSelectedNodeType()}
          onClick={() => {
            Functions.AddCarousel();
          }}
        />
        <ElementSelectorItemComponent
          icon="/icons/carousel-page.svg"
          text="Pagina de Carrusel"
          containers={["PageDocumentCarouselComponent"]}
          selectedNodeType={Functions.GetSelectedNodeType()}
          onClick={() => {
            Functions.AddCarouselPage();
          }}
        />
        <ElementSelectorItemComponent
          icon="/icons/carousel.svg"
          text="Tarjeta Giratoria"
          containers={[
            "PageDocumentContainerElement",
            "PageDocumentCarouselComponent",
          ]}
          selectedNodeType={Functions.GetSelectedNodeType()}
          onClick={() => {
            Functions.AddFlipBox();
          }}
        />
        <ElementSelectorItemComponent
          icon="/icons/carousel.svg"
          text="Tarjeta Giratoria - Lado Anterior"
          containers={Functions.GetFlipBoxSideContainer(
            "PageDocumentFlipBoxFrontSideComponent"
          )}
          selectedNodeType={Functions.GetSelectedNodeType()}
          onClick={() => {
            Functions.AddFlipBoxFrontSide();
          }}
        />
        <ElementSelectorItemComponent
          icon="/icons/carousel.svg"
          text="Tarjeta Giratoria - Lado Posterior"
          containers={Functions.GetFlipBoxSideContainer(
            "PageDocumentFlipBoxBackSideComponent"
          )}
          selectedNodeType={Functions.GetSelectedNodeType()}
          onClick={() => {
            Functions.AddFlipBoxBackSide();
          }}
        />
      </ElementSelectorSectionComponent>
    </div>
  );
};

export default ElementSelectorComponent;
