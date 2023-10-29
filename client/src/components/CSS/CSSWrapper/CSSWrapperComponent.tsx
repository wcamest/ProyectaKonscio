"use client";

import { RootState } from "@/redux/store/store";
import WCSSClassCollection from "@/types/WCSSClassCollection";
import { WCSSWidthType } from "@/types/WCSSWidthProperty";
import WHTMLElement from "@/types/WHTMLElement";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const widthValues: any = {
  "css-w-0": "0px",
  "css-w-px": "1px",
  "css-w-0.5": "0.125rem",
  "css-w-1": "0.25rem",
  "css-w-1.5": "0.375rem",
  "css-w-2": "0.5rem",
  "css-w-2.5": "0.625rem",
  "css-w-3": "0.75rem",
  "css-w-3.5": "0.875rem",
  "css-w-4": "1rem",
  "css-w-5": "1.25rem",
  "css-w-6": "1.5rem",
  "css-w-7": "1.75rem",
  "css-w-8": "2rem",
  "css-w-9": "2.25rem",
  "css-w-10": "2.5rem",
  "css-w-11": "2.75rem",
  "css-w-12": "3rem",
  "css-w-14": "3.5rem",
  "css-w-16": "4rem",
  "css-w-20": "5rem",
  "css-w-24": "6rem",
  "css-w-28": "7rem",
  "css-w-32": "8rem",
  "css-w-36": "9rem",
  "css-w-40": "10rem",
  "css-w-44": "11rem",
  "css-w-48": "12rem",
  "css-w-52": "13rem",
  "css-w-56": "14rem",
  "css-w-60": "15rem",
  "css-w-64": "16rem",
  "css-w-72": "18rem",
  "css-w-80": "20rem",
  "css-w-96": "24rem",
  "css-w-auto": "auto",
  "css-w-min": "min-content",
  "css-w-max": "max-content",
  "css-w-fit": "fit-content",
  "css-w-screen": "100vw",
  "css-w-full": "100%",
  "css-w-1/2": "50%",
  "css-w-1/3": "33.333333%",
  "css-w-2/3": "66.666667%",
  "css-w-1/4": "25%",
  "css-w-2/4": "50%",
  "css-w-3/4": "75%",
  "css-w-1/5": "20%",
  "css-w-2/5": "40%",
  "css-w-3/5": "60%",
  "css-w-4/5": "80%",
  "css-w-1/6": "16.666667%",
  "css-w-2/6": "33.333333%",
  "css-w-3/6": "50%",
  "css-w-4/6": "66.666667%",
  "css-w-5/6": "83.333333%",
  "css-w-1/12": "8.333333%",
  "css-w-2/12": "16.666667%",
  "css-w-3/12": "25%",
  "css-w-4/12": "33.333333%",
  "css-w-5/12": "41.666667%",
  "css-w-6/12": "50%",
  "css-w-7/12": "58.333333%",
  "css-w-8/12": "66.666667%",
  "css-w-9/12": "75%",
  "css-w-10/12": "83.333333%",
  "css-w-11/12": "91.666667%",
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
          const widthProperty = element.classes[key].width;

          if (widthProperty.type !== WCSSWidthType.none) {
            let formattedClassName =
              `${size}:${widthProperty.className}`.replace("base:", "");
            formattedClassName = formattedClassName.replace(":", "\\:");
            formattedClassName = formattedClassName.replace("/", "\\:");
            formattedClassName = formattedClassName.replace(".", "\\.");

            if (!appliedClassNames[size].includes(widthProperty.className)) {
              styles[key].push(`.${formattedClassName}{
              width: ${widthValues[widthProperty.className]}
            }`);
              appliedClassNames[size].push(widthProperty.className);
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
