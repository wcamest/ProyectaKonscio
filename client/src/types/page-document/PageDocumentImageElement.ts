import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentImageElement extends PageDocumentNode {
    fileName?: string,
    width?: number,
    height?: number,
    description?: string,
    url?: string
}