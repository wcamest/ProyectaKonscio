import WCSSClassCollection from "./WCSSClassCollection";
import WHTMLElementProperty from "./WHTMLElementProperty";

export default interface WHTMLElement {
  id: string;
  parentId: string | undefined;
  tagName: string;
  children: string[];
  classes: WCSSClassCollection;
  properties: WHTMLElementProperty[];
  treeItemExpanded: boolean,
  treeItemTitle: string,
  treeItemTagLabel: string,
  cutMode: boolean,
  treeItemTextPreview?: string
}
