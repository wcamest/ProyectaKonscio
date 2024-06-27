import PageMetaDataObject from "./PageMetaDataObject";
import PageNodeDataObject from "./PageNodeDataObject";
import PageStylesDataObject from "./PageStylesDataObject";

export default interface PageDataObject {
  id: string;
  rootNodeId: string;
  metadata: PageMetaDataObject;
  styles: PageStylesDataObject;
  nodes: any;
}
