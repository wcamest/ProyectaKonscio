import StylesClassList from "@/types/page-document/styles/StylesClassList";
import StylesClassListCollection from "@/types/page-document/styles/StylesClassListCollection";

const Styles = {
  CreateClassList(): StylesClassList {
    return {
      width: {
        enabled: false,
        className: "css-w-auto"
      },
      height: {
        enabled: false,
        className: "css-h-auto"
      },
      minWidth: {
        enabled: false,
        className: "css-min-w-0"
      },
      minHeight: {
        enabled: false,
        className: "css-min-h-0"
      },
      maxWidth: {
        enabled: false,
        className: "css-max-w-none"
      },
      maxHeight: {
        enabled: false,
        className: "css-max-h-none"
      },
    };
  },
  CreateClassListCollection(): StylesClassListCollection{
    return {
      base: Styles.CreateClassList(),
      sm: Styles.CreateClassList(),
      md: Styles.CreateClassList(),
      lg: Styles.CreateClassList(),
      xl: Styles.CreateClassList(),
      xl2: Styles.CreateClassList()
    }
  }
};

export default Styles;
