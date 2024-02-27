import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentButtonElement extends PageDocumentNode {
  action: PageDocumentButtonElementAction;
  urlToOpen?: string;
  userModalId?: string;
}

export enum PageDocumentButtonElementAction {
  None = "none",
  OpenUrl = "open_url",
  ShowUserModal = "show_user_modal",
  SendForm = "send_form",
}
