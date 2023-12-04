import StylesClassListCollection from "./styles/StylesClassListCollection";

export default interface PageDocumentNode {
    id: string
    type: string,
    parent?: string;
    nodes: string[];
    styles: StylesClassListCollection
}