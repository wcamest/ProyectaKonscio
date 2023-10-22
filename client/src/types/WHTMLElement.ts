export default interface WHTMLElement {
  id: string;
  tagName: string;
  children: string[];
  treeItemExpanded: boolean,
  treeItemTitle: string,
  treeItemTagLabel: string,
  treeItemTextPreview?: string
}
