import React, { ChangeEvent } from "react";

type Props = {
  onSelect?: Function;
};

const AddElementButtonComponent = (props: Props) => {
  const { onSelect } = props;

  return (
    <select
      value="add"
      className="px-2 py-1 flex w-16 bg-white border border-blue-500 rounded-md shadow-md"
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        if (onSelect) onSelect(e.target.value);
      }}
    >
      <option value="add">Add...</option>
      <option value="TextElement">{"#Texto"}</option>
      <optgroup label="Secciones">
        <option value="HeaderElement">header</option>
        <option value="FooterElement">footer</option>
        <option value="NavElement">nav</option>
        <option value="ArticleElement">article</option>
        <option value="SectionElement">section</option>
        <option value="AsideElement">aside</option>
        <option value="MainElement">main</option>
        <option value="AddressElement">address</option>
      </optgroup>
      <optgroup label="Contenido">
        <option value="H1Element">h1</option>
        <option value="H2Element">h2</option>
        <option value="H3Element">h3</option>
        <option value="H4Element">h4</option>
        <option value="H5Element">h5</option>
        <option value="H6Element">h6</option>
        <option value="PElement">p</option>
        <option value="BlockquoteElement">blockquote</option>
        <option value="HrElement">hr</option>
        <option value="PreElement">pre</option>
      </optgroup>
      <optgroup label="Agrupación de Contenido">
        <option value="OlElement">ol</option>
        <option value="UlElement">ul</option>
        <option value="LiElement">li</option>
        <option value="DlElement">dl</option>
        <option value="DtElement">dt</option>
        <option value="DdElement">dd</option>
        <option value="FigureElement">figure</option>
        <option value="FigcaptionElement">figcaption</option>
        <option value="DivElement">div</option>
      </optgroup>
      <optgroup label="Texto">
        <option value="AElement">a</option>
        <option value="EmElement">em</option>
        <option value="StrongElement">strong</option>
        <option value="SmallElement">small</option>
        <option value="SElement">s</option>
        <option value="CiteElement">cite</option>
        <option value="QElement">q</option>
        <option value="DfnElement">dfn</option>
        <option value="AbbrElement">abbr</option>
        <option value="RubyElement">ruby</option>
        <option value="RtElement">rt</option>
        <option value="RpElement">rp</option>
        <option value="DataElement">data</option>
        <option value="TimeElement">time</option>
        <option value="CodeElement">code</option>
        <option value="VarElement">var</option>
        <option value="SampElement">samp</option>
        <option value="KbdElement">kbd</option>
        <option value="SubElement">sub</option>
        <option value="SupElement">sup</option>
        <option value="IElement">i</option>
        <option value="BElement">b</option>
        <option value="UElement">u</option>
        <option value="MarkElement">mark</option>
        <option value="BdiElement">bdi</option>
        <option value="BdoElement">bdo</option>
        <option value="SpanElement">span</option>
        <option value="BrElement">br</option>
        <option value="WbrElement">wbr</option>
      </optgroup>
      <optgroup label="Edición">
        <option value="InsElement">ins</option>
        <option value="DelElement">del</option>
      </optgroup>
      <optgroup label="Incorporación de Contenido">
        <option value="ImgElement">img</option>
        <option value="IframeElement">iframe</option>
        <option value="EmbedElement">embed</option>
        <option value="ObjectElement">object</option>
        <option value="ParamElement">param</option>
        <option value="VideoElement">video</option>
        <option value="AudioElement">audio</option>
        <option value="SourceElement">source</option>
        <option value="TrackElement">track</option>
        <option value="MapElement">map</option>
        <option value="AreaElement">area</option>
        <option value="PictureElement">picture</option>
      </optgroup>
      <optgroup label="Tablas">
        <option value="TableElement">table</option>
        <option value="CaptionElement">caption</option>
        <option value="ColgroupElement">colgroup</option>
        <option value="ColElement">col</option>
        <option value="TbodyElement">tbody</option>
        <option value="TheadElement">thead</option>
        <option value="TfootElement">tfoot</option>
        <option value="TrElement">tr</option>
        <option value="TdElement">td</option>
        <option value="ThElement">th</option>
      </optgroup>
      <optgroup label="Formularios">
        <option value="FormElement">form</option>
        <option value="LabelElement">label</option>
        <option value="InputElement">input</option>
        <option value="ButtonElement">button</option>
        <option value="SelectElement">select</option>
        <option value="DatalistElement">datalist</option>
        <option value="OptgroupElement">optgroup</option>
        <option value="OptionElement">option</option>
        <option value="TextareaElement">textarea</option>
        <option value="KeygenElement">keygen</option>
        <option value="OutputElement">output</option>
        <option value="ProgressElement">progress</option>
        <option value="MeterElement">meter</option>
        <option value="FieldsetElement">fieldset</option>
        <option value="LegendElement">legend</option>
      </optgroup>
      <optgroup label="Interactividad">
        <option value="DetailsElement">details</option>
        <option value="SummaryElement">summary</option>
        <option value="DialogElement">dialog</option>
      </optgroup>
      <optgroup label="Componentes">
        <option value="AccordionComponent">Accordion</option>
        <option value="AccordionItemComponent">Accordion item</option>
        <option value="FlipBoxComponent">Flip Box</option>
      </optgroup>
      <optgroup label="Layout">
        <option value="MobileNavigationComponent">Mobile Navigation</option>
        <option value="MobileNavigationHeaderComponent">Mobile Navigation Header</option>
        <option value="MobileNavigationBodyComponent">Mobile Navigation Body</option>
        <option value="MenuItemComponent">Menú Item</option>
        <option value="MobileMenuButtonComponent">Mobile Menu Button</option>
      </optgroup>
    </select>
  );
};

export default AddElementButtonComponent;
