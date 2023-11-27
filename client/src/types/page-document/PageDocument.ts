import PageDocumentColumn from "./PageDocumentColumn";
import PageDocumentConfiguration from "./PageDocumentConfiguration";
import PageDocumentRow from "./PageDocumentRow";

export default interface PageDocument {
    configuration: PageDocumentConfiguration,
    rows: PageDocumentRow[],
    columns: PageDocumentColumn[],
}