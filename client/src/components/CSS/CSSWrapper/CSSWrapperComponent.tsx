"use client";

import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import WCSSClasses from "@/types/WCSSClasses";
import WHTMLElement from "@/types/WHTMLElement";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const cssRulesValues: any = {
  "css-w-0": "width: 0px",
  "css-w-px": "width: 1px",
  "css-w-0.5": "width: 0.125rem",
  "css-w-1": "width: 0.25rem",
  "css-w-1.5": "width: 0.375rem",
  "css-w-2": "width: 0.5rem",
  "css-w-2.5": "width: 0.625rem",
  "css-w-3": "width: 0.75rem",
  "css-w-3.5": "width: 0.875rem",
  "css-w-4": "width: 1rem",
  "css-w-5": "width: 1.25rem",
  "css-w-6": "width: 1.5rem",
  "css-w-7": "width: 1.75rem",
  "css-w-8": "width: 2rem",
  "css-w-9": "width: 2.25rem",
  "css-w-10": "width: 2.5rem",
  "css-w-11": "width: 2.75rem",
  "css-w-12": "width: 3rem",
  "css-w-14": "width: 3.5rem",
  "css-w-16": "width: 4rem",
  "css-w-20": "width: 5rem",
  "css-w-24": "width: 6rem",
  "css-w-28": "width: 7rem",
  "css-w-32": "width: 8rem",
  "css-w-36": "width: 9rem",
  "css-w-40": "width: 10rem",
  "css-w-44": "width: 11rem",
  "css-w-48": "width: 12rem",
  "css-w-52": "width: 13rem",
  "css-w-56": "width: 14rem",
  "css-w-60": "width: 15rem",
  "css-w-64": "width: 16rem",
  "css-w-72": "width: 18rem",
  "css-w-80": "width: 20rem",
  "css-w-96": "width: 24rem",
  "css-w-auto": "width: auto",
  "css-w-min": "width: min-content",
  "css-w-max": "width: max-content",
  "css-w-fit": "width: fit-content",
  "css-w-screen": "width: 100vw",
  "css-w-full": "width: 100%",
  "css-w-1/2": "width: 50%",
  "css-w-1/3": "width: 33.333333%",
  "css-w-2/3": "width: 66.666667%",
  "css-w-1/4": "width: 25%",
  "css-w-2/4": "width: 50%",
  "css-w-3/4": "width: 75%",
  "css-w-1/5": "width: 20%",
  "css-w-2/5": "width: 40%",
  "css-w-3/5": "width: 60%",
  "css-w-4/5": "width: 80%",
  "css-w-1/6": "width: 16.666667%",
  "css-w-2/6": "width: 33.333333%",
  "css-w-3/6": "width: 50%",
  "css-w-4/6": "width: 66.666667%",
  "css-w-5/6": "width: 83.333333%",
  "css-w-1/12": "width: 8.333333%",
  "css-w-2/12": "width: 16.666667%",
  "css-w-3/12": "width: 25%",
  "css-w-4/12": "width: 33.333333%",
  "css-w-5/12": "width: 41.666667%",
  "css-w-6/12": "width: 50%",
  "css-w-7/12": "width: 58.333333%",
  "css-w-8/12": "width: 66.666667%",
  "css-w-9/12": "width: 75%",
  "css-w-10/12": "width: 83.333333%",
  "css-w-11/12": "width: 91.666667%",

  "css-h-0": "height: 0px",
  "css-h-px": "height: 1px",
  "css-h-0.5": "height: 0.125rem",
  "css-h-1": "height: 0.25rem",
  "css-h-1.5": "height: 0.375rem",
  "css-h-2": "height: 0.5rem",
  "css-h-2.5": "height: 0.625rem",
  "css-h-3": "height: 0.75rem",
  "css-h-3.5": "height: 0.875rem",
  "css-h-4": "height: 1rem",
  "css-h-5": "height: 1.25rem",
  "css-h-6": "height: 1.5rem",
  "css-h-7": "height: 1.75rem",
  "css-h-8": "height: 2rem",
  "css-h-9": "height: 2.25rem",
  "css-h-10": "height: 2.5rem",
  "css-h-11": "height: 2.75rem",
  "css-h-12": "height: 3rem",
  "css-h-14": "height: 3.5rem",
  "css-h-16": "height: 4rem",
  "css-h-20": "height: 5rem",
  "css-h-24": "height: 6rem",
  "css-h-28": "height: 7rem",
  "css-h-32": "height: 8rem",
  "css-h-36": "height: 9rem",
  "css-h-40": "height: 10rem",
  "css-h-44": "height: 11rem",
  "css-h-48": "height: 12rem",
  "css-h-52": "height: 13rem",
  "css-h-56": "height: 14rem",
  "css-h-60": "height: 15rem",
  "css-h-64": "height: 16rem",
  "css-h-72": "height: 18rem",
  "css-h-80": "height: 20rem",
  "css-h-96": "height: 24rem",
  "css-h-auto": "height: auto",
  "css-h-min": "height: min-content",
  "css-h-max": "height: max-content",
  "css-h-fit": "height: fit-content",
  "css-h-screen": "height: 100vh",
  "css-h-full": "height: 100%",
  "css-h-1/2": "height: 50%",
  "css-h-1/3": "height: 33.333333%",
  "css-h-2/3": "height: 66.666667%",
  "css-h-1/4": "height: 25%",
  "css-h-2/4": "height: 50%",
  "css-h-3/4": "height: 75%",
  "css-h-1/5": "height: 20%",
  "css-h-2/5": "height: 40%",
  "css-h-3/5": "height: 60%",
  "css-h-4/5": "height: 80%",
  "css-h-1/6": "height: 16.666667%",
  "css-h-2/6": "height: 33.333333%",
  "css-h-3/6": "height: 50%",
  "css-h-4/6": "height: 66.666667%",
  "css-h-5/6": "height: 83.333333%",
  "css-h-1/12": "height: 8.333333%",
  "css-h-2/12": "height: 16.666667%",
  "css-h-3/12": "height: 25%",
  "css-h-4/12": "height: 33.333333%",
  "css-h-5/12": "height: 41.666667%",
  "css-h-6/12": "height: 50%",
  "css-h-7/12": "height: 58.333333%",
  "css-h-8/12": "height: 66.666667%",
  "css-h-9/12": "height: 75%",
  "css-h-10/12": "height: 83.333333%",
  "css-h-11/12": "height: 91.666667%",

  "css-min-w-0": "min-width: 0px",
  "css-min-w-full": "min-width: 100%",
  "css-min-w-min": "min-width: min-content",
  "css-min-w-max": "min-width: max-content",
  "css-min-w-fit": "min-width: fit-content",

  "css-min-h-0": "min-height: 0px",
  "css-min-h-full": "min-height: 100%",
  "css-min-h-screen": "min-height: 100vh",
  "css-min-h-min": "min-height: min-content",
  "css-min-h-max": "min-height: max-content",
  "css-min-h-fit": "min-height: fit-content"
};

const CSSWrapperComponent = (props: Props) => {
  const { elements } = useSelector((state: RootState) => state.editor);

  const Functions = {
    GetStyles() {
      const styles: any = {
        base: [],
        sm: [],
        md: [],
        lg: [],
        xl: [],
        xl2: [],
      };

      const appliedClassNames: any = {
        base: [],
        sm: [],
        md: [],
        lg: [],
        xl: [],
        xl2: [],
      };

      const screenSizes: string[] = ["base", "sm", "md", "lg", "xl", "xl2"];

      screenSizes.forEach((size: string) => {
        const key = size as keyof WCSSClassCollection;

        elements.forEach((element: WHTMLElement) => {
          for (const propertyName in element.classes[key]) {
            const propertyKey = propertyName as keyof WCSSClasses;
            const property = element.classes[key][propertyKey];

            if (property.className) {
              let formattedClassName = `${size}:${property.className}`.replace(
                "base:",
                ""
              );
              formattedClassName = formattedClassName.replace(":", "\\:");
              formattedClassName = formattedClassName.replace("/", "\\/");
              formattedClassName = formattedClassName.replace(".", "\\.");

              if (!appliedClassNames[size].includes(property.className)) {
                styles[key].push(`.${formattedClassName}{
                ${cssRulesValues[property.className]}
              }`);
                appliedClassNames[size].push(property.className);
              }
            }
          }
        });
      });

      const rawStyles: string[] = [];

      if (styles.base.length) rawStyles.push(styles.base.join("\n"));
      if (styles.sm.length)
        rawStyles.push(`@media (min-width: 640px) { ${styles.sm.join("\n")} }`);
      if (styles.md.length)
        rawStyles.push(`@media (min-width: 768px) { ${styles.md.join("\n")} }`);
      if (styles.lg.length)
        rawStyles.push(
          `@media (min-width: 1024px) { ${styles.lg.join("\n")} }`
        );
      if (styles.xl.length)
        rawStyles.push(
          `@media (min-width: 1280px) { ${styles.xl.join("\n")} }`
        );
      if (styles.xl2.length)
        rawStyles.push(
          `@media (min-width: 1536px) { ${styles.xl2.join("\n")} }`
        );

      return rawStyles.join("\n");
    },
  };

  return <style>{Functions.GetStyles()}</style>;
};

export default CSSWrapperComponent;
