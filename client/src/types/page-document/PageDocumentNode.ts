import StylesClassListCollection from "./styles/StylesClassListCollection";

export default interface PageDocumentNode {
    id: string
    type: string,
    name?: string,
    parent?: string;
    nodes: string[];
    root?: boolean;
    expanded?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canAddChild?: boolean;
    styles: StylesClassListCollection
}