"use client";

import PageDataObject from "@/types/DataObjects/PageDataObject";
import PageStylesDataObject from "@/types/DataObjects/PageStylesDataObject";
import React, { useEffect, useState } from "react";

type Props = {
  styles: any;
  targetBreakpoint?: string;
};

type CSSStylesComponentState = {
  css: string | undefined;
};

const MediaMinSizes: any = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const CSSStylesComponent = (props: Props) => {
  const { styles, targetBreakpoint } = props;
  const [state, setState] = useState<CSSStylesComponentState>({
    css: undefined,
  });

  const Functions = {
    GetStyles(fromClient: boolean = false) {
      let declarations: string[] = [];
      const breakpoints: string[] = ["base", "sm", "md", "lg", "xl", "2xl"];
      const breakpointsRange: string[] = [];

      //estas son propiedades CSS que implican el uso de comillas en sus valores
      //se implementan aquí como una estrategia para solucionar un problema al
      //momento que NextJS renderiza en el lado de servidor e intenta hidratar el contenido
      //en el lado del cliente, ya que las comillas son reemplazadas por caracteres diferentes
      //en el servidor y al momento de comparar con el código cliente se generan discrepancias
      //desencadenando un error de hidratación
      const propertiesWithQuotes = [
        "content",
        "font-family",
        "background-image",
        "src",
        "quotes",
        "list-style-image",
        "cursor",
        "counter-reset",
        "counter-increment",
        "grid-template-areas",
        "clip-path",
        "shape-outside",
        "filter",
      ];

      //Cuando "targetBreakpoint" es diferente a undefined, se asume que el entorno de los estilos es
      //el del editor, de lo contrario, se asume que se está visualizando la pagina al publico
      if (targetBreakpoint) {

        //El rango de puntos de ruptura, incluye el punto de ruptura "base", hasta el
        //punto de ruptura actual que está en el editor, y todos los puntos de ruptura
        //intermedios
        for (let _it_ = 0; _it_ < breakpoints.length; _it_++) {
          const breakpoint = breakpoints[_it_];

          breakpointsRange.push(breakpoint);

          if (breakpoint === targetBreakpoint) break;
        }

        //se generan las declaraciones de clase correspondientes
        for (let _it_ = 0; _it_ < breakpointsRange.length; _it_++) {
          const breakpoint = breakpointsRange[_it_];

          const classDeclarations = Object.entries(styles[breakpoint])
            .map((kvp: [string, any]) => {
              const className = kvp[0];

              const propertyAndValue = Object.entries(kvp[1])[0];
              const propertyName = propertyAndValue[0];
              const propertyValue = propertyAndValue[1];

              //"fromClient", permite discernir si el renderizado es el primero antes de hidratarse el contenido
              //se omiten las propiedades mencionadas que contienen comillas.
              //Esto implica un retraso en la carga de imágenes para background y todas las alteraciones iniciales
              //de estilo que la omisión de estas propiedades implica
              if (!fromClient && propertiesWithQuotes.includes(propertyName))
                return undefined;

              //en el editor se reemplaza la propiedad css "position: fixed", por "position: absolute"
              //y se le agrega "z-index: 9999", esto para simular el comportamiento que proporciona "fixed"
              //pero sin que se salga del recuadro del contenido en el editor
              if (propertyName === "position" && propertyValue === "fixed")
                return `.${className}{position: absolute; z-index: 9999}`;

              return `.${className}{${propertyName}:${propertyValue};}`;
            })
            .filter(
              (classDeclaration: string | undefined) =>
                classDeclaration !== undefined
            ) as string[];

          declarations = [...declarations, ...classDeclarations];
        }
      } else {
        for (let breakpointPrefix in styles) {
          const breakpointObject = styles[breakpointPrefix];

          let classDeclarations: string[] = [];

          for (let className in breakpointObject) {
            const classObject = breakpointObject[className];

            const declarationBlock: string[] = [];
            let validPropertyAndValue: boolean = true;

            for (let propertyName in classObject) {
              const propertyValue = classObject[propertyName];
              const propertyStr = `\t${propertyName}: ${propertyValue};`;

              declarationBlock.push(propertyStr);

              if (!fromClient && propertiesWithQuotes.includes(propertyName))
                validPropertyAndValue = false;
            }

            if (!validPropertyAndValue) continue;

            let classDeclaration: string[] = [
              `.${
                (breakpointPrefix === "base" ? "" : `${breakpointPrefix}\\:`) +
                className
              } {`,
              declarationBlock.join("\n"),
              "}",
            ];

            classDeclarations.push(classDeclaration.join("\n"));
          }

          if (breakpointPrefix === "base") {
            declarations.push(classDeclarations.join("\n\n"));
          } else {
            let breakpointMediaDeclaration: string[] = [
              `@media(min-width: ${MediaMinSizes[breakpointPrefix]}px) {`,
              classDeclarations.join("\n\n"),
              "}",
            ];

            declarations.push(breakpointMediaDeclaration.join("\n\n"));
          }
        }
      }

      return declarations.join("\n\n");
    },
    GetCSS() {
      if (!state.css) return Functions.GetStyles();

      return state.css;
    },
  };

  useEffect(() => {
    setState({
      css: Functions.GetStyles(true),
    });
  }, [targetBreakpoint, styles]);

  //
  return <style>{Functions.GetCSS()}</style>;
};

export default CSSStylesComponent;
