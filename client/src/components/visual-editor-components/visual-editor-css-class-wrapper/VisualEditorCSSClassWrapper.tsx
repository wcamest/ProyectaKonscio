"use client";

import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React from "react";
import { useSelector } from "react-redux";
import ClassGenerator from "../elements/class-generator/ClassGenerator";

type Props = {};

const classRules: any = {
  //position
  "css-static": "position: static;",
  "css-fixed": "position: fixed;",
  "css-absolute": "position: absolute;",
  "css-relative": "position: relative;",
  "css-sticky": "position: sticky;",

  //display
  "css-block": "display: block;",
  "css-inline-block": "display: inline-block;",
  "css-inline": "display: block;",
  "css-flex": "display: flex;",
  "css-inline-flex": "display: inline-flex;",
  "css-grid": "display: grid;",
  "css-hidden": "display: none;",

  //object contain
  "css-object-contain": "object-fit: contain",
  "css-object-cover": "object-fit: cover",
  "css-object-fill": "object-fit: fill",
  "css-object-none": "object-fit: none",
  "css-object-scale-down": "object-fit: scale-down",

  //visibility
  "css-visible": "visibility: visible",
  "css-invisible": "visibility: hidden",
  "css-collapse": "visibility: collapse",

  //z-index
  "css-z-0": "z-index: 0",
  "css-z-10": "z-index: 10",
  "css-z-20": "z-index: 20",
  "css-z-30": "z-index: 30",
  "css-z-40": "z-index: 40",
  "css-z-50": "z-index: 50",
  "css-z-auto": "z-index: auto",

  //SIZING
  //width
  "css-w-screen": "width: 100vw;",
  "css-w-full": "width: 100%;",
  "css-w-min": "width: min-content;",
  "css-w-max": "width: max-content;",
  "css-w-fit": "width: fit-content;",
  "css-w-auto": "width: auto;",

  //height
  "css-h-screen": "height: 100vh;",
  "css-h-full": "height: 100%;",
  "css-h-min": "height: min-content;",
  "css-h-max": "height: max-content;",
  "css-h-fit": "height: fit-content;",
  "css-h-auto": "height: auto;",

  //min-width
  "css-min-w-full": "min-width: 100%;",
  "css-min-w-min": "min-width: min-content;",
  "css-min-w-max": "min-width: max-content;",
  "css-min-w-fit": "min-width: fit-content;",

  //min-height
  "css-min-h-full": "min-height: 100%;",
  "css-min-h-screen": "min-height: 100vh",
  "css-min-h-min": "min-height: min-content;",
  "css-min-h-max": "min-height: max-content;",
  "css-min-h-fit": "min-height: fit-content;",

  //max-width
  "css-max-w-xs": "max-width: 20rem;",
  "css-max-w-sm": "max-width: 24rem;",
  "css-max-w-md": "max-width: 28rem;",
  "css-max-w-lg": "max-width: 32rem;",
  "css-max-w-xl": "max-width: 36rem;",
  "css-max-w-2xl": "max-width: 42rem;",
  "css-max-w-3xl": "max-width: 48rem;",
  "css-max-w-4xl": "max-width: 56rem;",
  "css-max-w-5xl": "max-width: 64rem;",
  "css-max-w-6xl": "max-width: 72rem;",
  "css-max-w-7xl": "max-width: 80rem;",
  "css-max-w-none": "max-width: none;",
  "css-max-w-full": "max-width: 100%;",
  "css-max-w-min": "max-width: min-content;",
  "css-max-w-max": "max-width: max-content;",
  "css-max-w-fit": "max-width: fit-content;",

  //max-height
  "css-max-h-none": "max-height: none;",
  "css-max-h-full": "max-height: 100%;",
  "css-max-h-screen": "max-height: 10vh;",
  "css-max-h-min": "max-height: min-content;",
  "css-max-h-max": "max-height: max-content;",
  "css-max-h-fit": "max-height: fit-content;",

  //font and text
  "css-font-sans":
    'font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
  "css-font-serif":
    'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;',
  "css-font-mono":
    'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',

  // border style
  "css-border-solid": "border-style: solid;",
  "css-border-dashed": "border-style: dashed;",
  "css-border-dotted": "border-style: dotted;",
  "css-border-double": "border-style: double;",
  "css-border-hidden": "border-style: hidden;",
  "css-border-none": "border-style: none;",

  //border width
  "css-border-t-0": "border-top-width: 0px;",
  "css-border-t-1": "border-top-width: 1px;",
  "css-border-t-2": "border-top-width: 2px;",
  "css-border-t-4": "border-top-width: 4px;",
  "css-border-t-8": "border-top-width: 8px;",
  "css-border-r-0": "border-right-width: 0px;",
  "css-border-r-1": "border-right-width: 1px;",
  "css-border-r-2": "border-right-width: 2px;",
  "css-border-r-4": "border-right-width: 4px;",
  "css-border-r-8": "border-right-width: 8px;",
  "css-border-b-0": "border-bottom-width: 0px;",
  "css-border-b-1": "border-bottom-width: 1px;",
  "css-border-b-2": "border-bottom-width: 2px;",
  "css-border-b-4": "border-bottom-width: 4px;",
  "css-border-b-8": "border-bottom-width: 8px;",
  "css-border-l-0": "border-left-width: 0px;",
  "css-border-l-1": "border-left-width: 1px;",
  "css-border-l-2": "border-left-width: 2px;",
  "css-border-l-4": "border-left-width: 4px;",
  "css-border-l-8": "border-left-width: 8px;",

  //border radius

  "css-rounded-tl-none": "border-top-left-radius: 0px;",
  "css-rounded-tl-sm": "border-top-left-radius: 0.125rem;",
  "css-rounded-tl-base": "border-top-left-radius: 0.25rem;",
  "css-rounded-tl-md": "border-top-left-radius: 0.375rem;",
  "css-rounded-tl-lg": "border-top-left-radius: 0.5rem;",
  "css-rounded-tl-xl": "border-top-left-radius: 0.75rem;",
  "css-rounded-tl-2xl": "border-top-left-radius: 1rem;",
  "css-rounded-tl-3xl": "border-top-left-radius: 1.5rem;",
  "css-rounded-tl-full": "border-top-left-radius: 9999px;",

  "css-rounded-tr-none": "border-top-right-radius: 0px;",
  "css-rounded-tr-sm": "border-top-right-radius: 0.125rem;",
  "css-rounded-tr-base": "border-top-right-radius: 0.25rem;",
  "css-rounded-tr-md": "border-top-right-radius: 0.375rem;",
  "css-rounded-tr-lg": "border-top-right-radius: 0.5rem;",
  "css-rounded-tr-xl": "border-top-right-radius: 0.75rem;",
  "css-rounded-tr-2xl": "border-top-right-radius: 1rem;",
  "css-rounded-tr-3xl": "border-top-right-radius: 1.5rem;",
  "css-rounded-tr-full": "border-top-right-radius: 9999px;",

  "css-rounded-bl-none": "border-bottom-left-radius: 0px;",
  "css-rounded-bl-sm": "border-bottom-left-radius: 0.125rem;",
  "css-rounded-bl-base": "border-bottom-left-radius: 0.25rem;",
  "css-rounded-bl-md": "border-bottom-left-radius: 0.375rem;",
  "css-rounded-bl-lg": "border-bottom-left-radius: 0.5rem;",
  "css-rounded-bl-xl": "border-bottom-left-radius: 0.75rem;",
  "css-rounded-bl-2xl": "border-bottom-left-radius: 1rem;",
  "css-rounded-bl-3xl": "border-bottom-left-radius: 1.5rem;",
  "css-rounded-bl-full": "border-bottom-left-radius: 9999px;",
  
  "css-rounded-br-none": "border-bottom-right-radius: 0px;",
  "css-rounded-br-sm": "border-bottom-right-radius: 0.125rem;",
  "css-rounded-br-base": "border-bottom-right-radius: 0.25rem;",
  "css-rounded-br-md": "border-bottom-right-radius: 0.375rem;",
  "css-rounded-br-lg": "border-bottom-right-radius: 0.5rem;",
  "css-rounded-br-xl": "border-bottom-right-radius: 0.75rem;",
  "css-rounded-br-2xl": "border-bottom-right-radius: 1rem;",
  "css-rounded-br-3xl": "border-bottom-right-radius: 1.5rem;",
  "css-rounded-br-full": "border-bottom-right-radius: 9999px;",

  //font size
  "css-text-xs": "font-size: 0.75rem; line-height: 1rem;",
  "css-text-sm": "font-size: 0.875rem; line-height:  1.25rem;",
  "css-text-base": "font-size: 1rem; line-height: 1.5rem;",
  "css-text-lg": "font-size: 1.125rem; line-height: 1.75rem;",
  "css-text-xl": "font-size: 1.25rem; line-height: 1.75rem;",
  "css-text-2xl": "font-size: 1.5rem; line-height: 2rem;",
  "css-text-3xl": "font-size: 1.875rem; line-height: 2.25rem;",
  "css-text-4xl": "font-size: 2.25rem; line-height: 2.5rem;",
  "css-text-5xl": "font-size: 3rem; line-height: 1;",
  "css-text-6xl": "font-size: 3.75rem; line-height: 1;",
  "css-text-7xl": "font-size: 4.5rem; line-height: 1;",
  "css-text-8xl": "font-size: 6rem; line-height: 1;",
  "css-text-9xl": "font-size: 8rem; line-height: 1;",

  //font style
  "css-italic": "font-style: italic;",
  "css-not-italic": "font-style: normal",

  //font weight
  "css-font-thin": "font-weight: 100;",
  "css-font-extralight": "font-weight: 200;",
  "css-font-light": "font-weight: 300;",
  "css-font-normal": "font-weight: 400;",
  "css-font-medium": "font-weight: 500;",
  "css-font-semibold": "font-weight: 600;",
  "css-font-bold": "font-weight: 700;",
  "css-font-extrabold": "font-weight: 800;",
  "css-font-black": "font-weight: 900;",

  //text align
  "css-text-left": "text-align: left;",
  "css-text-center": "text-align: center;",
  "css-text-right": "text-align: right;",
  "css-text-justify": "text-align: justify;",

  //text decoration
  "css-underline": "text-decoration-line: underline;",
  "css-overline": "text-decoration-line: overline;",
  "css-line-through": "text-decoration-line: line-through;",
  "css-no-underline": "text-decoration-line: none;",

  //text transform
  "css-uppercase": "text-transform: uppercase;",
  "css-lowercase": "text-transform: lowercase;",
  "css-capitalize": "text-transform: capitalize;",
  "css-normal-case": "text-transform: none;",

  //flex direction
  "css-flex-row": "flex-direction: row;",
  "css-flex-row-reverse": "flex-direction: row-reverse;",
  "css-flex-col": "flex-direction: column;",
  "css-flex-col-reverse": "flex-direction: column-reverse;",

  //flex wrap
  "css-flex-wrap": "flex-wrap: wrap;",
  "css-flex-wrap-reverse": "flex-wrap: wrap-reverse;",
  "css-flex-nowrap": "flex-wrap: nowrap;",

  //flex order
  "css-order-1": "order: 1;",
  "css-order-2": "order: 2;",
  "css-order-3": "order: 3;",
  "css-order-4": "order: 4;",
  "css-order-5": "order: 5;",
  "css-order-6": "order: 6;",
  "css-order-7": "order: 7;",
  "css-order-8": "order: 8;",
  "css-order-9": "order: 9;",
  "css-order-10": "order: 10;",
  "css-order-11": "order: 11;",
  "css-order-12": "order: 12;",
  "css-order-first": "order: -9999;",
  "css-order-last": "order: 9999;",
  "css-order-none": "order: 0;",

  //justify content
  "css-justify-start": "justify-content: flex-start;",
  "css-justify-end": "justify-content: flex-end;",
  "css-justify-center": "justify-content: center;",
  "css-justify-between": "justify-content: space-between;",
  "css-justify-around": "justify-content: space-around;",
  "css-justify-evenly": "justify-content: space-evenly;",

  //align items
  "css-items-start": "align-items: flex-start;",
  "css-items-end": "align-items: flex-end;",
  "css-items-center": "align-items: center;",
  "css-items-stretch": "align-items: stretch;",
};

const colors: any = {
  slate: {
    "50": "#f8fafc",
    "100": "#f1f5f9",
    "200": "#e2e8f0",
    "300": "#cbd5e1",
    "400": "#94a3b8",
    "500": "#64748b",
    "600": "#475569",
    "700": "#334155",
    "800": "#1e293b",
    "900": "#0f172a",
    "950": "#020617",
  },
  gray: {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827",
    "950": "#030712",
  },
  zinc: {
    "50": "#fafafa",
    "100": "#f4f4f5",
    "200": "#e4e4e7",
    "300": "#d4d4d8",
    "400": "#a1a1aa",
    "500": "#71717a",
    "600": "#52525b",
    "700": "#3f3f46",
    "800": "#27272a",
    "900": "#18181b",
    "950": "#09090b",
  },
  neutral: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#e5e5e5",
    "300": "#d4d4d4",
    "400": "#a3a3a3",
    "500": "#737373",
    "600": "#525252",
    "700": "#404040",
    "800": "#262626",
    "900": "#171717",
    "950": "#0a0a0a",
  },
  stone: {
    "50": "#fafaf9",
    "100": "#f5f5f4",
    "200": "#e7e5e4",
    "300": "#d6d3d1",
    "400": "#a8a29e",
    "500": "#78716c",
    "600": "#57534e",
    "700": "#44403c",
    "800": "#292524",
    "900": "#1c1917",
    "950": "#0c0a09",
  },
  red: {
    "50": "#fef2f2",
    "100": "#fee2e2",
    "200": "#fecaca",
    "300": "#fca5a5",
    "400": "#f87171",
    "500": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c",
    "800": "#991b1b",
    "900": "#7f1d1d",
    "950": "#450a0a",
  },
  orange: {
    "50": "#fff7ed",
    "100": "#ffedd5",
    "200": "#fed7aa",
    "300": "#fdba74",
    "400": "#fb923c",
    "500": "#f97316",
    "600": "#ea580c",
    "700": "#c2410c",
    "800": "#9a3412",
    "900": "#7c2d12",
    "950": "#431407",
  },
  amber: {
    "50": "#fffbeb",
    "100": "#fef3c7",
    "200": "#fde68a",
    "300": "#fcd34d",
    "400": "#fbbf24",
    "500": "#f59e0b",
    "600": "#d97706",
    "700": "#b45309",
    "800": "#92400e",
    "900": "#78350f",
    "950": "#451a03",
  },
  yellow: {
    "50": "#fefce8",
    "100": "#fef9c3",
    "200": "#fef08a",
    "300": "#fde047",
    "400": "#facc15",
    "500": "#eab308",
    "600": "#ca8a04",
    "700": "#a16207",
    "800": "#854d0e",
    "900": "#713f12",
    "950": "#422006",
  },
  lime: {
    "50": "#f7fee7",
    "100": "#ecfccb",
    "200": "#d9f99d",
    "300": "#bef264",
    "400": "#a3e635",
    "500": "#84cc16",
    "600": "#65a30d",
    "700": "#4d7c0f",
    "800": "#3f6212",
    "900": "#365314",
    "950": "#1a2e05",
  },
  green: {
    "50": "#f0fdf4",
    "100": "#dcfce7",
    "200": "#bbf7d0",
    "300": "#86efac",
    "400": "#4ade80",
    "500": "#22c55e",
    "600": "#16a34a",
    "700": "#15803d",
    "800": "#166534",
    "900": "#14532d",
    "950": "#052e16",
  },
  emerald: {
    "50": "#ecfdf5",
    "100": "#d1fae5",
    "200": "#a7f3d0",
    "300": "#6ee7b7",
    "400": "#34d399",
    "500": "#10b981",
    "600": "#059669",
    "700": "#047857",
    "800": "#065f46",
    "900": "#064e3b",
    "950": "#022c22",
  },
  teal: {
    "50": "#f0fdfa",
    "100": "#ccfbf1",
    "200": "#99f6e4",
    "300": "#5eead4",
    "400": "#2dd4bf",
    "500": "#14b8a6",
    "600": "#0d9488",
    "700": "#0f766e",
    "800": "#115e59",
    "900": "#134e4a",
    "950": "#042f2e",
  },
  cyan: {
    "50": "#ecfeff",
    "100": "#cffafe",
    "200": "#a5f3fc",
    "300": "#67e8f9",
    "400": "#22d3ee",
    "500": "#06b6d4",
    "600": "#0891b2",
    "700": "#0e7490",
    "800": "#155e75",
    "900": "#164e63",
    "950": "#083344",
  },
  sky: {
    "50": "#f0f9ff",
    "100": "#e0f2fe",
    "200": "#bae6fd",
    "300": "#7dd3fc",
    "400": "#38bdf8",
    "500": "#0ea5e9",
    "600": "#0284c7",
    "700": "#0369a1",
    "800": "#075985",
    "900": "#0c4a6e",
    "950": "#082f49",
  },
  blue: {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a",
    "950": "#172554",
  },
  indigo: {
    "50": "#eef2ff",
    "100": "#e0e7ff",
    "200": "#c7d2fe",
    "300": "#a5b4fc",
    "400": "#818cf8",
    "500": "#6366f1",
    "600": "#4f46e5",
    "700": "#4338ca",
    "800": "#3730a3",
    "900": "#312e81",
    "950": "#1e1b4b",
  },
  violet: {
    "50": "#f5f3ff",
    "100": "#ede9fe",
    "200": "#ddd6fe",
    "300": "#c4b5fd",
    "400": "#a78bfa",
    "500": "#8b5cf6",
    "600": "#7c3aed",
    "700": "#6d28d9",
    "800": "#5b21b6",
    "900": "#4c1d95",
    "950": "#2e1065",
  },
  purple: {
    "50": "#faf5ff",
    "100": "#f3e8ff",
    "200": "#e9d5ff",
    "300": "#d8b4fe",
    "400": "#c084fc",
    "500": "#a855f7",
    "600": "#9333ea",
    "700": "#7e22ce",
    "800": "#6b21a8",
    "900": "#581c87",
    "950": "#3b0764",
  },
  fuchsia: {
    "50": "#fdf4ff",
    "100": "#fae8ff",
    "200": "#f5d0fe",
    "300": "#f0abfc",
    "400": "#e879f9",
    "500": "#d946ef",
    "600": "#c026d3",
    "700": "#a21caf",
    "800": "#86198f",
    "900": "#701a75",
    "950": "#4a044e",
  },
  pink: {
    "50": "#fdf2f8",
    "100": "#fce7f3",
    "200": "#fbcfe8",
    "300": "#f9a8d4",
    "400": "#f472b6",
    "500": "#ec4899",
    "600": "#db2777",
    "700": "#be185d",
    "800": "#9d174d",
    "900": "#831843",
    "950": "#500724",
  },
  rose: {
    "50": "#fff1f2",
    "100": "#ffe4e6",
    "200": "#fecdd3",
    "300": "#fda4af",
    "400": "#fb7185",
    "500": "#f43f5e",
    "600": "#e11d48",
    "700": "#be123c",
    "800": "#9f1239",
    "900": "#881337",
    "950": "#4c0519",
  },
};

const cssProperties: any = {
  width: "width",
  height: "height",
  maxWidth: "max-width",
  maxHeight: "max-height",
  textColor: "color",
  textDecorationColor: "text-decoration-color",
  backgroundColor: "background-color",
  flexBasis: "flex-basis",
  gap: "gap",
  paddingTop: "padding-top",
  paddingRight: "padding-right",
  paddingBottom: "padding-bottom",
  paddingLeft: "padding-left",
  marginTop: "margin-top",
  marginRight: "margin-right",
  marginBottom: "margin-bottom",
  marginLeft: "margin-left",
  borderTopColor: "border-top-color",
  borderRightColor: "border-right-color",
  borderBottomColor: "border-bottom-color",
  borderLeftColor: "border-left-color",
};

const pixelValueProperties = [
  "width",
  "height",
  "maxWidth",
  "maxHeight",
  "flexBasis",
  "gap",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
];
const percentValueProperties = ["width", "height", "flexBasis"];
const colorValueProperties = [
  "textColor",
  "textDecorationColor",
  "backgroundColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor",
];

const VisualEditorCSSClassWrapper = (props: Props) => {
  const { currentDocument, currentScreen } = useSelector(
    (state: RootState) => state.visualEditor
  );

  const Functions = {
    GetPixelClassRule(className: string, cssProperty: string) {
      const pixelValueRegExp = /^.*\-(\d+(\.\d+)?|px)$/;

      const matches = className.match(pixelValueRegExp);

      if (!matches) return undefined;

      const value = matches[1];

      if (value === "0") return `${cssProperty}:0px`;
      if (value === "px") return `${cssProperty}:1px`;

      const floatValue = parseFloat(value);

      return `${cssProperty}:${floatValue / 4}rem;`;
    },
    GetPercentClassRule(className: string, cssProperty: string) {
      const percentValueRegExp = /^.*\-(\d+)\/(\d+)$/;
      const matches = className.match(percentValueRegExp);

      if (!matches) return undefined;

      const totalDivisionsValue = matches[1];
      const selectedDivisionsValue = matches[2];

      const floatTotalDivisionsValue = parseFloat(totalDivisionsValue);
      const floatSelectedDivisionsValue = parseFloat(selectedDivisionsValue);

      return `${cssProperty}:${
        (floatTotalDivisionsValue / floatSelectedDivisionsValue) * 100
      }%`;
    },
    GetColorClassRule(className: string, cssProperty: string) {
      const fixedColors: string[] = ["black", "white"];

      const fixedColor = fixedColors.find((color: string) => {
        return className.includes(color);
      });

      if (fixedColor) return `${cssProperty}: ${fixedColor};`;

      const colorValueRegExp = /^.+-(\w+)-(\d+)$/;

      const matches = className.match(colorValueRegExp);

      if (!matches) return undefined;

      const colorName = matches[1];
      const colorLightLevel = matches[2];

      const colorObject = colors[colorName];

      if (!colorObject) return undefined;

      const hexColor = colorObject[colorLightLevel];

      if (!hexColor) return undefined;

      return `${cssProperty}: ${hexColor};`;
    },
    GetClasses() {
      if (!currentDocument) return undefined;

      const classNameList: string[] = [];
      const classDefinitions: string[] = [];

      currentDocument.nodes.map((node: PageDocumentNode) => {
        const classes = ClassGenerator.Generate(node, currentScreen);

        for (let _it_ = 0; _it_ < classes.length; _it_++) {
          const classResult = classes[_it_];

          if (!classNameList.includes(classResult.className)) {
            classNameList.push(classResult.className);

            let classRule: string = "";

            const pixelClassRule = Functions.GetPixelClassRule(
              classResult.className,
              cssProperties[classResult.property]
            );
            const percentClassRule = Functions.GetPercentClassRule(
              classResult.className,
              cssProperties[classResult.property]
            );
            const colorClassRule = Functions.GetColorClassRule(
              classResult.className,
              cssProperties[classResult.property]
            );

            if (classRules[classResult.className])
              classRule = classRules[classResult.className];
            else if (
              pixelValueProperties.includes(classResult.property) &&
              pixelClassRule
            )
              classRule = pixelClassRule;
            else if (
              percentValueProperties.includes(classResult.property) &&
              percentClassRule
            )
              classRule = percentClassRule;
            else if (
              colorValueProperties.includes(classResult.property) &&
              colorClassRule
            )
              classRule = colorClassRule;

            classDefinitions.push(
              `.${classResult.className
                .replace(".", "\\.")
                .replace("/", "\\/")}{${classRule}}`
            );
          }
        }
      });

      return classDefinitions.join("\n");
    },
  };

  if (!currentDocument) return undefined;

  return <style>{Functions.GetClasses()}</style>;
};

export default VisualEditorCSSClassWrapper;
