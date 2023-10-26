export default interface WHTMLElement {
  id: string;
  parentId: string | undefined;
  tagName: string;
  children: string[];
  treeItemExpanded: boolean,
  treeItemTitle: string,
  treeItemTagLabel: string,
  cutMode: boolean,
  treeItemTextPreview?: string
}
