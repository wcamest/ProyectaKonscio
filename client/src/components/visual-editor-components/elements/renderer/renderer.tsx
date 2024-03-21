import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import ContainerElementComponent from "../container-element/ContainerElementComponent";
import SimpleTextElementComponent from "../simple-text-element/SimpleTextElementComponent";
import ImageElementComponent from "../image-element/ImageElementComponent";
import RichTextElementComponent from "../rich-text-element/RichTextElementComponent";
import CarouselComponent from "../carousel-component/CarouselComponent";
import CarouselPageComponent from "../carousel-page-component/CarouselPageComponent";
import FlipBoxComponent from "../flip-box-component/FlipBoxComponent";
import FlipBoxSideComponent from "../flip-box-side-component/FlipBoxSideComponent";
import UserModalComponent from "../user-modal-component/UserModalComponent";
import ButtonElementComponent from "../button-element/ButtonElementComponent";
import FormElementComponent from "../form-element/FormElementComponent";
import FieldsetElementComponent from "../fieldset-element/FieldsetElementComponent";
import SelectElementComponent from "../select-element/SelectElementComponent";
import InputElementComponent from "../input-element/InputElementComponent";
import TextAreaElementComponent from "../textarea-element/TextAreaElementComponent";
import VideoPlaylistComponent from "../video-playlist-component/VideoPlaylistComponent";
import EnneagramComponent from "../enneagram-component/EnneagramComponent";
import CalendarComponent from "../calendar-component/CalendarComponent";
import BlogPostGridViewerComponent from "../blog-post-grid-viewer/BlogPostGridViewerComponent";
import Interactive3DSceneComponent from "../interactive-3d-scene-component/Interactive3DSceneComponent";
import Interactive3DAmbientLightComponent from "../interactive-3d-ambient-light/Interactive3DAmbientLightComponent";
import Interactive3DContainerComponent from "../interactive-3d-container-component/Interactive3DContainerComponent";
import Interactive3DModelComponent from "../interactive-3d-model-component/Interactive3DModelComponent";
import Interactive3DCameraComponent from "../interactive-3d-camera-component/Interactive3DCameraComponent";
import Interactive3DPointLightComponent from "../interactive-3d-point-light-component/Interactive3DPointLightComponent";

const Components: any = {
  PageDocumentContainerElement: ContainerElementComponent,
  PageDocumentSimpleTextElement: SimpleTextElementComponent,
  PageDocumentImageElement: ImageElementComponent,
  PageDocumentRichTextElement: RichTextElementComponent,
  PageDocumentFormElement: FormElementComponent,
  PageDocumentFieldsetElement: FieldsetElementComponent,
  PageDocumentButtonElement: ButtonElementComponent,
  PageDocumentCarouselComponent: CarouselComponent,
  PageDocumentCarouselPageComponent: CarouselPageComponent,
  PageDocumentFlipBoxComponent: FlipBoxComponent,
  PageDocumentFlipBoxFrontSideComponent: FlipBoxSideComponent,
  PageDocumentFlipBoxBackSideComponent: FlipBoxSideComponent,
  PageDocumentUserModalComponent: UserModalComponent,
  PageDocumentSelectElement: SelectElementComponent,
  PageDocumentInputElement: InputElementComponent,
  PageDocumentTextAreaElement: TextAreaElementComponent,
  PageDocumentVideoPlaylistComponent: VideoPlaylistComponent,
  PageDocumentEnneagramComponent: EnneagramComponent,
  PageDocumentCalendarComponent: CalendarComponent,
  PageDocumentBlogPostGridViewerComponent: BlogPostGridViewerComponent,
  PageDocumentInteractive3DSceneComponent: Interactive3DSceneComponent,
  PageDocument3DAmbientLightComponent: Interactive3DAmbientLightComponent,
  PageDocument3DContainerComponent: Interactive3DContainerComponent,
  PageDocument3DModelComponent: Interactive3DModelComponent,
  PageDocument3DCameraComponent: Interactive3DCameraComponent,
  PageDocument3DPointLightComponent: Interactive3DPointLightComponent
};

const ElementRenderer = {
  Render(node: PageDocumentNode, document: PageDocument, key: number = 0) {
    if (!Components[node.type]) {
      return undefined;
    }

    const Component = Components[node.type];

    return <Component key={key} data={node} document={document} />;
  },
};

export default ElementRenderer;
