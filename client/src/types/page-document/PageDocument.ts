import PageDocumentColumn from "./PageDocumentColumn";
import PageDocumentConfiguration from "./PageDocumentConfiguration";
import PageDocumentNode from "./PageDocumentNode";
import PageDocumentRow from "./PageDocumentRow";

export default interface PageDocument {
    configuration: PageDocumentConfiguration,
    rows: string[],
    nodes: PageDocumentNode[],
}