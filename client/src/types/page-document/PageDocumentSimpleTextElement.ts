import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentSimpleTextElement
  extends PageDocumentNode {
  elementType: string;
  text: string;
}
