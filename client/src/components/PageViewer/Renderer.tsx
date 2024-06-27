import PageDataObject from "@/types/DataObjects/PageDataObject";
import PageNodeDataObject from "@/types/DataObjects/PageNodeDataObject";
import MainElementComponent from "./Nodes/MainElement/MainElementComponent";
import SectionElementComponent from "./Nodes/SectionElement/SectionElementComponent";
import VideoElementComponent from "./Nodes/VideoElement/VideoElementComponent";
import SourceElementComponent from "./Nodes/SourceElement/SourceElementComponent";
import DivElementComponent from "./Nodes/DivElement/DivElementComponent";
import PageNode from "@/types/Classes/PageNode";
import Page from "@/types/Classes/Page";
import TextElementComponent from "./Nodes/TextElement/TextElementComponent";
import SpanElementComponent from "./Nodes/SpanElement/SpanElementComponent";
import H1ElementComponent from "./Nodes/H1Element/H1ElementComponent";
import H2ElementComponent from "./Nodes/H2Element/H2ElementComponent";
import H3ElementComponent from "./Nodes/H3Element/H3ElementComponent";
import H4ElementComponent from "./Nodes/H4Element/H4ElementComponent";
import H5ElementComponent from "./Nodes/H5Element/H5ElementComponent";
import H6ElementComponent from "./Nodes/H6Element/H6ElementComponent";
import ImgElementComponent from "./Nodes/ImgElement/ImgElementComponent";
import PElementComponent from "./Nodes/PElement/PElementComponent";
import AccordionComponent from "./Nodes/AccordionComponent/AccordionComponent";
import AccordionItemComponent from "./Nodes/AccordionItemComponent/AccordionItemComponent";
import FlipBoxComponent from "./Nodes/FlipBoxComponent/FlipBoxComponent";

const NodeComponents: any = {
  MainElement: MainElementComponent,
  SectionElement: SectionElementComponent,
  VideoElement: VideoElementComponent,
  SourceElement: SourceElementComponent,
  DivElement: DivElementComponent,
  ImgElement: ImgElementComponent,
  TextElement: TextElementComponent,
  SpanElement: SpanElementComponent,
  PElement: PElementComponent,
  H1Element: H1ElementComponent,
  H2Element: H2ElementComponent,
  H3Element: H3ElementComponent,
  H4Element: H4ElementComponent,
  H5Element: H5ElementComponent,
  H6Element: H6ElementComponent,
  AccordionComponent,
  AccordionItemComponent,
  FlipBoxComponent
};

const NodesRenderer = {
  Render(
    node: PageNode,
    page: Page,
    breakpoint?: string,
    key?: number,
    inputPayload?: any,
    outputPayload?: any,
    selectedNodeId?: string
  ) {
    const NodeComponent = NodeComponents[node.Type()];

    if (!NodeComponent) return undefined;

    return (
      <NodeComponent
        key={key}
        node={node}
        page={page}
        breakpoint={breakpoint}
        inputPayload={inputPayload}
        outputPayload={outputPayload}
        selectedNodeId={selectedNodeId}
      />
    );
  },
};

export default NodesRenderer;
