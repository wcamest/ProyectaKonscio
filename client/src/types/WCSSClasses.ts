import WCSSHeightProperty from "./WCSSHeightProperty";
import WCSSMaxHeightProperty from "./WCSSMaxHeightProperty";
import WCSSMaxWidthProperty from "./WCSSMaxWidthProperty";
import WCSSMinHeightProperty from "./WCSSMinHeightProperty";
import WCSSMinWidthProperty from "./WCSSMinWidthProperty";
import WCSSWidthProperty from "./WCSSWidthProperty";

export default interface WCSSClasses {
    width: WCSSWidthProperty,
    height: WCSSHeightProperty,
    minWidth: WCSSMinWidthProperty,
    minHeight: WCSSMinHeightProperty,
    maxWidth: WCSSMaxWidthProperty,
    maxHeight: WCSSMaxHeightProperty
}