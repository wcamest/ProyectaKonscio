import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { Screen } from "@/redux/features/visual-editor/visualEditorSlice";

export type ClassGeneratorResult = {
  property: string;
  className: string;
};

const ClassGenerator = {
  Generate(node: PageDocumentNode, screen: Screen) {
    const screenSises: string[] = ["2xl", "xl", "lg", "md", "sm", "base"];
    const stylesScreenSizes: any = {
      base: "base",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "xl2",
    };
    const indexOfCurrentScreen = screenSises.indexOf(screen);
    const classes: ClassGeneratorResult[] = [];

    for (let propertyName in node.styles.base) {
      const stylesAsAny: any = node.styles;

      for (let _it_ = indexOfCurrentScreen; _it_ < screenSises.length; _it_++) {
        const screenSize = screenSises[_it_];
        const property =
          stylesAsAny[stylesScreenSizes[screenSize]][propertyName];

        if (property.enabled) {
          classes.push({
            property: propertyName,
            className: property.className,
          });
          break;
        }
      }
    }

    return classes;
  },
};

export default ClassGenerator;
