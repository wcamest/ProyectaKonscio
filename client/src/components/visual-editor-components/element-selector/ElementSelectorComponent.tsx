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
import PageDocumentUserModalComponent from "@/types/page-document/PageDocumentUserModalComponent";
import PageDocumentButtonElement, {
  PageDocumentButtonElementAction,
} from "@/types/page-document/PageDocumentButtonElement";
import PageDocumentFormElement, {
  PageDocumentFormElementAction,
} from "@/types/page-document/PageDocumentFormElement";
import PageDocumentFieldsetElement from "@/types/page-document/PageDocumentFieldsetElement";
import PageDocumentSelectElement from "@/types/page-document/PageDocumentSelectElement";
import PageDocumentInputElement, {
  PageDocumentInputElementType,
} from "@/types/page-document/PageDocumentInputElement";
import PageDocumentTextAreaElement from "@/types/page-document/PageDocumentTextAreaElement";

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
    AddUserModal() {
      if (!currentDocument) return undefined;

      const userModalComponent: PageDocumentUserModalComponent = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentUserModalComponent",
        name: "Ventana Flotante",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
      };

      dispatch(addNode([userModalComponent]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(userModalComponent.id));
    },
    AddForm() {
      if (!currentDocument) return undefined;

      const formElement: PageDocumentFormElement = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentFormElement",
        name: "Formulario",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
        action: PageDocumentFormElementAction.None,
      };

      dispatch(addNode([formElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(formElement.id));
    },
    AddFieldset() {
      if (!currentDocument) return undefined;

      const fieldsetElement: PageDocumentFieldsetElement = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentFieldsetElement",
        name: "Grupo de campos",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
        label: "Grupo de campos",
      };

      Functions.ApplyDefaultBoxStyles(fieldsetElement);

      dispatch(addNode([fieldsetElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(fieldsetElement.id));
    },
    AddSelect() {
      if (!currentDocument) return undefined;

      const selectElement: PageDocumentSelectElement = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentSelectElement",
        name: "Lista de opciones",
        canEdit: true,
        canAddChild: false,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
        selectName: "Lista de opciones",
        selectValue: "",
        selectLabel: "Lista de opciones",
        selectOptions: [],
      };

      Functions.ApplyDefaultBoxStyles(selectElement);

      selectElement.styles.base.backgroundColor.enabled = true;
      selectElement.styles.base.backgroundColor.className = "css-bg-white";

      dispatch(addNode([selectElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(selectElement.id));
    },
    AddTextArea() {
      if (!currentDocument) return undefined;

      const textAreaElement: PageDocumentTextAreaElement = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentTextAreaElement",
        name: "Entrada de texto multilinea",
        canEdit: true,
        canAddChild: false,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
        textAreaName: "Entrada de texto multilinea",
        textAreaLabel: "Entrada de texto multilinea",
        textAreaValue: "",
        textAreaPlaceholder: "",
      };

      Functions.ApplyDefaultBoxStyles(textAreaElement);

      textAreaElement.styles.base.backgroundColor.enabled = true;
      textAreaElement.styles.base.backgroundColor.className = "css-bg-white";

      dispatch(addNode([textAreaElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(textAreaElement.id));
    },
    AddInput() {
      if (!currentDocument) return undefined;

      const inputElement: PageDocumentInputElement = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentInputElement",
        name: "Entrada de datos",
        canEdit: true,
        canAddChild: false,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
        inputChecked: false,
        inputName: "input",
        inputPlaceholder: "",
        inputType: PageDocumentInputElementType.Text,
        inputValue: "",
        inputLabel: "Entrada de datos",
      };

      Functions.ApplyDefaultBoxStyles(inputElement);

      dispatch(addNode([inputElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(inputElement.id));
    },
    AddButton() {
      if (!currentDocument) return undefined;

      const buttonElement: PageDocumentButtonElement = {
        id: generateId(),
        nodes: [],
        type: "PageDocumentButtonElement",
        name: "Botón",
        canEdit: true,
        canAddChild: true,
        canDelete: true,
        styles: Styles.CreateClassListCollection(),
        action: PageDocumentButtonElementAction.None,
      };

      //"css-rounded-tr-md css-rounded-bl-md css-rounded-br-md"

      buttonElement.styles.base = {
        ...buttonElement.styles.base,
        paddingTop: {
          enabled: true,
          className: "css-pt-2.5",
        },
        paddingRight: {
          enabled: true,
          className: "css-pt-5",
        },
        paddingBottom: {
          enabled: true,
          className: "css-pb-2.5",
        },
        paddingLeft: {
          enabled: true,
          className: "css-pl-5",
        },
        fontFamily: {
          enabled: true,
          className: "css-font-sans",
        },
        fontSize: {
          enabled: true,
          className: "css-text-base",
        },
        fontStyle: {
          enabled: true,
          className: "css-not-italic",
        },
        fontWeight: {
          enabled: true,
          className: "css-font-semibold",
        },
        textAlign: {
          enabled: true,
          className: "css-text-center",
        },
        textColor: {
          enabled: true,
          className: "css-text-white",
        },
        textDecoration: {
          enabled: true,
          className: "css-no-underline",
        },
        textDecorationColor: {
          enabled: true,
          className: "css-decoration-black",
        },
        textDecorationStyle: {
          enabled: true,
          className: "css-decoration-solid",
        },
        textDecorationThickness: {
          enabled: true,
          className: "css-decoration-auto",
        },
        textUnderlineOffset: {
          enabled: true,
          className: "css-underline-offset-auto",
        },
        textTransform: {
          enabled: true,
          className: "css-normal-case",
        },
        textOverflow: {
          enabled: true,
          className: "css-truncate",
        },
        whiteSpace: {
          enabled: true,
          className: "css-whitespace-normal",
        },
        backgroundColor: {
          enabled: true,
          className: "css-bg-sky-500",
        },
        borderTopLeftRadius: {
          enabled: true,
          className: "css-rounded-tl-md",
        },
        borderTopRightRadius: {
          enabled: true,
          className: "css-rounded-tr-md",
        },
        borderBottomLeftRadius: {
          enabled: true,
          className: "css-rounded-bl-md",
        },
        borderBottomRightRadius: {
          enabled: true,
          className: "css-rounded-br-md",
        },
      };

      dispatch(addNode([buttonElement]));

      Functions.HideAddElementModal();
      dispatch(setCurrentEditNode(buttonElement.id));
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
    GetUserModalContainer() {
      if (!currentDocument) return [];

      const node = currentDocument.nodes.find(
        (node: PageDocumentNode) => node.id === currentDocument.selectedNode
      );

      if (!node) return [];

      if (node.id === currentDocument.root)
        return ["PageDocumentContainerElement"];

      return [];
    },
    ApplyDefaultBoxStyles(node: PageDocumentNode) {
      node.styles.base.borderStyle.enabled = true;
      node.styles.base.borderStyle.className = "css-border-solid";

      node.styles.base.borderTopLeftRadius.enabled = true;
      node.styles.base.borderTopLeftRadius.className = "css-rounded-tl-md";

      node.styles.base.borderTopRightRadius.enabled = true;
      node.styles.base.borderTopRightRadius.className = "css-rounded-tr-md";

      node.styles.base.borderBottomLeftRadius.enabled = true;
      node.styles.base.borderBottomLeftRadius.className = "css-rounded-bl-md";

      node.styles.base.borderBottomRightRadius.enabled = true;
      node.styles.base.borderBottomRightRadius.className = "css-rounded-br-md";

      node.styles.base.borderTopWidth.enabled = true;
      node.styles.base.borderTopWidth.className = "css-border-t-1";

      node.styles.base.borderTopColor.enabled = true;
      node.styles.base.borderTopColor.className = "css-border-t-blue-300";

      node.styles.base.borderRightWidth.enabled = true;
      node.styles.base.borderRightWidth.className = "css-border-r-1";

      node.styles.base.borderRightColor.enabled = true;
      node.styles.base.borderRightColor.className = "css-border-r-blue-300";

      node.styles.base.borderBottomWidth.enabled = true;
      node.styles.base.borderBottomWidth.className = "css-border-b-1";

      node.styles.base.borderBottomColor.enabled = true;
      node.styles.base.borderBottomColor.className = "css-border-b-blue-300";

      node.styles.base.borderLeftWidth.enabled = true;
      node.styles.base.borderLeftWidth.className = "css-border-l-1";

      node.styles.base.borderLeftColor.enabled = true;
      node.styles.base.borderLeftColor.className = "css-border-l-blue-300";

      node.styles.base.paddingTop.enabled = true;
      node.styles.base.paddingTop.className = "css-pt-2.5";

      node.styles.base.paddingRight.enabled = true;
      node.styles.base.paddingRight.className = "css-pr-2.5";

      node.styles.base.paddingBottom.enabled = true;
      node.styles.base.paddingBottom.className = "css-pb-2.5";

      node.styles.base.paddingLeft.enabled = true;
      node.styles.base.paddingLeft.className = "css-pl-2.5";
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <ElementSelectorSectionComponent
        title="Contenedores"
        containers={[
          "PageDocumentContainerElement",
          "PageDocumentFormElement",
          "PageDocumentFieldsetElement",
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
          "PageDocumentButtonElement",
          "PageDocumentFormElement",
          "PageDocumentFieldsetElement",
          "PageDocumentCarouselPageComponent",
          "PageDocumentFlipBoxFrontSideComponent",
          "PageDocumentFlipBoxBackSideComponent",
        ]}
        selectedNodeType={Functions.GetSelectedNodeType()}
      >
        <ElementSelectorItemComponent
          icon="/icons/body-text.svg"
          text="Texto enriquecido"
          containers={[
            "PageDocumentContainerElement",
            "PageDocumentButtonElement",
            "PageDocumentCarouselPageComponent",
            "PageDocumentFlipBoxFrontSideComponent",
            "PageDocumentFlipBoxBackSideComponent",
          ]}
          selectedNodeType={Functions.GetSelectedNodeType()}
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
          "PageDocumentFormElement",
          "PageDocumentFieldsetElement",
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
          "PageDocumentFormElement",
          "PageDocumentFieldsetElement",
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
          "PageDocumentFormElement",
          "PageDocumentFieldsetElement",
          "PageDocumentCarouselPageComponent",
          "PageDocumentFlipBoxFrontSideComponent",
          "PageDocumentFlipBoxBackSideComponent",
        ]}
        selectedNodeType={Functions.GetSelectedNodeType()}
      >
        <ElementSelectorItemComponent
          text="Formulario"
          icon="/icons/form.svg"
          onClick={() => {
            Functions.AddForm();
          }}
        />
        <ElementSelectorItemComponent
          text="Grupo de campos"
          icon="/icons/fieldset.svg"
          onClick={() => {
            Functions.AddFieldset();
          }}
        />
        <ElementSelectorItemComponent
          text="Lista de opciones"
          icon="/icons/select.svg"
          onClick={() => {
            Functions.AddSelect();
          }}
        />
        <ElementSelectorItemComponent
          text="Entrada de texto multilinea"
          icon="/icons/textarea.svg"
          onClick={() => {
            Functions.AddTextArea();
          }}
        />
        <ElementSelectorItemComponent
          text="Entrada de datos"
          icon="/icons/inputs.svg"
          onClick={() => {
            Functions.AddInput();
          }}
        />
        <ElementSelectorItemComponent
          text="Botón"
          onClick={() => {
            Functions.AddButton();
          }}
        />
      </ElementSelectorSectionComponent>
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
        <ElementSelectorItemComponent
          icon="/icons/window-stack.svg"
          text="Ventana Flotante"
          containers={Functions.GetUserModalContainer()}
          selectedNodeType={Functions.GetSelectedNodeType()}
          onClick={() => {
            Functions.AddUserModal();
          }}
        ></ElementSelectorItemComponent>
      </ElementSelectorSectionComponent>
    </div>
  );
};

export default ElementSelectorComponent;
