import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentFormElement extends PageDocumentNode {
  action: PageDocumentFormElementAction;
}

export enum PageDocumentFormElementAction {
  None,
  SendToEmail,
}
