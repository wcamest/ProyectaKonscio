import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocumentImageElement extends PageDocumentNode {
    fill: boolean,
    fileName?: string,
    width?: number,
    height?: number,
    description?: string,
    url?: string
}