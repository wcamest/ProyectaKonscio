export default interface StylePropertyButtonObject {
  contentType: StylePropertyButtonContentType;
  content: string;
  defaultClassName: string;
  updateClassName?: string;
}

export enum StylePropertyButtonContentType {
    text,
    icon
}