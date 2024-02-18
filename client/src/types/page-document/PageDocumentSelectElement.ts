import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentSelectElement extends PageDocumentNode {
  selectName: string,
  selectValue: string,
  selectLabel: string,
  selectOptions: string[];
}
