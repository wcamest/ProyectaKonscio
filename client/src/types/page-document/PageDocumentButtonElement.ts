import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentButtonElement extends PageDocumentNode {
  action: PageDocumentButtonElementAction;
  url?: string;
  userModalId?: string;
}

export enum PageDocumentButtonElementAction {
  None,
  OpenUrl,
  ShowUserModal,
  SendForm,
}
