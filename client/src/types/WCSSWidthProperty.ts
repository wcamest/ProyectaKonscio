export default interface WCSSWidthProperty {
  type: WCSSWidthType;
  className: string;
  percentDivisionsIndex: number;
  percentValueIndex: number
}

export enum WCSSWidthType {
  none = "none",
  fixed = "fixed",
  auto = "auto",
  percent = "percent",
  min = "min",
  max = "max",
  screen = "screen",
  fit = "fit",
}
