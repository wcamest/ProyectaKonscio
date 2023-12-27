import StylesProperty from "./StylesProperty";

export default interface ThicknessProperty extends StylesProperty {
    enabled: boolean;
    left: StylesProperty;
    top: StylesProperty;
    right: StylesProperty;
    bottom: StylesProperty;
    className: string | undefined;
  }