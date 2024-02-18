import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentTextAreaElement extends PageDocumentNode {
  textAreaName: string;
  textAreaValue: string;
  textAreaLabel: string;
  textAreaPlaceholder: string;
}
