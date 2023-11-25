import WCSSProperty from "./WCSSProperty";
import { WCSSSizeType } from "./WCSSSizeType";

export default interface WCSSWidthProperty extends WCSSProperty {
  type: WCSSSizeType;
  percentDivisionsIndex: number;
  percentValueIndex: number
}

