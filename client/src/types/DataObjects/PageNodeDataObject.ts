export default interface PageNodeDataObject {
  id: string;
  name: string;
  type: string;
  classList: string[];
  children: string[];
  properties: any;
  parentId?: string;
}
