import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentInputElement extends PageDocumentNode {
  inputType: PageDocumentInputElementType;
  inputName: string,
  inputValue: string,
  inputLabel: string,
  inputChecked: boolean,
  inputPlaceholder: string
}

export enum PageDocumentInputElementType {
  Text = "text",
  Tel = "tel",
  Email = "email",
  Checkbox = "checkbox",
  Radio = "radio",
  Number = "number",
}
