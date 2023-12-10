import StylesProperty from "./StylesProperty";

export default interface StylesClassList {
  //sizing
  width: StylesProperty;
  height: StylesProperty;
  minWidth: StylesProperty;
  minHeight: StylesProperty;
  maxWidth: StylesProperty;
  maxHeight: StylesProperty;

  //spacing
  padding: StylesProperty;
  margin: StylesProperty;

  //font and text
  fontFamily: StylesProperty;
  fontSize: StylesProperty;
  fontStyle: StylesProperty;
  fontWeight: StylesProperty;
  letterSpacing: StylesProperty;
  lineHeight: StylesProperty;
  textAlign: StylesProperty;
  textColor: StylesProperty;
  textDecoration: StylesProperty;
  textDecorationColor: StylesProperty;
  textDecorationStyle: StylesProperty;
  textDecorationThickness: StylesProperty;
  textUnderlineOffset: StylesProperty;
  textTransform: StylesProperty;
  textOverflow: StylesProperty;
  whiteSpace: StylesProperty;

  //background
  backgroundColor: StylesProperty;
}
