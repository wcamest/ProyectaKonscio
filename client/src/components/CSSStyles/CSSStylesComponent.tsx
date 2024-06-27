"use client";

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

      if (targetBreakpoint) {
        for (let _it_ = 0; _it_ < breakpoints.length; _it_++) {
          const breakpoint = breakpoints[_it_];

          breakpointsRange.push(breakpoint);

          if (breakpoint === targetBreakpoint) break;
        }

        for (let _it_ = 0; _it_ < breakpointsRange.length; _it_++) {
          const breakpoint = breakpointsRange[_it_];

          const classDeclarations = Object.entries(styles[breakpoint])
            .map((kvp: [string, any]) => {
              const className = kvp[0];

              const propertyAndValue = Object.entries(kvp[1])[0];
              const propertyName = propertyAndValue[0];
              const propertyValue = propertyAndValue[1];

              if (!fromClient && propertiesWithQuotes.includes(propertyName))
                return undefined;

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
  }, []);

  return <style>{Functions.GetCSS()}</style>;
};

export default CSSStylesComponent;
