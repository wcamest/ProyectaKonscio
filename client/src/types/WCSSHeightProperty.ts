import WCSSProperty from "./WCSSProperty";
import { WCSSSizeType } from "./WCSSSizeType";

export default interface WCSSHeightProperty extends WCSSProperty {
  type: WCSSSizeType;
  percentDivisionsIndex: number;
  percentValueIndex: number
}