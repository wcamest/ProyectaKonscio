"use client";

import View from "@/app/view/[permalink]/View";
import ElementShortcutComponent from "@/components/ElementShortcut/ElementShortcutComponent";
import ElementShortcutGroupComponent from "@/components/ElementShortcutGroup/ElementShortcutGroupComponent";
import HTMLElementTreeItemComponent from "@/components/HTMLElementTreeItem/HTMLElementTreeItemComponent";
import { createElement } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import WHTMLElement from "@/types/WHTMLElement";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const Editor = (props: Props) => {
  const { elements } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();

  const Functions = {
    GetRoot() {
      const rootElement = elements.find(
        (element: WHTMLElement) => element.id === "root"
      );

      return rootElement;
    },
    AddElement(
      tagName: string,
      treeItemTagLabel: string,
      treeItemTitle: string
    ) {
      dispatch(createElement({ tagName, treeItemTagLabel, treeItemTitle }));
    },
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-between">
      <div>
        <div className="w-64 h-full flex flex-col overflow-hidden border border-solid border-blue-300">
          <div className="w-full h-1/2 overflow-hidden">
            <div className="w-full h-full p-3 overflow-auto flex flex-col gap-2">
              <ElementShortcutGroupComponent id="sections" title="Secciones">
                <ElementShortcutComponent
                  tagName="HTMLArticle"
                  title="Artículo"
                  treeItemTagLabel="article"
                  treeItemTitle="Artículo"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLSection"
                  title="Sección"
                  treeItemTagLabel="section"
                  treeItemTitle="Sección"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLNav"
                  title="Navegación"
                  treeItemTagLabel="nav"
                  treeItemTitle="Navegación"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLAside"
                  title="Bloque lateral"
                  treeItemTagLabel="Bloque lateral"
                  treeItemTitle="aside"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLH1"
                  title="H1"
                  treeItemTagLabel="h1"
                  treeItemTitle="H1"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLH2"
                  title="H2"
                  treeItemTagLabel="h2"
                  treeItemTitle="H2"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLH3"
                  title="H3"
                  treeItemTagLabel="h3"
                  treeItemTitle="H3"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLH4"
                  title="H4"
                  treeItemTagLabel="h4"
                  treeItemTitle="H4"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLH5"
                  title="H5"
                  treeItemTagLabel="h5"
                  treeItemTitle="H5"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLH6"
                  title="H6"
                  treeItemTagLabel="h6"
                  treeItemTitle="H6"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLHgroup"
                  title="Grupo de encabezados"
                  treeItemTagLabel="hgroup"
                  treeItemTitle="Grupo de encabezados"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLHeader"
                  title="Cabecera"
                  treeItemTagLabel="header"
                  treeItemTitle="Cabecera"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLFooter"
                  title="Pie de pagina"
                  treeItemTagLabel="footer"
                  treeItemTitle="Pie de pagina"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLAddress"
                  title="Dirección"
                  treeItemTagLabel="address"
                  treeItemTitle="Dirección"
                  onAddElement={Functions.AddElement}
                />
              </ElementShortcutGroupComponent>
              <ElementShortcutGroupComponent id="content_blocks" title="Bloques de contenido">
                <ElementShortcutComponent
                  tagName="HTMLP"
                  title="Párrafo"
                  treeItemTagLabel="p"
                  treeItemTitle="Párrafo"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLHr"
                  title="Separador"
                  treeItemTagLabel="hr"
                  treeItemTitle="Separador"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLDiv"
                  title="Contenedor"
                  treeItemTagLabel="div"
                  treeItemTitle="Contenedor"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLBlockquote"
                  title="Cita larga"
                  treeItemTagLabel="blockquote"
                  treeItemTitle="Cita larga"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLPre"
                  title="texto con formato"
                  treeItemTagLabel="pre"
                  treeItemTitle="texto con formato"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLMain"
                  title="Sección principal"
                  treeItemTagLabel="main"
                  treeItemTitle="Sección principal"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLFigure"
                  title="Ilustración"
                  treeItemTagLabel="figure"
                  treeItemTitle="Ilustración"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLFigcaption"
                  title="Pie de ilustración"
                  treeItemTagLabel="figcaption"
                  treeItemTitle="Pie de ilustración"
                  onAddElement={Functions.AddElement}
                />
              </ElementShortcutGroupComponent>
              <ElementShortcutGroupComponent  id="text" title="Texto">
                <ElementShortcutComponent
                  tagName="HTMLBr"
                  title="Salto de linea"
                  treeItemTagLabel="br"
                  treeItemTitle="Salto de linea"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLA"
                  title="Enlace"
                  treeItemTagLabel="a"
                  treeItemTitle="Enlace"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLSpan"
                  title="Texto genérico"
                  treeItemTagLabel="Span"
                  treeItemTitle="Texto genérico"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLStrong"
                  title="Texto importante"
                  treeItemTagLabel="Strong"
                  treeItemTitle="Texto importante"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLEm"
                  title="Texto enfatizado"
                  treeItemTagLabel="em"
                  treeItemTitle="Texto enfatizado"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLSub"
                  title="Subíndice"
                  treeItemTagLabel="em"
                  treeItemTitle="Subíndice"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLAbbr"
                  title="Abreviatura"
                  treeItemTagLabel="abbr"
                  treeItemTitle="Abreviatura"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLCite"
                  title="Obra"
                  treeItemTagLabel="cite"
                  treeItemTitle="Obra"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLData"
                  title="Datos"
                  treeItemTagLabel="data"
                  treeItemTitle="Datos"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLDfn"
                  title="Definición"
                  treeItemTagLabel="dfn"
                  treeItemTitle="Definición"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLQ"
                  title="Cita"
                  treeItemTagLabel="q"
                  treeItemTitle="Cita"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLSmall"
                  title="Comentario"
                  treeItemTagLabel="small"
                  treeItemTitle="Comentario"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLTime"
                  title="Fecha y hora"
                  treeItemTagLabel="time"
                  treeItemTitle="Fecha y hora"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLCode"
                  title="Código"
                  treeItemTagLabel="code"
                  treeItemTitle="Código"
                  onAddElement={Functions.AddElement}
                />
              </ElementShortcutGroupComponent>
              <ElementShortcutGroupComponent  id="content" title="Contenido">
                <ElementShortcutComponent
                  tagName="HTMLImg"
                  title="Imagen"
                  treeItemTagLabel="img"
                  treeItemTitle="Imagen"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLIframe"
                  title="IFrame"
                  treeItemTagLabel="iframe"
                  treeItemTitle="IFrame"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLEmbed"
                  title="Plug-in"
                  treeItemTagLabel="embed"
                  treeItemTitle="Plug-in"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLObject"
                  title="Objeto"
                  treeItemTagLabel="object"
                  treeItemTitle="Objeto"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLParam"
                  title="Parámetro de objeto"
                  treeItemTagLabel="param"
                  treeItemTitle="Parámetro de objeto"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLVideo"
                  title="Video"
                  treeItemTagLabel="video"
                  treeItemTitle="Video"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLAudio"
                  title="Audio"
                  treeItemTagLabel="audio"
                  treeItemTitle="Audio"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLSource"
                  title="Origen de audio o video"
                  treeItemTagLabel="source"
                  treeItemTitle="Origen de audio o video"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLTrack"
                  title="Subtítulos"
                  treeItemTagLabel="track"
                  treeItemTitle="Subtítulos"
                  onAddElement={Functions.AddElement}
                />
              </ElementShortcutGroupComponent>
              <ElementShortcutGroupComponent  id="lists" title="Listas">
                <ElementShortcutComponent
                  tagName="HTMLOl"
                  title="Lista enumerada"
                  treeItemTagLabel="ol"
                  treeItemTitle="Lista enumerada"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLUl"
                  title="Lista con viñetas"
                  treeItemTagLabel="ul"
                  treeItemTitle="Lista con viñetas"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLLi"
                  title="Item de lista"
                  treeItemTagLabel="li"
                  treeItemTitle="Item de lista"
                  onAddElement={Functions.AddElement}
                />
              </ElementShortcutGroupComponent>
              <ElementShortcutGroupComponent  id="tables" title="Tablas">
                <ElementShortcutComponent
                  tagName="HTMLTable"
                  title="Tabla"
                  treeItemTagLabel="table"
                  treeItemTitle="Tabla"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLCaption"
                  title="Leyenda de tabla"
                  treeItemTagLabel="caption"
                  treeItemTitle="Leyenda de tabla"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLColgroup"
                  title="Grupo de columnas"
                  treeItemTagLabel="colgroup"
                  treeItemTitle="Grupo de columnas"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLTbody"
                  title="Cuerpo de tabla"
                  treeItemTagLabel="tbody"
                  treeItemTitle="Cuerpo de tabla"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLThead"
                  title="Cabecera de tabla"
                  treeItemTagLabel="thead"
                  treeItemTitle="Cabecera de tabla"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLTfoot"
                  title="Pie de tabla"
                  treeItemTagLabel="tfoot"
                  treeItemTitle="Pie de tabla"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLTr"
                  title="Fila"
                  treeItemTagLabel="tr"
                  treeItemTitle="Fila"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLTd"
                  title="Celda"
                  treeItemTagLabel="td"
                  treeItemTitle="Celda"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLTh"
                  title="Celda de cabecera"
                  treeItemTagLabel="th"
                  treeItemTitle="Celda de cabecera"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLCol"
                  title="Columna"
                  treeItemTagLabel="col"
                  treeItemTitle="Columna"
                  onAddElement={Functions.AddElement}
                />
              </ElementShortcutGroupComponent>
              <ElementShortcutGroupComponent  id="forms" title="Formularios">
                <ElementShortcutComponent
                  tagName="HTMLForm"
                  title="Formulario"
                  treeItemTagLabel="form"
                  treeItemTitle="Formulario"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLLabel"
                  title="Etiqueta"
                  treeItemTagLabel="label"
                  treeItemTitle="Etiqueta"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLInput"
                  title="Control"
                  treeItemTagLabel="input"
                  treeItemTitle="Control"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLButton"
                  title="Botón"
                  treeItemTagLabel="button"
                  treeItemTitle="Botón"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLSelect"
                  title="Lista desplegable"
                  treeItemTagLabel="select"
                  treeItemTitle="Lista desplegable"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLOption"
                  title="Item"
                  treeItemTagLabel="option"
                  treeItemTitle="Item"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLOptgroup"
                  title="Grupo de items"
                  treeItemTagLabel="optgroup"
                  treeItemTitle="Grupo de items"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLTextarea"
                  title="Texto multilinea"
                  treeItemTagLabel="textarea"
                  treeItemTitle="Texto multilinea"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLProgress"
                  title="Barra de progreso"
                  treeItemTagLabel="progress"
                  treeItemTitle="Barra de progreso"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLFieldset"
                  title="Grupo de controles"
                  treeItemTagLabel="fieldset"
                  treeItemTitle="Grupo de controles"
                  onAddElement={Functions.AddElement}
                />
                <ElementShortcutComponent
                  tagName="HTMLLegend"
                  title="Leyenda"
                  treeItemTagLabel="legend"
                  treeItemTitle="Leyenda"
                  onAddElement={Functions.AddElement}
                />
              </ElementShortcutGroupComponent>
            </div>
          </div>
          <div className="w-full h-1/2 overflow-hidden border-t border-t-solid border-t-blue-300">
            <div className="w-full h-full p-3 overflow-auto">
              <HTMLElementTreeItemComponent
                elementId="root"
                elements={elements}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full border-y border-y-solid border-y-blue-300 overflow-hidden">
        <div className="w-full h-full overflow-auto">
          <View elements={elements} root={Functions.GetRoot()} />
        </div>
      </div>
      <div>
        <div className="w-64 h-full border border-solid border-blue-300"></div>
      </div>
    </div>
  );
};

export default Editor;
