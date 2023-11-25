import PageDocumentColumn from "./PageDocumentColumn";
import PageDocumentConfiguration from "./PageDocumentConfiguration";
import PageDocumentSection from "./PageDocumentSection";

export default interface PageDocument {
    configuration: PageDocumentConfiguration,
    sections: PageDocumentSection[],
    columns: PageDocumentColumn[],
}