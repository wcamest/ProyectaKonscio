import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentContainerElement from "@/types/page-document/PageDocumentContainerElement";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import ElementRenderer from "../renderer/renderer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import ClassGenerator, {
  ClassGeneratorResult,
} from "../class-generator/ClassGenerator";

type Props = {
  data: PageDocumentContainerElement;
  document: PageDocument;
};

const ContainerElementComponent = (props: Props) => {
  const { data, document } = props;
  const { currentScreen } = useSelector(
    (state: RootState) => state.visualEditor
  );

  const Functions = {
    GetClasses() {
      const classes = ClassGenerator.Generate(data, currentScreen);

      return classes
        .map((classResult: ClassGeneratorResult) => classResult.className)
        .join(" ");
    },
  };

  const Renderer = {
    Nodes() {
      return data.nodes.map((nodeId: string, key: number) => {
        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === nodeId
        );

        if (!node) return undefined;

        return ElementRenderer.Render(node, document, key);
      });
    },
  };

  return (
    <div id={`container-${data.id}`} className={Functions.GetClasses()}>
      {Renderer.Nodes()}
    </div>
  );
};

export default ContainerElementComponent;
