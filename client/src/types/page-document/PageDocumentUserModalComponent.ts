import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentUserModalComponent extends PageDocumentNode {
    title: string,
    userModalId: string,
    fitWidthToContent: boolean,
    fitHeightToContent: boolean
}