import StylesClassList from "@/types/page-document/styles/StylesClassList";
import StylesClassListCollection from "@/types/page-document/styles/StylesClassListCollection";

const Styles = {
  CreateClassList(): StylesClassList {
    return {
      width: {
        enabled: false,
        className: "css-w-auto",
      },
      height: {
        enabled: false,
        className: "css-h-auto",
      },
      minWidth: {
        enabled: false,
        className: "css-min-w-0",
      },
      minHeight: {
        enabled: false,
        className: "css-min-h-0",
      },
      maxWidth: {
        enabled: false,
        className: "css-max-w-none",
      },
      maxHeight: {
        enabled: false,
        className: "css-max-h-none",
      },
      padding: {
        enabled: false,
        className: "css-p-0",
      },
      margin: {
        enabled: false,
        className: "css-m-0",
      },
      fontFamily: {
        enabled: false,
        className: "css-font-sans",
      },
      fontSize: {
        enabled: false,
        className: "css-text-base",
      },
      fontStyle: {
        enabled: false,
        className: "css-not-italic",
      },
      fontWeight: {
        enabled: false,
        className: "css-font-normal",
      },
      letterSpacing: {
        enabled: false,
        className: "css-tracking-normal",
      },
      lineHeight: {
        enabled: false,
        className: "css-leading-normal",
      },
      textAlign: {
        enabled: false,
        className: "css-text-left",
      },
      textColor: {
        enabled: false,
        className: "css-text-black",
      },
      textDecoration: {
        enabled: false,
        className: "css-no-underline",
      },
      textDecorationColor: {
        enabled: false,
        className: "css-decoration-black",
      },
      textDecorationStyle: {
        enabled: false,
        className: "css-decoration-solid",
      },
      textDecorationThickness: {
        enabled: false,
        className: "css-decoration-auto",
      },
      textOverflow: {
        enabled: false,
        className: "css-truncate",
      },
      textTransform: {
        enabled: false,
        className: "css-normal-case",
      },
      textUnderlineOffset: {
        enabled: false,
        className: "css-underline-offset-auto",
      },
      whiteSpace: {
        enabled: false,
        className: "css-whitespace-normal",
      },
      backgroundColor: {
        enabled: false,
        className: "css-background-white"
      }
    };
  },
  CreateClassListCollection(): StylesClassListCollection {
    return {
      base: Styles.CreateClassList(),
      sm: Styles.CreateClassList(),
      md: Styles.CreateClassList(),
      lg: Styles.CreateClassList(),
      xl: Styles.CreateClassList(),
      xl2: Styles.CreateClassList(),
    };
  },
};

export default Styles;
