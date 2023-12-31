import StylesProperty from "./StylesProperty";

export default interface StylesClassList {
  //layout
  aspectRatio: StylesProperty;
  position: StylesProperty;
  display: StylesProperty;
  objectFit: StylesProperty;
  objectPosition: StylesProperty;
  overflow: StylesProperty;
  visibility: StylesProperty;
  zIndex: StylesProperty;

  //sizing
  width: StylesProperty;
  height: StylesProperty;
  minWidth: StylesProperty;
  minHeight: StylesProperty;
  maxWidth: StylesProperty;
  maxHeight: StylesProperty;

  //spacing
  paddingTop: StylesProperty;
  paddingRight: StylesProperty;
  paddingBottom: StylesProperty;
  paddingLeft: StylesProperty;
  marginTop: StylesProperty;
  marginRight: StylesProperty;
  marginBottom: StylesProperty;
  marginLeft: StylesProperty;

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

  //border
  borderStyle: StylesProperty;
  borderTopWidth: StylesProperty;
  borderLeftWidth: StylesProperty;
  borderRightWidth: StylesProperty;
  borderBottomWidth: StylesProperty;
  borderTopColor: StylesProperty;
  borderLeftColor: StylesProperty;
  borderRightColor: StylesProperty;
  borderBottomColor: StylesProperty;
  borderTopLeftRadius: StylesProperty;
  borderTopRightRadius: StylesProperty;
  borderBottomLeftRadius: StylesProperty;
  borderBottomRightRadius: StylesProperty;

  //background
  backgroundColor: StylesProperty;
  backgroundImage: StylesProperty;
  backgroundAttachment: StylesProperty;
  backgroundClip: StylesProperty;
  backgroundOrigin: StylesProperty;
  backgroundPosition: StylesProperty;
  backgroundRepeat: StylesProperty;
  backgroundSize: StylesProperty;

  //flex and grid
  gap: StylesProperty;

  //flex
  flexBasis: StylesProperty;
  flexDirection: StylesProperty;
  flexWrap: StylesProperty;
  flex: StylesProperty;
  flexGrow: StylesProperty;
  flexShrink: StylesProperty;
  order: StylesProperty;
  justifyContent: StylesProperty;
  alignItems: StylesProperty;

  //grid
  gapX: StylesProperty;
  gapY: StylesProperty;
  gridCols: StylesProperty;
  gridCollSpan: StylesProperty;
  gridCollStart: StylesProperty;
  gridCollEnd: StylesProperty;
  gridRows: StylesProperty;
  gridRowSpan: StylesProperty;
  gridRowStart: StylesProperty;
  gridRowEnd: StylesProperty;
  justifyItems: StylesProperty;
  justifySelf: StylesProperty;
  alignContent: StylesProperty;
  alignSelf: StylesProperty;
  placeContent: StylesProperty;
  placeItems: StylesProperty;
  placeSelf: StylesProperty;

  //border
  borderRadius: StylesProperty;
  border: StylesProperty;
}
