import WCSSClasses from "@/types/WCSSClasses";
import { WCSSWidthType } from "@/types/WCSSWidthProperty";

export default function CreateCSSClasses(): WCSSClasses {
  return {
    width: {
      type: WCSSWidthType.none,
      className: "",
      percentDivisionsIndex: 5,
      percentValueIndex: 12,
    },
  };
}
