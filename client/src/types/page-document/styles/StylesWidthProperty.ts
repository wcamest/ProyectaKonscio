import StylesProperty from "./StylesProperty";
import { StylesSizeType } from "./StylesSizeType";

export default interface StylesWidthProperty extends StylesProperty {
  type: StylesSizeType;
  percentDivisionsIndex: number;
  percentValueIndex: number;
}
