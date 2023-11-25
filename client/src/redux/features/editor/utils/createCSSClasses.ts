import WCSSClasses from "@/types/WCSSClasses";
import { WCSSMaxHeightType } from "@/types/WCSSMaxHeightType";
import { WCSSMaxWidthType } from "@/types/WCSSMaxWidthType";
import { WCSSMinHeightType } from "@/types/WCSSMinHeightType";
import { WCSSMinWidthType } from "@/types/WCSSMinWidthType";
import { WCSSSizeType } from "@/types/WCSSSizeType";

export default function CreateCSSClasses(): WCSSClasses {
  return {
    width: {
      type: WCSSSizeType.undefined,
      className: undefined,
      percentDivisionsIndex: 5,
      percentValueIndex: 12,
    },
    height: {
      type: WCSSSizeType.undefined,
      className: undefined,
      percentDivisionsIndex: 4,
      percentValueIndex: 6,
    },
    minWidth: {
      className: undefined,
      type: WCSSMinWidthType.undefined
    },
    minHeight: {
      className: undefined,
      type: WCSSMinHeightType.undefined
    },
    maxWidth: {
      className: undefined,
      type: WCSSMaxWidthType.undefined
    },
    maxHeight: {
      className: undefined,
      type: WCSSMaxHeightType.undefined
    }
  };
}
