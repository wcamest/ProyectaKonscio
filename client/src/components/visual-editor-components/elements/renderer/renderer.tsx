import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import ContainerElementComponent from "../container-element/ContainerElementComponent";
import SimpleTextElementComponent from "../simple-text-element/SimpleTextElementComponent";

const Components:any = {
    PageDocumentContainerElement: ContainerElementComponent,
    PageDocumentSimpleTextElement: SimpleTextElementComponent
}

const ElementRenderer = {
    Render(node:PageDocumentNode, document: PageDocument, key:number = 0){
        if(!Components[node.type]) return undefined;

        const Component = Components[node.type];

        return <Component key={key} data={node} document={document} />
    }
}

export default ElementRenderer;