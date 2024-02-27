import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentFormElement extends PageDocumentNode {
  action: PageDocumentFormElementAction;
  emailToSend?:string
}

export enum PageDocumentFormElementAction {
  None = "none",
  SendToEmail = "send_to_email",
}
